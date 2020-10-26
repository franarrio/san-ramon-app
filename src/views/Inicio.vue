<template>
  <div>
    <Video :sources="['https://github.com/franarrio/Vue-JS/blob/main/san-ramon-app/src/assets/ramon.mp4']" />
  </div>
</template>

<script>
import Video from "../components/Inicio/Video";

export default {
  name: "Inicio",
  components: {
    Video,
  },
};
</script>

<style>
</style>