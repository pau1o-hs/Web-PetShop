<template>
  <div class="display-day">
    <p>{{ day }}</p>
    <div>
      <div class="display-slot reserved">
        <p class="hour">14:30</p>
        <p class="empty">EMPTY</p>
      </div>
      <div class="display-slot reserved">
        <p class="hour">13:00</p>
        <img class="icon" src="../mockup/images/categorias/vacinacao.jpg" alt="Vaccination image" />
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
        <p class="hour">11:30</p>
        <img class="icon" src="../mockup/images/categorias/vacinacao.jpg" alt="Vaccination image" />
        <p class="service">Vaccination</p>
      </div>
      <div class="display-slot reserved">
        <p class="hour">09:30</p>
        <img class="icon" src="../mockup/images/categorias/vacinacao.jpg" alt="Vaccination image" />
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
        <p class="hour">08:30</p>
        <img class="icon" src="../mockup/images/categorias/vacinacao.jpg" alt="Vaccination image" />
        <p class="service">Vaccination</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slot",
  props: {
    day: Date
  }
};
</script>