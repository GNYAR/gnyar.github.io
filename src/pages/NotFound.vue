<template>
  <v-row class="fill-height flex-column justify-center align-center">
    <v-col cols="auto" lg="6">
      <Vue3Lottie :animationData="NotFoundJSON"></Vue3Lottie>
    </v-col>

    <v-col cols="auto menu">
      <v-btn
        block
        color="primary"
        prepend-icon="mdi-home"
        :to="{ name: 'home' }"
      >
        Home
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import NotFoundJSON from "@/assets/lottie/NotFound";

export default {
  components: { Vue3Lottie },
  data() {
    return { NotFoundJSON };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
}
</style>
