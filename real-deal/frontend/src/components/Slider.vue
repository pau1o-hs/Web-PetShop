<template>
  <div class="slider">
    <input type="radio" id="i1" name="images" checked />
    <input type="radio" id="i2" name="images" />
    <input type="radio" id="i3" name="images" />
    <input type="radio" id="i4" name="images" />

    <div class="slide_img" id="one">
      <img src="../mockup/images/cat1.jpg" />

      <h1 class="slider_text">
        WELCOME TO
        <br />PETLIFE
      </h1>
      <label class="prev" for="i4">
        <span></span>
      </label>
      <label class="next" for="i2">
        <span></span>
      </label>
    </div>

    <div class="slide_img" id="two">
      <img src="../mockup/images/dogs3.jpg" />

      <h1 class="slider_text">FIND EVERYTHING</h1>
      <label class="prev" for="i1">
        <span></span>
      </label>
      <label class="next" for="i3">
        <span></span>
      </label>
    </div>

    <div class="slide_img" id="three">
      <img src="../mockup/images/fish1.jpg" />

      <h1 class="slider_text">FOR ALL KIND</h1>
      <label class="prev" for="i2">
        <span></span>
      </label>
      <label class="next" for="i4">
        <span></span>
      </label>
    </div>

    <div class="slide_img" id="four">
      <img src="../mockup/images/bird2.jpg" />

      <h1 class="slider_text">OF PETS</h1>
      <label class="prev" for="i3">
        <span></span>
      </label>
      <label class="next" for="i1">
        <span></span>
      </label>
    </div>

    <div id="nav_slide">
      <label for="i1" class="dots" id="dot1"></label>
      <label for="i2" class="dots" id="dot2"></label>
      <label for="i3" class="dots" id="dot3"></label>
      <label for="i4" class="dots" id="dot4"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>