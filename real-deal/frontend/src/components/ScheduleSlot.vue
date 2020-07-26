<template>
  <div>
    <template v-if="info.state === 'BOOKED'">
      <button :click="onClick" class="display-slot reserved">
        <p class="hour">{{ hour }}</p>
        <img class="icon" :src="info.service.photo" :alt="info.service.name + ' image'" />
        <img class="icon" :src="info.pet.photo" :alt="info.pet.name + ' image'" />
        <div class="info">
          <p class="service">
            {{ info.service.name }}
            <span class="of">of</span>
          </p>
          <p class="pet">{{ info.pet.name }}</p>
        </div>
      </button>
    </template>

    <template v-else-if="info.state === 'OPEN'">
      <button :click="onClick" class="display-slot free">
        <p class="hour">{{ hour }}</p>
        <img class="icon" :src="info.service.photo" :alt="info.service.name + ' image'" />
        <p class="service">{{ info.service.name }}</p>
      </button>
    </template>

    <template v-else>
      <button :click="onClick" class="display-slot reserved">
        <p class="hour">{{ hour }}</p>
        <p class="empty">EMPTY</p>
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: "ScheduleSlot",
  props: {
    hour: String,
    info: Object
  },
  methods: {
    onClick: function() {
      if (this.info.state == "EMPTY") {
        alert("Sorry, but there is no service allocated to this slot :(");
      } else if (this.info.state == "BOOKED") {
        alert("This slot was already reserved by another person.");
      } else {
        alert("HAHAHA AGORA VAI");
      }
    }
  }
};
</script>

<style>
.display-slot {
  border: 3px solid #211a1d;
  margin: 2px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  height: 60px;
  width: 98%;
  color: white;
}

.display-slot:hover {
  border: 3px solid black;
  opacity: 0.8;
  height: 60px;
  width: 98%;
  color: white;
}

.display-slot .hour {
  width: 60px;
  text-align: center;
}
.display-slot .empty {
  flex: 1 1 0;
  font-size: 26px;
  text-align: center;
}
.display-slot .icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 0 3px;
}
.display-slot .service {
  font-size: 24px;
  text-align: center;
  flex: 1 1 0;
}
.display-slot .info {
  flex: 1 1 0;
  align-self: center;
  text-align: center;
  font-size: 14px;
}
.display-slot .info .service {
  font-size: 16px;
}
.display-slot .of {
  font-size: 16px;
  color: #ff8400;
}
.display-slot .pet {
  font-size: 16px;
}
.free {
  background-color: #0ec70b;
}
.reserved {
  background-color: #6e6968;
}
</style>