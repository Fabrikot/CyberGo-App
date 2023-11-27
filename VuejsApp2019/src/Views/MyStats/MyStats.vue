<template>

    <div class="grid-container-element">
        <meta charset="utf-8" />

        <ul class="barre">
            <li><a href="/home">Home</a></li>
            <li><a class="active" href="/mystats">My stats</a></li>
            <li><a href="/mymenu">Menu</a></li>
            <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Secret</a>
                <div class="dropdown-content">
                        <li><a href="/mystats">Secret1</a></li>
                        <li><a href="/mystats">Secret2</a></li>
                        <li><a href="/mystats">Secret3</a></li>
                </div>
            </li>
        </ul> 
    <div class="home">
        <div class="head">
            <h1>{{datapolarchart[datasetindex][dataindex]}} :  </h1>
            <Gauge class="gauge" :percentage="averagevalue"></Gauge>
        </div>

        <div class="gr1">
            <graph-bar3d class="bar3D" :width="650"
                         :height="450"
                         :axis-min="0"
                         :axis-max="3"
                         :padding-top="100"
                         :padding-bottom="100"
                         :depth="250"
                         :labels="label"
                         :names="names"
                         :barMargin="2"
                         :barPadding="20"
                         :active-index="[ 0,1,2,3 ]"
                         :values="values"
                         @mouseover="onClickBar">
                <rotate3d></rotate3d>
                <tooltip :names="names" :position="'top'"></tooltip>
                <legends :names="names"></legends>
            </graph-bar3d>
            <div class="grpleft">

                <div :style="colors(sortedalert[selectedquestion])" class="alert reveal">
                    <img :src=link(sortedalert[selectedquestion]) width="25" height="25">
                    <span>Question {{selectedquestion+1}}</span>
                    <p class="txt"> {{sortedalert[selectedquestion].txt}} :</p>
                    <p class="txt"> {{sortedalert[selectedquestion].val}}</p>
                    <GradeBar class="bargrade" :valuequestion="sortedalert[selectedquestion].id" :valueaverage="values[2][selectedquestion]"></GradeBar>

                </div>

            </div>


        </div>



    </div>
    </div>

</template>


