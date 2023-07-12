<template>
  <v-sheet height="100vh" width="100vw" color="primary" position="fixed">
    <v-row class="pa-6">
      <v-col v-for="i in 5" cols="12">
        <span
          class="font-weight-black"
          :class="i % 2 ? 'text-disabled' : 'text-medium-emphasis'"
        >
          GN<br />YAR
        </span>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style lang="scss" scoped>
.v-sheet {
  top: 0;
  left: 0;
}

span {
  font-size: 30vw;
  line-height: 0.6;
}
</style>
