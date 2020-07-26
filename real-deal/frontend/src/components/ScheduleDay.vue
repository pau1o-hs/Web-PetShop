<template>
  <div class="display-day">
    <p>{{ day }}</p>
    <div>
      <ScheduleSlot
        v-for="hour in workingHours"
        v-bind:key="hour"
        v-bind:hour="hour"
        v-bind:info="getSlotInHour(hour)"
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
    slots: Array, // array of objects
  },
  components: {
    ScheduleSlot,
  },
  methods: {
    getSlotInHour: function(hour) {
      const result = this.slots.find((slot) => {
        return moment.utc(slot.date).format("HH:mm") == hour;
      });
      // Guard clause
      if (result === undefined) {
        return { state: "EMPTY" };
      }
      console.log(result);
      return result;
    },
  },
  computed: {
    day: function() {
      return (
        this.date.date() +
        "/" +
        (this.date.month() + 1).toString().padStart(2, "0")
      );
    },
    workingHours: function() {
      const hours = [];
      const startHour = moment
        .utc() // 08:00
        .hour(8)
        .minute(0)
        .second(0);

      for (let i = 9; i >= 0; i--) {
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
