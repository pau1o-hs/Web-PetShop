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
    <div class="time-display">
      <Slot day=15/05 />
      <div class="display-day">
        <p>18/05</p>
        <div>
          <div class="display-slot free">
            <p class="hour">14:30</p>
            <img
              class="icon"
              src="../mockup/images/categorias/vacinacao.jpg"
              alt="Vaccination image"
            />
            <p class="service">Vaccination</p>
          </div>
          <div class="display-slot reserved">
            <p class="hour">13:00</p>
            <p class="empty">EMPTY</p>
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
            <img class="icon" src="../mockup/images/tchutchucao.jpg" alt="Pet image" />
            <div class="info">
              <p class="service">
                Vaccination
                <span class="of">of</span>
              </p>
              <p class="pet">Tchutchucão</p>
            </div>
          </div>
          <div class="display-slot reserved">
            <p class="hour">08:00</p>
            <p class="empty">EMPTY</p>
          </div>
        </div>
      </div>
      <div class="display-day">
        <p>25/05</p>
        <div>
          <div class="display-slot reserved">
            <p class="hour">15:30</p>
            <img
              class="icon"
              src="../mockup/images/categorias/vacinacao.jpg"
              alt="Vaccination image"
            />
            <img class="icon" src="../mockup/images/tchutchucao.jpg" alt="Pet image" />
            <div class="info">
              <p class="service">
                Vaccination
                <span class="of">of</span>
              </p>
              <p class="pet">Tchutchucão</p>
            </div>
          </div>
          <div class="display-slot free">
            <p class="hour">14:00</p>
            <img
              class="icon"
              src="../mockup/images/categorias/vacinacao.jpg"
              alt="Vaccination image"
            />
            <p class="service">Vaccination</p>
          </div>
          <div class="display-slot reserved">
            <p class="hour">12:00</p>
            <p class="empty">EMPTY</p>
          </div>

          <div class="display-slot free">
            <p class="hour">10:00</p>
            <img
              class="icon"
              src="../mockup/images/categorias/vacinacao.jpg"
              alt="Vaccination image"
            />
            <p class="service">Vaccination</p>
          </div>

          <div class="display-slot reserved">
            <p class="hour">08:30</p>
            <p class="empty">EMPTY</p>
          </div>
        </div>
      </div>
    </div>
    <!-- PAGINATION -->
    <div class="pagination">
      <ul>
        <li class="prev">&#10094;</li>
        <li class="next">&#10095;</li>
        <li>
          <span>
            Page
            <span style="color: yellow;">{{ curPage }}</span>
            of {{ numPages }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slot from "@/components/Slot.vue";

export default {
  name: "Schedule",
  components: {
    Slot
  },
  data() {
    return {
      curPage: 1,
      numPages: 1,
      daysToDisplay: 70, // Equivalent to 7 WEEKS
      daysPerPage: 3,
      today: Date.now()
    };
  }
};
</script>