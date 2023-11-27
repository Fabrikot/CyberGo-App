<template>

    <div class="grid-container-element">
        <ul class="barre">
            <li><a href="/home">Home</a></li>
            <li><a href="/mystats">My stats</a></li>
            <li><a class="active" href="/mymenu">Menu</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Secret</a>
                <div class="dropdown-content">
            <li><a href="/mystats">Secret1</a></li>
            <li><a href="/mystats">Secret2</a></li>
            <li><a href="/mystats">Secret3</a></li>
    </div>
    </li>&nbsp;

    </ul>
    <div class="home">
        <h1>Dashboard - Segurança atual</h1>
        <div class="polar1 reveal">
            <p>Sensibilidade à lei e Jurídico :</p>&nbsp;
            <PolarChart ref="polar1" :chart-data="chartData" @lasthover="selected1"></PolarChart>&nbsp;
            <p1>{{currenthover1}}</p1>
        </div>
        <div class="polar2 reveal">
            <p>Parte humana :</p>&nbsp;
            <PolarChart ref="polar2" :chart-data="chartData2" @lasthover="selected2"></PolarChart>&nbsp;
            <p1>{{currenthover2}}</p1>
        </div>
        <div class="polar3 reveal">
            <p>Parte técnica :</p>&nbsp;
            <PolarChart ref="polar3" :chart-data="chartData3" @lasthover="selected3"></PolarChart>
            <p1>{{currenthover3}}</p1>
        </div>
    </div>
    </div>


</template>


<script>
    import PolarChart from './Polar.vue';

    export default {
        name: 'MyColleges',
        beforeMount() {
            window.addEventListener("scroll", this.handleScroll);
        },
        unmounted() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        mounted() {
            this.handleScroll()
        },
        methods: {
            selected1(value) {
                this.currenthover1 = value
                var reveals = document.querySelectorAll("p1");
                reveals[0].classList.add("selected");
            },
            selected2(value) {
                this.currenthover2 = value
                var reveals = document.querySelectorAll("p1");
                reveals[1].classList.add("selected");
            },
            selected3(value) {
                this.currenthover3 = value
                var reveals = document.querySelectorAll("p1");
                reveals[2].classList.add("selected");
                console.log(value)
            },
            handleScroll() {
                var reveals = document.querySelectorAll(".reveal");
                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 450;
                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add("active");
                        let graphname = reveals[i].classList[0]
                        this.$refs[graphname].onupdate() //begins the animation on reveal
                    }
                }
            }
         },
        components: {
            PolarChart
        },
        data() {
            return {
                currenthover1: '',
                currenthover2: '',
                currenthover3: '',
                chartData: {
                    labels: [
                        'Exposição à LGPD',
                        'Riscos do mercado',
                        'Exigências do mercado',
                        'Clientes e fornecedores',
                        'Princípios da LGPD',
                        'Tratamentos de dados',
                    ],
                    datasets: [
                        {
                            label: 0,
                            data: [46.7,83.3,75,26.7,5.6,41.7],
                            dataweight: [400, 400, 400, 400, 400, 400, 400]

                        }

                    ]
                },
                chartData2: {
                    labels: [
                        'Nível empresarial',
                        'Dados pessoais e sensiveis',
                        'Recuperação de desastre',
                        'Sensibilizacão funcionarios',
                        'Boas práticas de segurança',
                        'Termos de RH',
                    ],
                    datasets: [
                        {
                            label: 1,
                            data: [25, 16.7, 20, 13.3, 16.7,16.7],
                            dataweight: [400, 400, 400, 400, 400, 400, 400]

                        }

                    ]
                },
                chartData3: {
                    labels: [
                        'Backup',
                        'Proteção contra ataques externos',
                        'Proteção de rede',
                        'Acesso a recursos e dados',
                        'Mesagens',
                        'Ativos fixos de TI',
                        'Segurança do ambiente físico',
                        'Softwares e sistemas'
                    ],
                    datasets: [
                        {
                            label: 2,
                            data: [80,86.7,31.5,23.8,40,9.5,55.6,30],
                            dataweight: [400, 400, 400, 400, 400, 400, 400]

                        }

                    ]
                }
            }
            
        }

    }
</script>

<style scoped>
    h1 {
        font-weight: 600;
        color:rgb(32,32,32);
    }
    .polar1 {
        background-color: rgb(236, 248, 236);
        border: 4px solid darkslategrey;
        padding: 20px 50px 20px;
        border-radius: 25px;
        margin: 0px 0px 15px;
    }
    .polar2 {
        background-color: rgb(255, 255, 230);
        border: 4px solid darkslategrey;
        padding: 20px 50px 50px;
        border-radius: 25px;
        margin: 0px 0px 15px;
    }
    .polar3 {
        background-color: rgb(230, 242, 255);
        border: 4px solid darkslategrey;
        padding: 20px 50px 50px;
        border-radius: 25px;
        margin: 0px 0px 15px;
    }
    .grid-container-element {
    }
    p {
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
        font-weight: 600;
        color: rgb(32,32,32);
    }
    p1 {
        border: 2px solid #ddd;
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
        color: rgb(32,32,32);
        padding: 10px 10px;
        margin: 20px 15px;
        border-radius: 8px;
        width: 350px;
        vertical-align: top;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
        display: inline-block;
        transition: all ease 0.5s;
        opacity:0;
    }
    p1.selected{
        opacity:1;
    }
    .home {
        position: absolute;
        width: 69%;
        height: 270%;
        border: 15px solid darkslategrey;
        padding: 20px 50px;
        margin: 0px 0px 0px 21%;
        display: inline-block;
    }


    .barre {
        position: fixed; /* Make it stick, even on scroll */
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 20%;
        background-color: #f1f1f1;
        height: 100%; /* Full height */
        overflow: auto; /* Enable scrolling if the sidenav has too much content */
    }

    .barre a {
        display: block;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
    }

    .barre a.active {
        background-color: #04AA6D;
        color: white;
    }

    .barre a:hover:not(.active) {
        background-color: #555;
        color: white;
    }

    button {
        background-color: floralwhite;
        border: 2px solid darkslategrey;
        color: darkslategrey;
        padding: 15px 32px;
        border-radius: 8px;
        transition: 0.3s;
        font-weight: 600;
        margin: 0 0 0 28%;

    }
    .reveal {
        position: relative;
        transform: translateY(30px);
        opacity: 0;
        transition: 1s all ease;
    }

    .reveal.active {
        transform: translateY(0);
        opacity: 1;
    }

    button:hover {
        background-color: darkslategrey; /* Green */
        color: floralwhite;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content {
        display: none;
        right: 0;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 8px 16px;
        width: 250px;
        text-decoration: none;
        display: block;
    }
</style>
