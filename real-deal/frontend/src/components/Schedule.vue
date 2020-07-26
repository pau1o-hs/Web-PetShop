<template>
  <div class="scheduler">
    <div class="time-display">
      <ScheduleDay
        v-for="pair in getDaysAndSlots"
        v-bind:key="pair.day"
        v-bind:date="pair.day"
        v-bind:slots="pair.slots"
      />
    </div>
    <div class="pagination">
      <ul>
        <li class="prev">
          <button v-on:click="prevPage">&#10094;</button>
        </li>
        <li class="next">
          <button v-on:click="nextPage">&#10095;</button>
        </li>
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
      curPage: 0,
      daysToDisplay: 70, // Equivalent to 10 WEEKS
      daysPerPage: 3,
      today: moment(),
      currentSlots: [],
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
    getDaysAndSlots: function() {
      const daysAndSlots = [];

      for (let i = 0; i < this.daysPerPage; i++) {
        const baseDay = moment(this.today).add(
          this.curPage * this.daysPerPage,
          "days"
        );
        const day = moment(baseDay).add(i, "days");

        const slots = this.currentSlots.filter((slot) => {
          const momDate = moment(slot.date);
          const isSame =
            momDate.year() == day.year() &&
            momDate.dayOfYear() == day.dayOfYear();
          return isSame;
        });

        daysAndSlots.push({
          day,
          slots,
        });
      }
      return daysAndSlots;
    },
  },
  mounted() {
    axios.get("http://localhost:8080/api/schedule").then((response) => {
      this.currentSlots = response.data;
    });
  },
};
</script>

<style>
.scheduler {
  margin: 10vh auto;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.time-display {
  background: #080357;
  display: flex;
}

.pagination {
  flex: 0.5 1 0;
  padding: 2vh 5vh;
  background: #211a1d;
  text-align: center;
}
.pagination ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.pagination ul li {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.pagination .prev {
  float: left;
}
.pagination .next {
  float: right;
}
</style>
