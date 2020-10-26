<template>
  <v-app>
    <Navbar color="primary" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({}),
};
</script>

<style>
@font-face {
  font-family: "KGHAPPY";
  src: local("KGHAPPY"), url(./fonts/KGHAPPYSolid.ttf) format("truetype");
}

* {
  font-family: "Montserrat", sans-serif;
}

#app {
  background: #3ab5a4;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "KGHAPPY";
}

.navbar {
  margin: auto;
  padding: 24px;
}

.container {
  width: 100%;
  margin: auto;
  padding: 24px;
}
</style>
