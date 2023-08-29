<script>
import HelloWorld from './components/HelloWorld.vue';
import EnlaceF from './components/EnlaceF.vue';
import ChartJs from './components/ChartJs.vue';
import Resume from './components/Resume.vue';
import Estatus from './components/Estatus.vue';
import LineWidget from "./components/LineWidget.vue";
import { data } from './data/jitterdata';
import { data1 } from './data/globalData';
import { data2 } from './data/dummyData';
import * as WidgetsConfig from './data/widgetsConfig';
import SideMenu from './components/SideMenu.vue';
export default {
  data() {
    return {
      dummydata: data2,
      globaldata: data1,
      jitterdata: data,
    }
  },
  components: {
    LineWidget,
    Estatus,
    SideMenu,
    EnlaceF,
    ChartJs,
    Resume
  },
  methods: {
    ...WidgetsConfig
  }
}
// import ChartComponent from './components/Chart.vue';
</script>

<template>
  <main>
    <div>
      <div class="row">
        <!-- <SideMenu /> -->
        <!-- <div class="col-3">
          <Estatus estado="Conectado" />
        </div> -->
        <div class="col-6">
          <LineWidget
        title="Jitter"
        id="jitter"
        :options="jitterOptions()[0]"
        :widgetData="globaldata"
        :palletes="jitterLineConfig()[1]"
      />
        </div>
        <div class="col-3">
          <Estatus estado="Conectado" />
        </div>
        <!-- <div class="col-3">
          <EnlaceF title="Enlace Financiero" id="enlacef" 
          />
        </div> -->
        
        <div class="col-6">
          <Resume 
          title="Resumen"
            id="resume"/>
        </div>
        <div class="col-3">
          <ChartJs />
        </div>
      </div>
      <!-- <Chart /> -->
    </div>
  </main>
</template>



<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
