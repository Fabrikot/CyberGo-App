<script setup>
    //#b4c0be
        export default {
        props: {
            percentage: {
                type: Number,
                required: true
            }
        },
        mounted() {
            const percentageAsFraction = this.  percentage / 100
            const halfPercentage = percentageAsFraction / 2
            this.cssTransformRotateValue = `${halfPercentage}turn` //add the value used for the animation
        },
        data() {
            return {
                cssTransformRotateValue: ''
            }
        }
    }   


</script>

<template>

    <div class="gauge__outer">
        <div class="gauge__inner">
            <div class="gauge__fill" :style="{ transform: `rotate(${cssTransformRotateValue})` }"></div> 
            <div class="gauge__cover">
                {{ percentage.toFixed(0) }}%
            </div>
        </div>
        <div class="covercover">
        </div>  
    </div>
</template>

<style scoped>
    .gauge__outer {
        width: 100%;
        max-width: 250px;
    }

    .gauge__inner {
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        background: linear-gradient(to right, rgba(255, 0, 0, 0.6), rgb(255, 165, 0, 0.6), rgb(255, 220, 0,0.6),rgb(0, 255, 0, 0.6));
        border: 2px solid darkslategrey;
        position: relative;
        border-top-left-radius: 100% 200%;
        border-top-right-radius: 100% 200%;
        overflow: hidden;
    }

    .gauge__fill {
        position: absolute;
        top: 100%;
        left: 0;
        width: 101%;
        height: 4%;
        background: darkslategrey;
        transform-origin: center;
        transform: rotate(0turn);
        transition: transform 1s ease-out;
    }

    .gauge__cover {
        border: 2px solid darkslategrey;
        width: 75%;
        height: 150%;
        background: #ffffff;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        /* Text */
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 25%;
        box-sizing: border-box;
        font-family: 'Lexend', sans-serif;
        font-weight: bold;
        font-size: 32px;
    }
    .covercover {
        width: 100%;
        height: 4px;
        background: #ffffff;
        position: relative;
        transform:translateX(18.75%) translateY(-60%);
        max-width:184px;
    }
</style>
