<template>
    <div class="col-8">
        <div class="widget">
            <div class="head">
                <div class="filters">
                    <h5 class="title">{{title}}</h5>
                </div>
            </div>
            <div class="body">
                <!-- <table style="width: 100%">
                    <tr>
                        <td>
                            <h4 :id="`${id}_total`"></h4>
                            <h5 style="margin:0;">Total&nbsp;</h5>
                        </td>
                        <td class="text-center" style="align-items:center;">
                        </td>
                    </tr>                    
                </table> -->
                <canvas :id="id" width="650px" height="50px"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
import { ChartLib } from "./libs/ChartLib";
import { stackedHbar } from "./libs/progressChart.js";
import * as period from "./libs/period";
import {fmt} from "./libs/fmt.js";
export default {
    props: [
        "title",
        "widgetData",
        "options",
        "id",
        "palletes"
    ],
    methods:{
        setSem(widgetOptions){
            console.log("WIDGET DATA: "+this.widgetData[this.id].values);
            if (this.widgetData[this.id]) {
                $(`#${this.id}_total`).text(fmt(widgetOptions.yfmt)(this.widgetData.sem[this.id].values));                
            } else {
                $(`#${this.id}_total`).text(fmt(widgetOptions.yfmt)("12"));                
            }
        },
        buildGraph(){            
            console.log(this.widgetData);
            if(this.palletes){
                ChartLib.palettes.custom = this.palletes
            }
            const widgetOptions = {...this.options}
            if (widgetOptions.xfmt == null){
                // widgetOptions.xfmt = this.getFormat(this.id)
            }
            ChartLib.bar(this.id, this.widgetData[this.id] || [], widgetOptions);
            // if (this.widgetData){
            //     const agentst = this.widgetData[this.id].filter(o => o.value !== null);
            //     if (agentst.length != 0) $("#resume_total").text(fmt("n")(agentst[agentst.length - 1].value));
            // }
            // $(".updatetext").text("Última actualización: " + fmt("dDMYHms")(moment()));
        }
    },
    mounted() {
            var total = Math.round(Math.random() * 200000);
            var pronostico = total+total*.30;
            var promedio = total/2;
            const maxim = 5000;
            var resume=[
                {name:"pronostico", count:[total]},
                {name:"promedio", count:[total]},
                {name:"total", count:[total]}
            ];
        this.$nextTick(() => {
                stackedHbar(this.id ,resume, "ch6", [
                "#235D8C",
                "#CCCCCC",
                ], maxim);
        })
    }

}
</script>
<style lang="">
    
</style>