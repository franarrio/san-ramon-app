<template>
  <nav>
    <v-toolbar flat color="primary">
      <v-toolbar-items class="navbar">
        <v-btn
          x-small
          v-for="link in links"
          :key="link.name"
          :to="{ path: link.path }"
          class="white--text"
          text
          >{{ link.name }}</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      links: [
        {
          name: "inicio",
          path: "/" + "inicio",
        },
        {
          name: "lugares",
          path: "/" + "lugares",
        },
        {
          name: "cultura",
          path: "/" + "cultura",
        },
        {
          name: "eventos",
          path: "/" + "eventos",
        },
      ],
    };
  },
};
</script>

<style>
.navbar {
  margin: auto;
  padding: 24px;
}
</style>
