<template>
    <div class="period-container">
        <select :id="`period-${id}`" :data-id="id" @change="onPeriodChange" :disabled="dashIsLoading">
            <option v-for="period in periods" :value="period.code" :data-format="period.format" :selected="period.default"
                :key="period.code">
                {{ period.label }}
            </option>
        </select>
        <div class="dates">
            <div class="ok" style="display: none;">
                <input class="edit" type="button">
            </div>
            <div class="edit">
                <input class="start" type="date">
                <input class="end" type="date">
                <input class="ok" type="button" value="OK" @click="onCustomFilterTrigger">

            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment-timezone";
import * as period from "./libs/period.js"
// import teStore from "../../store/teStore"
export default {
    props: [
        "id"
    ],
    data() {
        return {
            periods: [],
        }
    },
    methods: {
        onPeriodChange(e) {
            const period = $(e.currentTarget)
            if (period.val() === 'cust') return
            teStore.commit("triggerReloadDash")
        },
        onCustomFilterTrigger(e) {
            if (!this.dashIsLoading) {
                teStore.commit("triggerReloadDash")
            }
        },
    },
    computed: {
        dashIsLoading() {
            return teStore.state.dashIsLoading
        }
    },
    mounted() {
        $(".period-container select").on("change", e => {
            const period = $(e.currentTarget);
            const custSelected = period.val() === "cust";
            if (period.attr("id") === "period-global") {
                if (period.val() !== "") {
                    $(".period-container select").val(period.val());
                    $(".period-container select")
                        .parents(".period-container")
                        .find(".dates")
                        .css("display", custSelected ? "inline-block" : "none");
                } else {
                    period.parents(".period-container").find(".dates").css("display", "none");
                }
            } else {
                $("#period-global").val("");
                $("#period-global").parents(".period-container").find(".dates").css("display", "none");
                period
                    .parents(".period-container")
                    .find(".dates")
                    .css("display", custSelected ? "inline-block" : "none");
            }
        });
        $(".period-container input[type=button].ok").on("click", e => {
            const ok = $(e.currentTarget);
            let dates = ok.parents(".dates");
            const start = dates.find(".start").val();
            const end = dates.find(".end").val();
            if (ok.parents(".period-container").find("select").attr("id") === "period-global") {
                dates = $("[id^=period-]").parents(".period-container").find(".dates");
                dates.find(".start").val(start);
                dates.find(".end").val(end);
            }
            dates.find("div.edit").css("display", "none");
            dates.find("div.ok").css("display", "inline-block");
            dates.find("input.edit").val(start + " - " + end);
        });
        $(".period-container input[type=button].edit").on("click", e => {
            const edit = $(e.currentTarget);
            edit.parent().css("display", "none");
            edit.parents(".dates").find(".edit").css("display", "inline-block");
        });
        $(".period-container .dates .start").val(moment().startOf("month").format("yyyy-MM-DD"));
        $(".period-container .dates .end").val(moment().startOf("day").format("yyyy-MM-DD"));
        this.periods = period.select("dashte")
    }
}
</script>
