<template>
    <div class="widget col-lg-12 col-md-12 col-xs-12 col-xl-12 p-1">
        <div class="card mb-0 border-0 d-block shadow-none" >
            <div class="head">
                <div class="filters">
                    <h5 class="title">{{title}}</h5>
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
                            <canvas :id="id" style="margin-top: 20px;height:250px;width:450px;" ></canvas>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-xs-1 mx-auto my-auto text-center"></div>
                    <div class="col-lg-9 col-md-9 col-xs-9 mx-auto my-auto text-center">
                        <div class="rectangle" :style="`background-color:${palletes[0]};`"></div>
                        <h5 style="margin:0;">Avg&nbsp;</h5>
                        <h4 :id="`${id}actual`"></h4>
                        <div class="rectangle" :style="`background-color:${palletes[1]}; margin-left: 25px;`"></div>
                        <h5 style="margin:0;">Max&nbsp;</h5>
                        <h4 :id="`${id}max`"></h4>
                    </div>
                    <div class="col-lg-2 col-md-2 col-xs-2 mx-auto my-auto text-center">
                        <h4 :id="`${id}_benchmark_delta`"></h4>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <p class="updatetext text-end" style="font-size:13px;"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ChartLib } from "./libs/ChartLib";
import * as period from "./libs/period";
import {fmt} from "./libs/fmt.js";
import PeriodSelect from "./PeriodSelect.vue";
export default {
    components: {PeriodSelect},
    props: [
        "title",
        "widgetData",
        "options",
        "id",
        "palletes"
    ],
    component: {
        PeriodSelect
    },
    methods: {
        getFormat(id) {
            let ddl = $("#period-" + id);
            if (ddl.val() !== "cust") {
                ddl = ddl[0];
                return $(ddl.options[ddl.selectedIndex]).data().format;
            } else {
                const dates = $(ddl).parents(".period-container").find("div.dates");
                const start = dates.find(".start").val();
                const end = dates.find(".end").val();
                const days = moment(end).diff(start, "days");
                if (days <= 2) return "dHm";
                if (days <= "15") return "ddHa";
                return "dMD";
            }
        },
        showDelta(data, id) {
            const bm = data[id].benchmark;
            const arrow = bm.delta < 0 ? "&searr;" : "&nearr;";
            $("#" + id + "_benchmark_delta")
                .html(arrow + Math.abs(bm.delta * 100).toFixed(0) + "%")
                .attr("class", bm.delta < 0 ? "green" : "red");
        },
        setSem(widgetOptions){
            if (this.widgetData.sem[this.id]) {
                $(`#sem-${this.id}`).attr("class", `sem ${this.widgetData.sem[this.id]?.triage}`);
                $(`#${this.id}actual`).text(fmt(widgetOptions.yfmt)(this.widgetData.sem[this.id].avg));
                $(`#${this.id}max`).text(fmt(widgetOptions.yfmt)(this.widgetData.sem[this.id].max));
                const arrow = this.widgetData.sem[this.id].delta < 0 ? "&searr;" : "&nearr;";
                $(`#${this.id}_benchmark_delta`)
                    .html(arrow + Math.abs(this.widgetData.sem[this.id].delta * 100).toFixed(0) + "%")
                    .attr("class", this.widgetData.sem[this.id].delta < 0 ? "green" : "red");
            } else {
                const actual = this.widgetData[this.id].timeline.filter(o => o.value !== null);
                const max = this.widgetData[this.id].timeline.filter(o => o.max !== null);
                if (actual.length != 0) {
                    $(`#${this.id}actual`).text(fmt(widgetOptions.yfmt)(actual[actual.length - 1].value));
                    $(`#${this.id}max`).text(fmt(widgetOptions.yfmt)(max[max.length - 1].max));
                } else {
                    $(`#${this.id}actual`).text("0");
                    $(`#${this.id}max`).text("0");
                }
                this.showDelta(this.widgetData, this.id);
            }
        },
        buildLine(){
            if(this.palletes){
                ChartLib.palettes.custom = this.palletes
            }
            const widgetOptions = {...this.options}
            if (widgetOptions.xfmt == null){
                // widgetOptions.xfmt = this.getFormat(this.id)
            }
            const lineData = this.widgetData[this.id].timeline
            ChartLib.line(this.id, lineData, widgetOptions)
            this.setSem(widgetOptions)
            $(".updatetext").text("Última actualización: " + fmt("dDMYHms")(moment()));
        }
    },
    watch: {
        widgetData(){
            this.buildLine()
        }
    },
    mounted() {
        this.$nextTick(() => {
            if(this.widgetData){
                this.buildLine()
            }
        })
    }
}
</script>

<style scoped>
.green {
    color: #36BA6E;
}
.red {
    color: #F6404F;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  display: inline-block; }
h3 {
font-size: 24px; }

h4 {
  font-size: 20px; }

h5 {
  font-size: 18px; }

h6 {
  margin-left: 5%;
  font-size: 14px; }
</style>