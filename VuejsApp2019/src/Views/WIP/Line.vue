<template>
    <LineChartGenerator :chart-options="chartOptions"
                        :chart-data="chartData"
                        :chart-id="chartId"
                        :dataset-id-key="datasetIdKey"
                        :plugins="plugins"
                        :css-classes="cssClasses"
                        :styles="styles"
                        :width="width"
                        :height="height" />
</template>

<script>
    import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        CategoryScale,
        PointElement
    } from 'chart.js'

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        CategoryScale,
        PointElement
    )

    export default {
        name: 'LineChart',
        components: {
            LineChartGenerator
        },
        props: {
            chartId: {
                type: String,
                default: 'line-chart'
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
                chartData: {
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July'
                    ],
                    datasets: [
                        {
                            label: 'Juridico',
                            backgroundColor: '#24c762',
                            borderColor: '#24c762',
                            data: [40, 39, 30, 40, 39, 50, 45],
                            yAxisID: 'y',
                        },
                        {
                            label: 'Humana',
                            backgroundColor: '#dedb45',
                            borderColor: '#dedb45',
                            data: [7, 8, 10, 12, 19, 20, 22],
                            yAxisID: 'y1',
                        },
                        {
                            label: 'Technico',
                            backgroundColor: '#1d5fab',
                            borderColor: '#1d5fab',
                            data: [20, 29, 27, 37, 55, 65, 67],
                            yAxisID: 'y',
                        }
                    ]
                },
                chartOptions: {
                    responsive: true,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    stacked: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Chart.js Line Chart - Multi Axis'
                        }
                    },
                    scales: {
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            max: 100,
                            min: 0
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            max: 50,
                            min: 0,

                            // grid line settings
                            grid: {
                                drawOnChartArea: false, // only want the grid lines for one axis to show up
                            },
                        },
                    },
                    maintainAspectRatio: false,

                    tension:0.1
                }
            }
        }
    }
</script>