<script>
    import Gauge from './Gauge.vue'; 
    import GradeBar from './Bar Gauge.vue';//class="gauge" :percentage="sortedalert[selectedquestion].id"

    // To check the scroll position on page load
    export default {
        name: 'MyStats',
        beforeMount() {
            const clickinfo = localStorage.getItem('clickinfo');
            const obj = JSON.parse(clickinfo)
            this.dataindex = obj.posi
            this.datasetindex = obj.datasetindex
            this.averagevalue = obj.value
            this.values = this.setvalues[this.datasetindex][this.dataindex]
            for (let i = 0; i < this.setquestions[this.datasetindex][this.dataindex].length; i++) {
                let valquestion = this.setvalues[this.datasetindex][this.dataindex][0][i]
                this.listnotes.splice(this.listnotes.length, 0, { id: valquestion, txt: this.setquestions[this.datasetindex][this.dataindex][i], val: this.setadvice[this.datasetindex][this.dataindex][i][3-valquestion] })
            }
            window.addEventListener("scroll", this.handleScroll);
            window.addEventListener("webkitAnimationEnd", this.callfunction, false);
            window.addEventListener("animationend", this.callfunction, false);
            window.addEventListener("oanimationend", this.callfunction, false);

        },
        mounted() {
            const reveals = document.querySelectorAll(".reveal");
            reveals[0].classList.add("active");
        },
        unmounted() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        computed: {
            sortedalert() {
                let sortedlist = this.listnotes
                /*
                sortedlist = sortedlist.sort((a, b) => {
                    return a.id - b.id
                })    if we want to sort the results */ 
                return sortedlist
            }

        },
        components: {
            Gauge,
            GradeBar
        },
        watch: {
            selectedquestion(newselectedquestion, oldselectedquestion) {
                console.log(newselectedquestion)
                var txt = document.querySelectorAll(".txt");
                txt[0].classList.add("appear");
                txt[1].classList.add("appear");

            }
        },
        methods: {
            onClickBar: function (obj) {
                this.selectedquestion = obj.dataIndex;
             },
            dataFormat: function (a, b) {
                if (b) return b + "%";
                return a;
            },
            colors: function (listval) {
                var height = (listval.txt.length + listval.val.length) / 2.2 + 90
                
                if (listval.id == 0) {
                    return 'border : 2px solid red;height:' + height + 'px'
                } else if (listval.id == 1) {
                    return 'border : 2px solid orange;height:' + height + 'px'
                } else if (listval.id == 2) {
                    return 'border : 2px solid yellow;height:' + height + 'px'
                } else {
                    return 'border : 2px solid green;height:' + height + 'px'
                }
            },
            link: function (listval) {
                if (listval.id == 0) {
                    return 'red.png'
                } else if (listval.id == 1) {
                    return 'orange.png'
                } else if (listval.id == 2) {
                    return 'yellow.png'
                } else {
                    return 'green.png'
                }
                
            },
            callfunction: function () {
                var txt = document.querySelectorAll(".txt");
                txt[0].classList.remove("appear");
                txt[1].classList.remove("appear");

            },
            handleScroll() {
                var reveals = document.querySelectorAll(".reveal");
                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 50;
                    if (elementTop < windowHeight - elementVisible) {
                        //reveals[i].classList.add("active");
                    } 
                }
            }
        },
        data() {
            return {
                height: 250,
                selectedquestion: 0,
                names: ["Cybergo1", "Cybergo2", "Average"],
                values: [],
                label: ['1Q', '2Q', '3Q', '4Q', '5Q'],
                listnotes: [],
                averagevalue: 0,
                dataindex: 0,
                datasetindex: 0,
                datapolarchart: [[
                    'Exposição à LGPD',
                    'Riscos do mercado',
                    'Exigências do mercado',
                    'Clientes e fornecedores',
                    'Princípios da LGPD',
                    'Tratamentos de dados',
                ], [
                    'Nível empresarial',
                    'Dados pessoais e sensiveis',
                    'Recuperação de desastre',
                    'Sensibilizacão funcionarios',
                    'Boas práticas de segurança',
                    'Termos de RH'
                ], [
                    'Backup',
                    'Proteção contra ataques externos',
                    'Proteção de rede',
                    'Acesso a recursos e dados',
                    'Mesagens',
                    'Ativos fixos de TI',
                    'Segurança do ambiente físico',
                    'Softwares e sistemas'
                ]],
                setquestions:
                    [
                        [
                            ['Contando com os clientes, colaboradores e contatos de fornecedores, quantas pessoas físicas têm os seus dados pessoais cadastrados na sua empresa?',
                                'A sua empresa guarda dados pessoais sensíveis: etnia, religião, preferência política, filiação a entidades sindicais, informações de saúde, orientação sexual, dados genéticos ou biométricos?',
                                'Quantos tipos de contratos e termos jurídicos diferentes a sua empresa possui que envolvem dados pessoais ou muito confidenciais? Contratos de trabalho / termos de RH / contratos de fornecedores / acordos com clientes, etc.',
                                'A sua empresa tem dados pessoais de crianças e / ou adolescentes ?',
                                'De todas as informações que a sua empresa tem e usa, quantos por centos são informações pessoais ou muito confidenciais que abalariam seriamente o seu negócio ou levariam a sua empresa a falência se elas fossem perdidas, vazadas para os seus concorrentes ou expostas publicamente ?'
                            ],
                            ['Qual é a agressividade da concorrência no seu mercado ?',
                                'A sua atividade fica num mercado que é muito atacado pelos criminais cibernéticos(tais como bancos ou o setor da saúde) ?',
                                'A sua empresa tem inimigos(que querem especificamente "a pele" da sua empresa) ?',
                                'A sua empresa é muito inovadora no que ela faz ao ponto de ser alvo de ataques direcionados para roubar a sua expertise ?',
                                'A sua empresa tem uma prospecção comercial muito ativa e / ou um nome / uma reputação grande no mercado que podem incentivar os seus clientes a processá - la por uso indevido de dados pessoais ?'
                            ],
                            ['A sua empresa é fornecedora de empresas europeias e / ou americanas que já respeitam legislações estrangeiras relativas à proteção de dados ?',
                                'A sua empresa troca dados pessoais com empresas de outros países ?',
                                'Qual é o nível de segurança de dados e adequação à LGPD que os seus parceiros mais importantes(clientes e / ou fornecedores) exigem da sua empresa ?',
                                'Qual é o nível de segurança de dados e adequação à LGPD que a sua empresa exige dos seus parceiros(clientes e / ou fornecedores) com os quais ela troca dados pessoais ?'
                            ],
                            ['O uso e a proteção dos dados são definidos e acordados nos documentos contratuais com os clientes ?',
                                'O uso e a proteção dos dados são definidos e acordados nos documentos contratuais com os fornecedores ?',
                                'A empresa audita os procedimentos de segurança dos parceiros com quem ela troca dados pessoais ?',
                                'A empresa tem um plano de comunicação interna e externa em caso de perda ou vazamento de dados ?',
                                'Foi definido um comitê e uma organização de crise para os incidentes mais graves de perda ou vazamento de dados ?'
                            ],
                            ['A empresa definiu as finalidades e os prazos dos tratamentos dos dados pessoais ?',
                                'As bases legais de uso das informações pessoais são definidas ?',
                                'A empresa tem o consentimento dos titulares dos dados pessoais para as finalidades predefinidas ?',
                                'Os titulares dos dados pessoais podem acessar e modificar esses dados ?',
                                'O controlador e o operador de cada tratamento de dados pessoais são claramente identificados e publicados para os titulares dos dados ?',
                                'O advogado da sua empresa já é formado sobre a LGPD ?'
                            ],
                            ['O responsável da LGPD e segurança da informação é independente dentro da empresa e tem o poder de mudar os processos de tratamento de dados ?',
                                'A sua empresa coleta apenas os dados pessoais indispensáveis às atividades ?',
                                'Os dados pessoais coletados são eliminados após o prazo do tratamento ?',
                                'Um departamento tem acesso e pode usar dados pessoais coletados por outros departamentos?'
                            ]
                        ]
                    ],
                setvalues:
                    [
                        [
                            [[1, 1, 1, 2, 2], [0, 0, 0, 0, 0], [2.3, 1.6, 1.9, 1.5, 2.3]],
                            [[3, 2, 2, 1, 2], [0, 0, 0, 0, 0], [2.3, 1.6, 1.9, 1.5, 2.3]], //3rd and 4th are 1.5
                            [[0, 3, 3, 3,0], [0, 0, 0, 0, 0], [2.3, 1.6, 1.9, 1.5, 2.3]],
                            [1, 1, 0, 1, 1],
                            [0, 0, 0, 0, 0, 1],
                            [0, 3, 1, 1]
                        ]
                    ],
                setadvice:
                    [
                        [
                            [
                                ['Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa possui muito poucos dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD','Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa uma quantidade moderada de dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD','Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa uma quantidade grande de dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD','Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa possui uma quantidade muito grande de dados pessoais(contemplados na LGPD), o que exige uma alta atenção e uma adequação rígida à lei.'
                                ],
                                ['- Ela não tem dados pessoais sensíveis(no sentido da LGPD), o que limita o risco e o esforço para a adequação', '- Ela tem também poucos dados pessoais sensíveis(no sentido da LGPD), o que limita o risco e o esforço para a adequação', '- Ela tem também uma quantidade razoável de dados pessoais sensíveis(no sentido da LGPD), o que aumenta o risco perante a LGPD e exige um nível de proteção maior.O mapeamento desses dados é um ponto importante.','- Ela tem também uma quantidade importante de dados pessoais sensíveis(no sentido da LGPD), o que aumenta significativamente o risco perante a LGPD e exige um nível de proteção bem superior.O mapeamento desses dados é um ponto crucial.'
                                ],
                                ['- Existem pouquíssimos tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que facilita tremendamente o trabalho de adequação','- Existem poucos tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que facilita o trabalho de adequação.Sugerimos que seja feita uma reavaliação desses documentos no âmbito da LGPD.','- Existe uma quantidade razoável de tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que aumenta o trabalho de adequação.Sugerimos que isso seja planejado com um especialista LGPD da área jurídica.','- Existe uma grande quantidade de tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que vai gerar um trabalho de adequação potencialmente importante.Sugerimos que isso seja planejado com um especialista LGPD da área jurídica.'
                                ],
                                ['- A sua empresa não tem dados pessoais de menores de idade.É um ponto favorável e uma adequação a menos a realizar','- A sua empresa tem poucos dados pessoais de menores de idade, sobre os filhos dos colaboradores.A adequação à LGPD será limitada ao consentimento dos colaboradores e à proteção desses dados.','- A sua empresa tem dados pessoais de menores de idade, filhos de colaboradores e clientes.A adequação à LGPD deverá contemplar um trabalho específico sobre o consentimento e a proteção desses dados.','- A sua empresa tem muitos dados pessoais de menores de idade, filhos de colaboradores e principalmente clientes.A adequação à LGPD deverá contemplar um importante trabalho sobre o consentimento e a proteção desses dados.'
                                ],
                                ['- Não há nenhum dado muito confidencial a ser protegido na sua empresa, além os dados pessoais da LGPD. Pode focar só na adequação à LGPD sem considerar a proteção de dados sensíveis para o seu negócio.','- Há pouquíssimos dados não pessoais e muito confidenciais a serem protegidos na sua empresa. A adequação à LGPD pode ser uma oportunidade de rever a proteção desses dados sensíveis para o seu negócio.','- Há dados não pessoais e muito confidenciais a serem protegidos na sua empresa. Sugerimos que dentro do projeto de adequação à LGPD seja revista a proteção desses dados sensíveis para o seu negócio.','- Há bastantes dados não pessoais e muito confidenciais a serem protegidos na sua empresa. É altamente aconselhável que a adequação à LGPD seja utilizada para rever profundamente a proteção desses dados sensíveis para o seu negócio.'
                                ]
                            ],
                            [
                                ['Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa possui muito poucos dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD', 'Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa uma quantidade moderada de dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD', 'Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa uma quantidade grande de dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD', 'Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa possui uma quantidade muito grande de dados pessoais(contemplados na LGPD), o que exige uma alta atenção e uma adequação rígida à lei.'
                                ],
                                ['- Ela não tem dados pessoais sensíveis(no sentido da LGPD), o que limita o risco e o esforço para a adequação', '- Ela tem também poucos dados pessoais sensíveis(no sentido da LGPD), o que limita o risco e o esforço para a adequação', '- Ela tem também uma quantidade razoável de dados pessoais sensíveis(no sentido da LGPD), o que aumenta o risco perante a LGPD e exige um nível de proteção maior.O mapeamento desses dados é um ponto importante.', '- Ela tem também uma quantidade importante de dados pessoais sensíveis(no sentido da LGPD), o que aumenta significativamente o risco perante a LGPD e exige um nível de proteção bem superior.O mapeamento desses dados é um ponto crucial.'
                                ],
                                ['- Existem pouquíssimos tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que facilita tremendamente o trabalho de adequação', '- Existem poucos tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que facilita o trabalho de adequação.Sugerimos que seja feita uma reavaliação desses documentos no âmbito da LGPD.', '- Existe uma quantidade razoável de tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que aumenta o trabalho de adequação.Sugerimos que isso seja planejado com um especialista LGPD da área jurídica.', '- Existe uma grande quantidade de tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que vai gerar um trabalho de adequação potencialmente importante.Sugerimos que isso seja planejado com um especialista LGPD da área jurídica.'
                                ],
                                ['- A sua empresa não tem dados pessoais de menores de idade.É um ponto favorável e uma adequação a menos a realizar', '- A sua empresa tem poucos dados pessoais de menores de idade, sobre os filhos dos colaboradores.A adequação à LGPD será limitada ao consentimento dos colaboradores e à proteção desses dados.', '- A sua empresa tem dados pessoais de menores de idade, filhos de colaboradores e clientes.A adequação à LGPD deverá contemplar um trabalho específico sobre o consentimento e a proteção desses dados.', '- A sua empresa tem muitos dados pessoais de menores de idade, filhos de colaboradores e principalmente clientes.A adequação à LGPD deverá contemplar um importante trabalho sobre o consentimento e a proteção desses dados.'
                                ],
                                ['- Não há nenhum dado muito confidencial a ser protegido na sua empresa, além os dados pessoais da LGPD. Pode focar só na adequação à LGPD sem considerar a proteção de dados sensíveis para o seu negócio.', '- Há pouquíssimos dados não pessoais e muito confidenciais a serem protegidos na sua empresa. A adequação à LGPD pode ser uma oportunidade de rever a proteção desses dados sensíveis para o seu negócio.', '- Há dados não pessoais e muito confidenciais a serem protegidos na sua empresa. Sugerimos que dentro do projeto de adequação à LGPD seja revista a proteção desses dados sensíveis para o seu negócio.', '- Há bastantes dados não pessoais e muito confidenciais a serem protegidos na sua empresa. É altamente aconselhável que a adequação à LGPD seja utilizada para rever profundamente a proteção desses dados sensíveis para o seu negócio.'
                                ]
                            ],
                            [
                                ['Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa possui muito poucos dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD', 'Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa uma quantidade moderada de dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD', 'Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa uma quantidade grande de dados pessoais(contemplados na LGPD)"	"Exposição aos riscos da LGPD', 'Nesta parte estaremos avaliando o quão exposta aos riscos gerados pela não compliance à LGPD a sua empresa fica: - A primeira constatação é que a sua empresa possui uma quantidade muito grande de dados pessoais(contemplados na LGPD), o que exige uma alta atenção e uma adequação rígida à lei.'
                                ],
                                ['- Ela não tem dados pessoais sensíveis(no sentido da LGPD), o que limita o risco e o esforço para a adequação', '- Ela tem também poucos dados pessoais sensíveis(no sentido da LGPD), o que limita o risco e o esforço para a adequação', '- Ela tem também uma quantidade razoável de dados pessoais sensíveis(no sentido da LGPD), o que aumenta o risco perante a LGPD e exige um nível de proteção maior.O mapeamento desses dados é um ponto importante.', '- Ela tem também uma quantidade importante de dados pessoais sensíveis(no sentido da LGPD), o que aumenta significativamente o risco perante a LGPD e exige um nível de proteção bem superior.O mapeamento desses dados é um ponto crucial.'
                                ],
                                ['- Existem pouquíssimos tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que facilita tremendamente o trabalho de adequação', '- Existem poucos tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que facilita o trabalho de adequação.Sugerimos que seja feita uma reavaliação desses documentos no âmbito da LGPD.', '- Existe uma quantidade razoável de tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que aumenta o trabalho de adequação.Sugerimos que isso seja planejado com um especialista LGPD da área jurídica.', '- Existe uma grande quantidade de tipos de contratos e termos jurídicos envolvendo dados pessoais na sua empresa, o que vai gerar um trabalho de adequação potencialmente importante.Sugerimos que isso seja planejado com um especialista LGPD da área jurídica.'
                                ],
                                ['- A sua empresa não tem dados pessoais de menores de idade.É um ponto favorável e uma adequação a menos a realizar', '- A sua empresa tem poucos dados pessoais de menores de idade, sobre os filhos dos colaboradores.A adequação à LGPD será limitada ao consentimento dos colaboradores e à proteção desses dados.', '- A sua empresa tem dados pessoais de menores de idade, filhos de colaboradores e clientes.A adequação à LGPD deverá contemplar um trabalho específico sobre o consentimento e a proteção desses dados.', '- A sua empresa tem muitos dados pessoais de menores de idade, filhos de colaboradores e principalmente clientes.A adequação à LGPD deverá contemplar um importante trabalho sobre o consentimento e a proteção desses dados.'
                                ],
                                ['- Não há nenhum dado muito confidencial a ser protegido na sua empresa, além os dados pessoais da LGPD. Pode focar só na adequação à LGPD sem considerar a proteção de dados sensíveis para o seu negócio.', '- Há pouquíssimos dados não pessoais e muito confidenciais a serem protegidos na sua empresa. A adequação à LGPD pode ser uma oportunidade de rever a proteção desses dados sensíveis para o seu negócio.', '- Há dados não pessoais e muito confidenciais a serem protegidos na sua empresa. Sugerimos que dentro do projeto de adequação à LGPD seja revista a proteção desses dados sensíveis para o seu negócio.', '- Há bastantes dados não pessoais e muito confidenciais a serem protegidos na sua empresa. É altamente aconselhável que a adequação à LGPD seja utilizada para rever profundamente a proteção desses dados sensíveis para o seu negócio.'
                                ]
                            ]
                        ]
                    ]

            }
        }
    };
