<template>
    <div class="grid-container-element">
        <meta charset="utf-8" />
        <Bubble charset="utf-8" :chart-options="chartOptions"
                :user-data="userData"
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
    import { Bubble } from 'vue-chartjs/legacy'

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        PointElement,
        LinearScale
    } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

    export default {
        name: 'BubbleChart',
        components: {
            Bubble
        },
        methods: {
            dispval(tooltipItem) {
                let txt = '';                
                txt = this.chartData.datasets[tooltipItem.datasetIndex].labels[tooltipItem.dataIndex] + ' : ' + tooltipItem.parsed.y;
                return txt
            },
            dispadv(tooltipItem) {
                let adv = '';

                for (let i = 0; i < this.userData.length; i++) {
                    if (this.userData[i].question.categories.id == (this.chartData.datasets[tooltipItem.datasetIndex].categ[tooltipItem.dataIndex])) { //if wanted id egals to cat id
                        if (this.userData[i].adviceTxt != "")
                            adv = this.userData[i].adviceTxt;

                    }
                }
                let nb = 1
                console.log(adv)
                if (adv.length / 140 > 1) {
                    if (adv.length / 140 > 2) {
                        return [adv.slice(0, adv.length / 3), adv.slice(adv.length / 3,2*adv.length/3),adv.slice(2*adv.length/3)] //to format the text in the bubble graph
                    }
                    console.log(adv.length)
                    return [adv.slice(0, adv.length / 2), adv.slice(adv.length / 2)]
                }
                else
                    return adv
            }
        },
        props: {
            userData: {
                type: Array,
                required: true
            },
            chartData: {
                type: Object,
                required: true
            },
            chartId: {
                type: String,
                default: 'bubble-chart'
            },
            datasetIdKey: {
                type: String,
                default: 'label'
            },
            width: {
                type: Number,
                default: 500
            },
            height: {
                type: Number,
                default: 600
            },
            cssClasses: {
                default: '',
                type: String
            },
            styles: {
                type: Object,
                default: () => { }
            },
            plugins: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            max: 100,
                            min: 0,
                            title: {
                                display: true,
                                align: "end",
                                text:"Average grade"
                            }
                        },
                        x: {
                            suggestedMin: 8,
                            title: {
                                display: true,
                                text: "Categories"
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            intersect: false,
                            mode: 'nearest',
                            callbacks: {
                                label: this.dispval,
                                afterLabel:this.dispadv
                            }
                        }
                    }
                }
            }
        }
    }
</script>

