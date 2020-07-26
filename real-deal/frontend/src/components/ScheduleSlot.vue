<template>
  <div>
    <template v-if="state == 'BOOKED'">
      <div class="display-slot reserved">
        <p class="hour">{{ hour }}</p>

        <img class="icon" :src="serviceImage" :alt="serviceName + ' image'" />
        <img class="icon" :src="petImage" :alt="petName + ' image'" />
        <div class="info">
          <p class="service">
            {{ serviceName }}
            <span class="of">of</span>
          </p>
          <p class="pet">{{ petName }}</p>
        </div>
      </div>
    </template>

    <template v-else-if="state == 'OPEN'">
      <div class="display-slot free">
        <img
          class="icon"
          src="../mockup/images/categorias/vacinacao.jpg"
          alt="Vaccination image"
        />
        <p class="service">Vaccination</p>
      </div>
    </template>

    <template v-else>
      <div class="display-slot reserved">
        <p class="empty">EMPTY</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ScheduleSlot",
  props: {
    state: String,
    hour: String,
    serviceName: String,
    serviceImage: String,
    petName: String,
    petImage: String,
  },
  mouted() {
    console.log(this.state);
  },
};
</script>
