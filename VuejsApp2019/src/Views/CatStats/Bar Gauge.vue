<template>
    <div class="wrapper">

        <div class="skill">
            <p>Cybergo1</p>
            <div class="skill-bar skill1" :style="{ width: `${widthbarquestion}` }">
                <span class="skill-count1">{{valuequestion}}/3</span>
            </div>
        </div>
        <div class="skill">
            <p>Average</p>
            <div class="skill-bar skill2" :style="{ width: `${widthbaraverage}` }">
                <span class="skill-count2">{{valueaverage}}/3</span>
            </div>
        </div>

    </div>
</template>

<script setup>
    //#b4c0be
    export default {
        props: {
            valuequestion: {
                type: Number,
                required: true
            },
            valueaverage: {
                type: Number,
                required: true
            }
        },
        beforeUpdate() {
            const valq = this.valuequestion * 33;
            const valav = this.valueaverage * 33;
            this.widthbarquestion = `${valq}%`
            this.widthbaraverage = `${valav}%`
        },
        mounted() {
            const valq = this.valuequestion * 33;
            const valav = this.valueaverage * 33;
            this.widthbarquestion = `${valq}%`
            this.widthbaraverage = `${valav}%`
        },
        data() {
            return {
                widthbarquestion: '',
                widthbaraverage:'',
            }
        }
    }


</script>

<style scoped>
    .wrapper {
        width: 350px;
        height: 100px;
        font-family: 'Franklin Gothic Medium', Arial, sans-serif;
        color: rgb(64,64,64);
        margin: 0 auto;
    }

    .skill {
        margin-bottom: 35px;
        position: relative;
        overflow-x: hidden;
    }

        .skill > p {
            font-family: 'Franklin Gothic Medium', Arial, sans-serif;
            color: rgb(64,64,64);
            font-size: 16px;
            font-weight: 600;
            color: #1a1716;
            margin: 0 0 2px;
        }

        .skill:before {
            width: 100%;
            height: 11.6px;
            content: "";
            display: block;
            position: absolute;
            background: #959595;
            border: 1px solid darkslategrey;
            box-sizing: border-box;
            bottom: 0;
            border-radius: 6px;
        }

    .skill-bar {
        width: 100%;
        height: 10px;
        display: block;
        position: relative;
        bottom:0.8px;
        left:0.8px;
        transition: width 0.4s ease-in;
        border-radius: 6px;

    }

        .skill-bar span {
            position: absolute;
            border-top: 5px solid #f4392f;
            padding: 0;
            font-size: 18px;
            padding: 3px 0;
            font-weight: 500;
        }

    .skill-bar {
        position: relative;
    }

    .skill1 .skill-count1 {
        right: 0;
        font-family: inherit;
        color: inherit;
        font-size: 14px;
        padding: 0px;
        top: -25px;
    }

    .skill1 {
        width: 0%;
        background: #8c8ac9;
    }

    .skill2 {
        width: 0%;
        background: #fdc827;
    }

        .skill2 .skill-count2 {
            right: 0;
            font-family: inherit;
            color: inherit;
            font-size: 14px;
            padding: 0px;
            top: -25px;
        }


</style>