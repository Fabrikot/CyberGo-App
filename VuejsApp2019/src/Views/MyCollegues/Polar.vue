<template>
    <div v-if="load">
        <meta charset="utf-8" />
        <PolarArea :chart-options="chartOptions"
                   :chart-data="chartData"
                   :chart-id="chartId"
                   :dataset-id-key="datasetIdKey"
                   :plugins="plugins"
                   :css-classes="cssClasses"
                   :styles="styles"
                   :width="width"
                   :height="height" />
    </div>
</template>

<script>
    import { PolarArea } from 'vue-chartjs/legacy'
    import colorLib from '@kurkle/color';

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        RadialLinearScale
    } from 'chart.js'

    ChartJS.register(Title, Tooltip, ArcElement, Legend, RadialLinearScale)

    function colorize(opaque, hover, ctx) {
        const v = ctx.raw;
        const c = v < 35 ? '#D60000'
            : v < 55 ? '#F46300'
                : v < 75 ? '#0358B6'
                    : '#44DE28';

        const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

        return opaque ? c : transparentize(c, opacity);
    }
    function colori(v) {
        const c = v < 35 ? '#D60000'
            : v < 55 ? '#F46300'
                : v < 75 ? '#0358B6'
                    : '#44DE28';
        const opacity = 1 - Math.abs(v / 150) - 0.2;

        return transparentize(c, opacity);

    }

    export function transparentize(value, opacity) {
        var alpha = opacity === undefined ? 0.5 : 1 - opacity;
        return colorLib(value).alpha(alpha).rgbString();
    }
    function hoverColorize(ctx) {
        return colorize(false, true, ctx);
    }

    export default {
        name: 'PolarAreaChart',
        components: {
            PolarArea
        },
        props: {
            chartData: {
                type: Object,
                required: true
            },
            chartId: {
                type: String,
                default: 'polar-chart'
            },
            datasetIdKey: {
                type: String,
                default: 'label'
            },
            width: {
                type: Number,
                default: 400
            },
            height: {
                type: Number,
                default: 400
            },
            cssClasses: {
                default: '',
                type: String
            },
            styles: {
                type: Object,
                default: () => { }
            }
         },
        methods: {
            addData(label, newData) {
                this.chartData.labels.push(label);
                this.chartData.datasets[0].data.push(newData);
                //this.chartOptions.scales.r.pointLabels.color = 'red';
            },
            onupdate() {
                if (this.load != true) {
                    this.load = true;
                }
            },
            handleclic(evt, array) {
                if (array.length != 0) {
                    var position = array[0].index;
                    var nbdataset = this.chartData.datasets[0].label
                    var val = this.chartData.datasets[0].data[position]
                    /*var activeElement = this.tooltip.dataPoints[0].label 
                    var test = this.chartOptions.scales.r.pointLabels*/
                    var payload = { posi: position, datasetindex: nbdataset, value: val};
                    localStorage.setItem('clickinfo', JSON.stringify(payload))
                    window.location='/mystats'
                } else {
                    console.log("You selected the background!");
                }

            },
            handlehov(evt, array) {
                if (array.length != 0) {
                    var position = array[0].index;
                    if (this.lastHover != position) {
                        this.lastHover = position
                        for (let i = 0; i < this.chartData.datasets[0].dataweight.length; i++) {
                            this.chartData.datasets[0].dataweight[i] = 400;
                        }
                    }
                    else {
                        this.chartData.datasets[0].dataweight[position] = 600
                        this.$emit('lasthover',position)
                    }
                }

            }
        }
        ,
        data() {
            return {
                load:false,
                lastHover:'',  
                chartOptions: {
                    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
                    elements: {
                        arc: {
                            backgroundColor: colorize.bind(null, false, false),
                            borderColor: colorize.bind(null, false, false),
                            hoverBackgroundColor: hoverColorize,
                        }
                    },
                    onClick: this.handleclic,
                    onHover: this.handlehov,
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            max: 100,
                            ticks: {
                                count: 6,
                                font: {
                                    size: 15,
                                    weight: 600,
                                },
                                color: 'darkslategrey',
                                showLabelBackdrop:false,
                                },
                            pointLabels: {
                                display: true,
                                color: (ctx) => {
                                    return colori(this.chartData.datasets[0].data[ctx.index])
                                    },
                                centerPointLabels: true,
                                font: {
                                    size: 20,
                                    weight: (ctx) => {
                                        return this.chartData.datasets[0].dataweight[ctx.index]
                                    }
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }
            }
        }

    }
    
</script>
