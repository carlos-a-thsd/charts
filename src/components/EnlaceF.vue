<template>
    <div class="widget col-lg-12 col-md-12 col-xs-12 col-xl-12 p-1">
        <div class="card mb-0 border-0 d-block shadow-none">
            <div class="head">
                <div class="filters">
                    <h5 class="title">{{ title }}</h5>
                    <!-- <div class="text-end">
                        <div class="sem green"></div>
                        <img class="close" src="/src/assets/icon-btn-close.svg" alt="">
                    </div> -->
                </div>
                <!-- <div class="filters">
                    <PeriodSelect :id="id"/>
                </div> -->
            </div>
            <div class="body">
                <div class="row g-0">
                    <div class="col-lg-1 col-md-1 col-xs-1 mx-auto my-auto text-center">
                        <div class="rainbow-S-6 ms-3" style="height: 200px;"></div>
                    </div>
                    <div class="col-lg-11 col-md-11 col-xs-11 mx-auto my-auto text-center">
                        <div style="height:256px; width:100%;">
                            <canvas :id="id" style="margin-top: 20px;height:250px;width:450px;"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ChartLib } from "./libs/ChartLib";
import { progress } from './libs/progressChart';
export default {
    props: [
        "title",
        "widgetData",
        "options",
        "id",
        "palletes"
    ],
    methods:{
        build(){
            var options = [{ w: "120", h: "120", innerRadius: "50" }];
                progress(
                    (Math.random() * (0.8 - 1) + 1) * 100,
                    "enlacef",
                    ["#F3F3F4","#6DD4B1", "#4D71EC","#FFFFFF"],
                    options
                );
        },
    },

    mounted() {
        this.$nextTick(function () {
            this.build();
        })
    }
}
</script>
<style lang="">
    
</style>