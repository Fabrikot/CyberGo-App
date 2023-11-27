<template>

    <div class="grid-container-element">

        <ul class="barre">
            <li><a class="active" href="/home">Home</a></li>
            <li><a href="/mystats">My stats</a></li>
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
            <h1>Who else in my school is Applying to my dream colleges? </h1>
            <p>Are you thinking to apply to a college but don't know who else in your school is also applying to the same college? </p>
            <p>Find out right here! </p>
            <p>But first, please enter your stats and your colleges so others can benefit too! </p>
            <p>You can enter your college information anonymously. Be honest, don't try to fool others, as you don't want others to enter wrong information to mislead you as well. </p>
            <button @click="MyStats">Enter your stats</button> &nbsp;
            <form @submit.prevent="addNote">
                <p1 ref="pElementRef" v-if="svisible">Maths</p1>
                <input v-if="svisible" v-model="stext">
                <button v-if="svisible">Add Todo</button>
            </form>
            <p />
            <p>
                <button @click="MyColleges">Enter your colleges</button>&nbsp;
                <select v-if="cvisible" v-model="selectedc">
                    <option disabled value="">Select your college</option>
                    <option>Lakanal</option>
                    <option>EPF</option>
                    <option>Polytech</option>
                    <option>Assas</option>
                </select>&nbsp;
            <p />

            <button @click="WhoIsApplying">Who is applying to the same colleges? </button>&nbsp;

            <TransitionGroup name="listo" tag="ul" :css="false"
                             @before-enter="onBeforeEnter"
                             @enter="onEnter"
                             @leave="onLeave">
                <li v-for="mat in Notes" :key="mat.id">
                    {{ mat.id }} : {{mat.text}}
                </li>
            </TransitionGroup>


        </div>

    </div>



</template>

    <script>
        import gsap from 'gsap'

        export default {
            name: 'Home',
            data() {
                return {
                    svisible: false,
                    cvisible: false,    
                    appvisible: false,
                    Mat: [
                        {nom: 'Maths' },
                        {nom: 'Francais' },
                        {nom: 'EPS' }
                    ],
                    Notes: [''],
                    matnom: '',
                    selectedc: '',
                    selected: '',

                    nb:0
                }
            },
            methods: {
                addNote() {
                    this.matnom = this.Mat[this.nb]["nom"]
                    this.Notes.splice(this.nb, 1, { id: this.matnom, text: this.stext })
                    this.stext=''
                    this.nb++
                },
                MyStats() {
                    this.svisible = !this.svisible
                },
                MyColleges() {
                    this.cvisible = !this.cvisible
                },
                WhoIsApplying() {
                    this.appvisible = !this.appvisible
                },
                onBeforeEnter(el) {
                    el.style.opacity = 0
                    el.style.height = 0
                },
                onEnter(el, done) {
                    gsap.to(el, {
                        opacity: 1,
                        height: '1.6em',
                        delay: el.dataset.index * 0.15,
                        onComplete: done
                    })
                },
                onLeave(el, done) {
                    gsap.to(el, {
                        opacity: 0,
                        height: 0,
                        delay: el.dataset.index * 0.15,
                        onComplete: done
                    })
                }
            },
            watch: {
                nb() {
                    if (this.nb == 3) {
                        this.nb = 0
                    }
                    this.$refs.pElementRef.textContent = this.Mat[this.nb]["nom"]
                }
            }
        }
        </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .grid-container-element {

    }

    .home {
        position:absolute;
        width: 69%;
        height:80%;
        border: 15px solid darkslategrey;
        padding: 50px;
        margin: 0px 0px 0px 21% ;
        display:inline-block;
    }
    h1 {
        color: floralwhite;
        text-align: center;
        text-shadow: 2px 2px darkslategrey;
        font-style: italic;
        font-weight: 600;
        font-family: "Franklin Gothic ";
    }
    button {
        background-color: floralwhite;
        border: 2px solid darkslategrey;
        color: darkslategrey;
        padding: 15px 32px;
        border-radius: 8px;
        transition: 0.3s;
        font-weight: 600;
    }
    button:hover {
        background-color: darkslategrey; /* Green */
        color: floralwhite;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    input{
        width:20%;
        margin: 4px 4px 4px 4px;
        height:32px;
    }
    select {
        width: 20%;
        margin: 4px 4px 4px 4px;
        height: 32px;
        background-color: floralwhite;
        border: 2px solid darkslategrey;
        color: darkslategrey;
    }
    p {
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
    }
    p1 {
        font-weight:700;
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

        /* Change the link color on hover */
    

    .barre a.active {
        background-color: #04AA6D;
        color: white;
    }

    .barre a:hover:not(.active) {
        background-color: #555;
        color: white;
        display: block;
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

