<template>
  <div class="scheduler">
    <!-- TIME DISPLAY -->
    <div class="time-display">
      <ScheduleDay
        v-for="day in displayDays"
        v-bind:key="day"
        v-bind:date="day"
      />
    </div>
    <!-- PAGINATION -->
    <div class="pagination">
      <ul>
        <li class="prev"><button v-on:click="prevPage">&#10094;</button></li>
        <li class="next"><button v-on:click="nextPage">&#10095;</button></li>
        <li>
          <span>
            Page
            <span style="color: yellow;">{{ curPage + 1 }}</span>
            of {{ numPages }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ScheduleDay from "@/components/ScheduleDay.vue";
import moment from "moment";
import axios from "axios";

export default {
  name: "Schedule",
  components: {
    ScheduleDay,
  },
  data() {
    return {
      curPage: 1,
      daysToDisplay: 70, // Equivalent to 10 WEEKS
      daysPerPage: 3,
      today: moment(),
      currentBookings: [],
    };
  },
  methods: {
    prevPage: function() {
      if (this.curPage > 0) {
        this.curPage -= 1;
      }
    },
    nextPage: function() {
      if (this.curPage < this.numPages - 1) {
        this.curPage += 1;
      }
    },
  },
  computed: {
    numPages: function() {
      return Math.ceil(this.daysToDisplay / this.daysPerPage);
    },
    displayDays: function() {
      const days = [];
      for (let i = 0; i < this.daysPerPage; i++) {
        const baseDay = moment(this.today).add(
          this.curPage * this.daysPerPage,
          "days"
        );
        days.push(moment(baseDay).add(i, "days"));
      }
      return days;
    },
  },
  mounted() {
    axios.get("http://localhost:8080/api/schedule").then((response) => {
      this.currentBookings = response.data;
    });
  },
};
</script>
