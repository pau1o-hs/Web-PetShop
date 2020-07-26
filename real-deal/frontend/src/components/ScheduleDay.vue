<template>
  <div class="display-day">
    <p>{{ workingHours }}</p>
    <p>{{ day }}</p>
    <div>
      <div class="display-slot reserved">
        <p class="hour">14:30</p>
        <p class="empty">EMPTY</p>
      </div>
      <div class="display-slot reserved">
        <p class="hour">13:00</p>
        <img
          class="icon"
          src="../mockup/images/categorias/vacinacao.jpg"
          alt="Vaccination image"
        />
        <img
          class="icon"
          src="../mockup/images/tchutchucao.jpg"
          alt="Pet image"
        />
        <div class="info">
          <p class="service">
            Vaccination
            <span class="of">of</span>
          </p>
          <p class="pet">Tchutchucão</p>
        </div>
      </div>
      <div class="display-slot free">
        <p class="hour">11:30</p>
        <img
          class="icon"
          src="../mockup/images/categorias/vacinacao.jpg"
          alt="Vaccination image"
        />
        <p class="service">Vaccination</p>
      </div>
      <div class="display-slot reserved">
        <p class="hour">09:30</p>
        <img
          class="icon"
          src="../mockup/images/categorias/vacinacao.jpg"
          alt="Vaccination image"
        />
        <img
          class="icon"
          src="../mockup/images/tchutchucao.jpg"
          alt="Pet image"
        />
        <div class="info">
          <p class="service">
            Vaccination
            <span class="of">of</span>
          </p>
          <p class="pet">Tchutchucão</p>
        </div>
      </div>
      <div class="display-slot free">
        <p class="hour">08:30</p>
        <img
          class="icon"
          src="../mockup/images/categorias/vacinacao.jpg"
          alt="Vaccination image"
        />
        <p class="service">Vaccination</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ScheduleDay",
  props: {
    date: Object,
  },
  computed: {
    day: function() {
      return this.date.date() + "/" + (this.date.month() + 1);
    },
    workingHours: function() {
      const hours = [];
      const startHour = moment
        .utc() // 08:00
        .hour(8)
        .minute(0)
        .second(0);
      console.log(startHour);
      for (let i = 0; i <= 10; i++) {
        // 10 slots of 1 hour each
        hours.push(moment(startHour).add(i, "hours"));
      }
      return hours;
    },
  },
};
</script>
