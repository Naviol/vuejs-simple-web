<template>
  <div class="data">
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h1>Library Issues Cleaned Every Weeks</h1>
        </div>
      </div>

      <div class="row mt-5" v-if="arrCentralLibrary.length > 0">
        <div class="col">
          <h2>Central Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrCentralLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor"
          />
        </div>
      </div>

      <div class="row mt-5" v-if="arrCrownhillLibrary.length > 0">
        <div class="col">
          <h2>Crownhill Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrCrownhillLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor2"
          />
        </div>
      </div>

      <div class="row mt-5" v-if="arrDevonportLibrary.length > 0">
        <div class="col">
          <h2>Devonport Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrDevonportLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor3"
          />
        </div>
      </div>

      <div class="row mt-5" v-if="arrEffordLibrary.length > 0">
        <div class="col">
          <h2>Efford Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrEffordLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor4"
          />
        </div>
      </div>

      <div class="row mt-5" v-if="arrEstoverLibrary.length > 0">
        <div class="col">
          <h2>Estover Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrEstoverLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor5"
          />
        </div>
      </div>

      <div class="row mt-5" v-if="arrNorthProspectLibrary.length > 0">
        <div class="col">
          <h2>North Prospect Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrNorthProspectLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor2"
          />
        </div>
      </div>

      <div class="row mt-5" v-if="arrPeverellLibrary.length > 0">
        <div class="col">
          <h2>Peverell Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrPeverellLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor3"
          />
        </div>
      </div>

      <div class="row mt-5" v-if="arrPlymptonLibrary.length > 0">
        <div class="col">
          <h2>Plympton Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrPlymptonLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor4"
          />
        </div>
      </div>
      <div class="row mt-5" v-if="arrPlymstockLibrary.length > 0">
        <div class="col">
          <h2>Plymstock Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrPlymstockLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor"
          />
        </div>
      </div>
      <div class="row mt-5" v-if="arrSouthwayLibrary.length > 0">
        <div class="col">
          <h2>Southway Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrSouthwayLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor5"
          />
        </div>
      </div>
      <div class="row mt-5" v-if="arrStBudeauxLibrary.length > 0">
        <div class="col">
          <h2>St Budeaux Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrStBudeauxLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor2"
          />
        </div>
      </div>
      <div class="row mt-5" v-if="arrWestParkLibrary.length > 0">
        <div class="col">
          <h2>West Park Library</h2>
          <LineChart
            label="Numbers"
            :chartData="arrWestParkLibrary"
            :options="chartOptions"
            :chartColorOptions="chartColor4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "../components/LineChart.vue";

export default {
  name: "Data",
  components: {
    LineChart,
  },
  data() {
    return {
      arrCentralLibrary: [],
      arrCrownhillLibrary: [],
      arrDevonportLibrary: [],
      arrEffordLibrary: [],
      arrEstoverLibrary: [],
      arrNorthProspectLibrary: [],
      arrPeverellLibrary: [],
      arrPlymptonLibrary: [],
      arrPlymstockLibrary: [],
      arrSouthwayLibrary: [],
      arrStBudeauxLibrary: [],
      arrWestParkLibrary: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      chartColor: {
        borderColor: "#251F47",
        pointBorderColor: "#260F26",
        pointBackgroundColor: "#858EAB",
        backgroundColor: "rgba(133, 142, 171, 0.7)",
      },
      chartColor2: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "rgba(116, 165, 127, 0.7)",
      },
      chartColor3: {
        borderColor: "#784F41",
        pointBorderColor: "#784F41",
        pointBackgroundColor: "#BBE5ED",
        backgroundColor: "rgba(187, 229, 237, 0.7)",
      },
      chartColor4: {
        borderColor: "#190B28",
        pointBorderColor: "#190B28",
        pointBackgroundColor: "#E55381",
        backgroundColor: "rgba(229, 83, 129, 0.7)",
      },
      chartColor5: {
        borderColor: "#4E5E66",
        pointBorderColor: "#4E5E66",
        pointBackgroundColor: "#31E981",
        backgroundColor: "rgba(49, 233, 129, 0.7)",
      },
    };
  },
  async created() {
    // Production
    let { data } = await axios.get(
      "https://us-central1-hkuspace-comp2001hk.cloudfunctions.net/app/data"
    );

    // // Development
    // let { data } = await axios.get(
    //   "http://localhost:5001/hkuspace-comp2001hk/us-central1/app/data"
    // );

    const centralLibrary = data.filter((d) => d.name == "Central Library");
    const crownhillLibrary = data.filter((d) => d.name == "Crownhill Library");
    const devonportLibrary = data.filter((d) => d.name == "Devonport Library");
    const effordLibrary = data.filter((d) => d.name == "Efford Library");
    const estoverLibrary = data.filter((d) => d.name == "Estover Library");
    const northProspectLibrary = data.filter(
      (d) => d.name == "North Prospect Library"
    );
    const peverellLibrary = data.filter((d) => d.name == "Peverell Library");
    const plymptonLibrary = data.filter((d) => d.name == "Plympton Library");
    const plymstockLibrary = data.filter((d) => d.name == "Plymstock Library");
    const southwayLibrary = data.filter((d) => d.name == "Southway Library");
    const stBudeauxLibrary = data.filter((d) => d.name == "St Budeaux Library");
    const westParkLibrary = data.filter((d) => d.name == "West Park Library");

    centralLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrCentralLibrary.push({ date, total: number });
    });

    crownhillLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrCrownhillLibrary.push({ date, total: number });
    });

    devonportLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrDevonportLibrary.push({ date, total: number });
    });

    effordLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrEffordLibrary.push({ date, total: number });
    });

    estoverLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrEstoverLibrary.push({ date, total: number });
    });

    northProspectLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrNorthProspectLibrary.push({ date, total: number });
    });

    peverellLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrPeverellLibrary.push({ date, total: number });
    });

    plymptonLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrPlymptonLibrary.push({ date, total: number });
    });

    plymstockLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrPlymstockLibrary.push({ date, total: number });
    });

    southwayLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrSouthwayLibrary.push({ date, total: number });
    });

    stBudeauxLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrStBudeauxLibrary.push({ date, total: number });
    });

    westParkLibrary.forEach((item) => {
      const date = item.date;
      const { name, number } = item;
      this.arrWestParkLibrary.push({ date, total: number });
    });
  },
};
</script>