</script>

<style scoped>
    p {
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
        color: rgb(64,64,64);
        display: inline-block;
    }
    span {
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
        vertical-align:top;
        margin:5px 0 0;
        font-weight:600;
        color: rgb(64,64,64);
        display: inline-block;
    }
    img {
        display: inline-block;
        margin:0 15px 0 0
    }
    .grpleft{
        display:inline-block;
    }
    h1 {
        font-weight: 600;
        color: rgb(48,48,48);
        width: 650px;
        padding-block: 0 0 50px;
        display: inline-block;
        vertical-align: top;
    }
    .bargrade{
        position:absolute;
        top:350px;
    }
    .txt.appear {
        color: rgb(64,64,64);
        animation-name: opacity;
        animation-duration: 1s;
    }

    @keyframes opacity{
        0% {
            opacity: 0;
            transform: translateY(-15px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            opacity: 1;
        }
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

    .grid-container-element {
    
    }
    .head{
        margin:auto;
    }
    .gr1 {
        display: inline-block;
        margin: 0 0 25px;
    }
    .gauge {
        display: inline-block;
    }
    .bar3D{
        vertical-align:top;
        display:inline-block;
    }
    .home {
        position: absolute;
        width: 69%;
        height: 90%;
        border: 15px solid darkslategrey;
        padding: 20px 50px;
        margin: 0px 0px 0px 21%;
        display: inline-block;
        border-radius: 8px;
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
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .alert {
        list-style-type: none;
        border: 2px solid #ddd;
        padding: 10px 10px;
        margin: 70px 15px;
        border-radius: 8px;
        width: 350px;
        vertical-align: top;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
        display: inline-block;
        transition:all ease 0.5s;
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