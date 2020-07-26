<template>
  <!-- Footer -->
  <div class="footer">
    <div class="footer-item footer-item-1">
      <div class="footer-item-top">
        <h2>
          Find us on
          <strong>social media</strong>
        </h2>
      </div>
      <div class="footer-item-bottom">
        <ul id="social-media-list">
          <li>
            <a href="https://www.facebook.com/" class="fa fa-facebook" target="_blank"></a>
          </li>
          <li>
            <a href="https://www.instagram.com/" class="fa fa-instagram" target="_blank"></a>
          </li>
          <li>
            <a href="https://twitter.com/" class="fa fa-twitter" target="_blank"></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-item footer-item-sep"></div>
    <div class="footer-item footer-item-2">
      <div class="footer-item-top">
        <h2>
          Subscribe to our
          <strong>newsletter</strong>
        </h2>
      </div>
      <div class="footer-item-bottom">
        <form action="#"></form>
        <input id="news-email" type="text" placeholder="  enter your e-mail" />
        <input id="news-button" type="submit" value="Submit" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  display: flex;
  background: #211a1d;
  color: #fdfffc;
  height: 175px;
  width: 100%;
  justify-content: center;
  opacity: 1;
}

.footer-item {
  padding: 20px;
  flex-direction: column;
}
.footer-item * {
  margin: 0;
}

/* Separator (vertical line) between itens */
.footer-item-sep {
  background-color: #fdfffc;
  align-self: center;
  height: 80%;
  width: 3px;
  padding: 0;
}

.footer-item-1 {
  flex: 2 1 0;
  display: flex;
}

.footer-item-2 {
  flex: 2 1 0;
  display: flex;
}

.footer-item-top {
  flex: 1 1 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.footer-item-top h2 {
  font-weight: normal;
}
.footer-item-top h3 {
  font-size: 1.3em;
}

.footer-item-bottom {
  flex: 1 1 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

#social-media-list {
  flex: 1 1 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
#social-media-list li {
  text-align: center;
}

#news-email {
  height: 45px;
  width: 350px;
  margin: 0 20px;
  border-radius: 5px;
}

#news-button {
  cursor: pointer;
  height: 45px;
  width: 100px;
  background: #125688;
  border-radius: 5px;
  border: none;
  color: #fdfffc;
  font-size: 1.1em;
}
#news-button:hover {
  background-color: #0a304b;
}

/* Editing font awesome favicons */
.fa {
  padding: 10px;
  font-size: 30px;
  width: 50px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px;
  border-radius: 50%;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}
</style>