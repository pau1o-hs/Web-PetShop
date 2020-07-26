<template>
  <div id="Home">
    <div class="container">
      <Header></Header>
      <Slider></Slider>
    </div>
    <Index></Index>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Slider from "@/components/Slider.vue";
import Index from "@/components/Index.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Index,
    Slider
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 35%;
  user-select: none;
  background-color: #1c1c1c;
  box-shadow: 0 11px 22px rgba(0, 0, 0, 0.3), 0 7px 7px rgba(0, 0, 0, 0.3);
}
.container input[type="radio"] {
  display: none;
}
.container .slide_img {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: -1;
}
.container .slide_img img {
  width: inherit;
  height: inherit;
}
.container .slide_img h1 {
  position: absolute;
  width: 100%;
  z-index: 99;
  text-align: center;
  align-self: center;
  transition: 0.45s;
  top: 50%;
  transform: translateY(-50%);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 5vw;
  color: white;
  font-weight: bold;
}
.container .slide_img h1 h2 {
  font-size: 2vw;
}
.container .slide_img .prev,
.container .slide_img .next {
  width: 12%;
  height: inherit;
  position: absolute;
  top: 0;
  background-color: transparent;
  z-index: 99;
  transition: 0.45s;
  cursor: pointer;
  text-align: center;
}
.container .slide_img .next {
  right: 0;
}
.container .slide_img .prev {
  left: 0;
}
.container .slide_img .prev:hover,
.container .slide_img .next:hover {
  transition: 0.3s;
  background-color: transparent;
}
.container .slide_img .prev span,
.container .slide_img .next span {
  position: absolute;
  width: 0px;
  height: 0px;
  border: solid 20px;
  top: 50%;
  transform: translateY(-50%);
}
.container .slide_img .prev span {
  border-color: transparent transparent transparent transparent;
  right: 35%;
}
.container .slide_img .next span {
  border-color: transparent transparent transparent transparent;
  left: 35%;
}
.container #nav_slide {
  width: 100%;
  bottom: 12%;
  height: 11px;
  position: absolute;
  text-align: center;
  z-index: 99;
  cursor: default;
}
.container #nav_slide .dots {
  top: -0.5vh;
  width: 1.8vh;
  height: 1.8vh;
  margin: 0 0.3vh;
  position: relative;
  border-radius: 100%;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.4s;
  cursor: pointer;
}
.container #nav_slide #dot1:hover {
  background: #fcf809;
}
.container #nav_slide #dot2:hover {
  background: #f44336;
}
.container #nav_slide #dot3:hover {
  background: #2196f3;
}
.container #nav_slide #dot4:hover {
  background: #4caf50;
}

@media screen and (max-width: 68.5vh) {
  .container {
    border: none;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
  }
  .container .slide_img .prev,
  .container .slide_img .next {
    width: 15%;
  }
  .container .slide_img .prev span,
  .container .slide_img .next span {
    border: solid 12px;
  }
  .container .slide_img .prev span {
    border-color: transparent #fff transparent transparent;
  }
  .container .slide_img .next span {
    border-color: transparent transparent transparent #fff;
  }
  .container #nav_slide .dots {
    width: 12px;
    height: 12px;
  }
}
</style>