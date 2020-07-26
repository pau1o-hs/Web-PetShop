<template>
  <div class="scheduler" id="scheduler">
    <!-- <div class="time-selector">
      <p id="book-query">I want to book:</p>
      <div class="row-separator"></div>
      <div class="tsel-item1">
        <div class="tsel-up">
          <div class="weeks">
            <span>
              In
              <input type="number" value="0" min="0" />
              weeks
            </span>
          </div>
          <div class="days">
            <span>On</span>
            <select>
              <option selected>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
        </div>
        <div class="column-separator"></div>
        <div class="tsel-down">
          <span>
            For
            <input class="date-input" type="date" />
          </span>
        </div>
      </div>
      <div class="row-separator"></div>
      <div class="tsel-item2">
        <span>Between</span>
        <select>
          <option selected>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
        </select>
        <br />
        <span>and</span>
        <select>
          <option>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option selected>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
        </select>
      </div>
    </div>-->
    <!-- TIME DISPLAY -->
    <ul>
      <li v-for="day in displayDays" :key="day">
        {{ day }}
      </li>
    </ul>
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
};
</script>
