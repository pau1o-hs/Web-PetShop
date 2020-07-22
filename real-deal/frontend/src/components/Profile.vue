<template>
    <div id="profile">
        <div class="container">
            <Header></Header>
            <input type="radio" id="i1" name="images" checked />
            <div class="slide_img" id="one">
                <img src="../mockup/images/profile/header.jpg" />
                <h1>PROFILE</h1>
            </div>
        </div>

        <div class="title2"><strong>Would like to add or change something?</strong></div>
        <section id="menu-profile">
            <a class="home-button prof1" href="#profilesection"><p>PROFILE INFO</p></a>
            <a class="home-button prof2" href="#petsection"><p>PETS MANAGER</p></a>
            <!--<a class="home-button prof3" href="#purchasesection"><p>PURCHASES</p></a>-->
            <a class="home-button prof4" href="#schedulesection"><p>RESERVED SCHEDULES</p></a>
        </section>

        <!-- PROFILE -->
        <div id="profilesection" class="customsection" style="background-color:mediumseagreen;">
            <p>Profile Information</p>
        </div>

        <div id="infoform">
            <section class="infosection" style="width: 30%">
                <p>ID #0000</p>
                <div>
                    <button class="btn-add">+</button>
                </div>
            </section>

            <section class="infosection" style="width: 30%">
                <input type="text" placeholder="Full name">
                <input type="text" placeholder="Adress">
                <input type="text" placeholder="Phone">
                <input type="text" placeholder="E-mail">
            </section>
        </div>

        <!-- PETS -->
        <div id="petsection" class="customsection" style="background-color:#2980B9;">
            <p>Pets Manager</p>
        </div>

        <div id="petform">
            <section class="polaroid pol1" style="background-color:#2980B9;">
                <img src="../mockup/images/profile/pet1.png" width="100%" height="80%">
                <p>Bobby</p><hr />
                <button>Edit</button>
            </section>
            <section class="polaroid pol2" style="background-color:#2980B9;">
                <img src="../mockup/images/profile/pet2.jpg" width="100%" height="80%">
                <p>Frajola</p><hr />
                <button>Edit</button>
            </section>
            <section class="polaroid pol3" style="background-color:#2980B9;">
                <img src="../mockup/images/profile/pet3.jpg" width="100%" height="80%">
                <p>Roger</p><hr />
                <button>Edit</button>
            </section>
            <!-- <a class="home-button pet1" href="#schedulesection"><p>Bobby</p></a>
        <a class="home-button pet2" href="#schedulesection"><p>Frajola</p></a>
        <a class="home-button pet3" href="#schedulesection"><p>Roger</p></a> -->
            <div class="infosection">
                <input type="text" placeholder="Name">
                <input type="select" placeholder="Race">
                <input type="number" placeholder="Age">
                <!-- <section style="display: flex; width: 100%"> -->
                <button type="file" class="btn-add2">Photo</button>
                <button class="btn-add2" style="width: 50%;">Add Pet</button>
                <!-- </section> -->
            </div>
        </div>

        <!-- SCHEDULES -->
        <div id="schedulesection" class="customsection" style="background-color:#E74C3C;">
            <p>Reserved Schedules</p>
            <div class="search">
                <input type="text" placeholder=" Type one of your pets here..." />
            </div>
        </div>

        <div class="scheduleform">

            <section class="polaroid pol1">
                <img src="../mockup/images/profile/pet1.png" width="100%" height="80%">
                <p>Wash (R$0,00)</p><hr />
                <p>11:00 | 10-10-2020</p>
            </section>

            <section class="polaroid pol2">
                <img src="../mockup/images/profile/pet3.jpg" width="100%" height="80%">
                <p>Appointment (R$0,00)</p><hr />
                <p>10:30 | 10-10-2020</p>
            </section>

            <div class="petregister">
                <button class="btn-add">+</button>
            </div>
            <!-- <p>Pet: <input type="text" value="Bobby" size="7" readonly></p>
        <p>Service: <select><option selected>Wash</option></select></p>
        <p>Date: <input type="datetime-local" value="2020-05-05T10:30" readonly></p> -->
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Home from './Home.vue';
    import Header from './Header.vue';
    import Footer from './Footer.vue';


    export default {
        name: 'Profile',
        components: {
            Home, Header, Footer
        },
        props: {
            msg: String
        }
    };
</script>