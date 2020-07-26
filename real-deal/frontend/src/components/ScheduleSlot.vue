<template>
  <div>
    <template v-if="info.state === 'BOOKED'">
      <div class="display-slot reserved">
        <p class="hour">{{ hour }}</p>
        <img
          class="icon"
          :src="info.service.photo"
          :alt="info.service.name + ' image'"
        />
        <img
          class="icon"
          :src="info.pet.photo"
          :alt="info.pet.name + ' image'"
        />
        <div class="info">
          <p class="service">
            {{ info.service.name }}
            <span class="of">of</span>
          </p>
          <p class="pet">{{ info.pet.name }}</p>
        </div>
      </div>
    </template>

    <template v-else-if="info.state === 'OPEN'">
      <div class="display-slot free">
        <p class="hour">{{ hour }}</p>
        <img
          class="icon"
          :src="info.service.photo"
          :alt="info.service.name + ' image'"
        />
        <p class="service">{{ info.service.name }}</p>
      </div>
    </template>

    <template v-else>
      <div class="display-slot reserved">
        <p class="hour">{{ hour }}</p>
        <p class="empty">EMPTY</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ScheduleSlot",
  props: {
    hour: String,
    info: Object,
  },
};
</script>
