<template>
  <div class="display-day">
    <p>{{ day }}</p>
    <div>
      <ScheduleSlot
        v-for="hour in workingHours"
        v-bind:key="hour"
        v-bind:state="getState()"
        v-bind:hour="hour"
        serviceName="alo"
        serviceImage="alo"
        petName="alo"
        petImage="alo"
      ></ScheduleSlot>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ScheduleSlot from "./ScheduleSlot.vue";

export default {
  name: "ScheduleDay",
  props: {
    date: Object,
  },
  components: {
    ScheduleSlot,
  },
  methods: {
    getState() {
      return "BOOKED";
    },
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

      for (let i = 10; i >= 0; i--) {
        // 10 slots of 1 hour each
        const date = moment(startHour).add(i, "hours");
        const formattedHour =
          date
            .hour()
            .toString()
            .padStart(2, "0") +
          ":" +
          date
            .minute()
            .toString()
            .padStart(2, "0");
        hours.push(formattedHour);
      }
      return hours;
    },
  },
};
</script>
