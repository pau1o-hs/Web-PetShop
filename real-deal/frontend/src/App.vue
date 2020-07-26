<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "./mockup/style.css";
@import url("https://fonts.googleapis.com/css?family=Just+Another+Hand");

body {
  background-color: #eeeeee;
}

* {
  margin: 0px;
  padding: 0px;
}

.title2 {
  margin: 4%;
  align-self: center;
  text-align: center;
  color: #333;
  font-size: 5vh;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.row-separator {
  margin: 0;
  padding: 0;
  background-color: #d7cdcc;
  align-self: center;
  width: 3px;
  height: 100%;
}

.column-separator {
  margin: 0;
  padding: 0;
  background-color: #d7cdcc;
  align-self: center;
  height: 3px;
  width: 100%;
}

#i1:checked ~ #one,
#i2:checked ~ #two,
#i3:checked ~ #three,
#i4:checked ~ #four {
  z-index: 9;
  animation: scroll 1s ease-in-out;
}

#i1:checked ~ #nav_slide #dot1 {
  background: #fcf809;
}

#i2:checked ~ #nav_slide #dot2 {
  background: #f44336;
}

#i3:checked ~ #nav_slide #dot3 {
  background: #2196f3;
}

#i4:checked ~ #nav_slide #dot4 {
  background: #4caf50;
}

@keyframes scroll {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>