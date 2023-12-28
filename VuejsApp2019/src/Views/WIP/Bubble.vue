<template>
    <div class="grid-container-element">
        <meta charset="utf-8" />
        <Bubble charset="utf-8" :chart-options="chartOptions"
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
            }
        },
        props: {
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
                chartData: {
                    datasets: [
                        {
                            label: 'Parte Juridico',
                            labels: [
                                'Exposi��o � LGPD',
                                'Riscos do mercado',
                                'Exig�ncias do mercado',
                                'Clientes e fornecedores',
                                'Princ�pios da LGPD',
                                'Tratamentos de dados',
                            ],
                            backgroundColor: '#24c762',
                            data: [
                                {
                                    x: 1,
                                    y: 42,
                                    r: 42
                                },
                                {
                                    x: 2,
                                    y: 73,
                                    r: 73
                                },
                                {
                                    x: 3,
                                    y: 75,
                                    r: 75
                                },
                                {
                                    x: 4,
                                    y: 28,
                                    r: 28
                                },
                                {
                                    x: 5,
                                    y: 5,
                                    r: 5
                                },
                                {
                                    x: 6,
                                    y: 41,
                                    r: 41
                                },
                            ]
                        },
                        {
                            label: 'Parte Humana',
                            labels: [
                                'N�vel empresarial',
                                'Dados pessoais e sensiveis',
                                'Recupera��o de desastre',
                                'Sensibilizac�o funcionarios',
                                'Boas pr�ticas de seguran�a',
                                'Termos de RH',
                            ],
                            backgroundColor: '#dedb45',
                            data: [
                                {
                                    x: 1,
                                    y: 25,
                                    r: 25
                                },
                                {
                                    x: 2,
                                    y: 16,
                                    r: 16
                                },
                                {
                                    x: 3,
                                    y: 20,
                                    r: 20
                                },
                                {
                                    x: 4,
                                    y: 13,
                                    r: 13
                                },
                                {
                                    x: 5,
                                    y: 20,
                                    r: 20
                                },
                                {
                                    x: 6,
                                    y: 16,
                                    r: 16
                                },
                            ]
                        },
                        {
                            label: 'Parte Technico',
                            labels: [
                                'Backup',
                                'Prote��o contra ataques externos',
                                'Prote��o de rede',
                                'Acesso a recursos e dados',
                                'Mesagens',
                                'Ativos fixos de TI',
                                'Seguran�a do ambiente f�sico',
                                'Softwares e sistemas'
                            ],
                            backgroundColor: '#1d5fab',
                            data: [
                                {
                                    x: 1,
                                    y: 80,
                                    r: 80
                                },
                                {
                                    x: 2,
                                    y: 86,
                                    r: 86
                                },
                                {
                                    x: 3,
                                    y: 33,
                                    r: 33
                                },
                                {
                                    x: 4,
                                    y: 23,
                                    r: 23
                                },
                                {
                                    x: 5,
                                    y: 40,
                                    r: 40
                                },
                                {
                                    x: 6,
                                    y: 9,
                                    r: 9
                                },
                                {
                                    x: 7,
                                    y: 55,
                                    r: 55
                                },
                                {
                                    x: 8,
                                    y: 33,
                                    r: 33
                                },
                            ]
                        },
                    ]
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            max: 100
                        },
                        x: {
                            min: 0
                        }
                    },
                    plugins: {
                        tooltip: {
                            intersect: false,
                            mode: 'nearest',
                            callbacks: {
                                label: this.dispval,
                            }
                        }
                    }
                }
            }
        }
    }
</script>

