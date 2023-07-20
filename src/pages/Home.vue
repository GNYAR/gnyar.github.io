<template>
  <GSheet></GSheet>

  <v-slide-y-transition>
    <v-banner v-if="!isIntersecting" density="compact" sticky lines="one">
      <v-tabs
        v-model="tab"
        align-tabs="end"
        bg-color="white"
        color="secondary"
        hide-slider
      >
        <v-tab
          v-text="item.title"
          v-for="(item, i) in items"
          :value="i"
          :key="i"
        ></v-tab>
      </v-tabs>
    </v-banner>
  </v-slide-y-transition>

  <div class="d-flex vh-100">
    <v-spacer style="max-width: 60vw"></v-spacer>

    <div class="menu">
      <v-list v-intersect="onIntersect" rounded="lg">
        <template v-for="(item, i) in items" :key="i">
          <v-list-item
            rounded="xl"
            :active="false"
            :prepend-icon="item.icon"
            :subtitle="item.subtitle"
            :title="item.title"
            :value="i"
          ></v-list-item>

          <v-divider v-if="i != items.length - 1" class="mx-4 my-1"></v-divider>
        </template>
      </v-list>
    </div>
  </div>
</template>

<script>
import GSheet from "@/components/GSheet.vue";

export default {
  components: { GSheet },

  data() {
    return {
      isIntersecting: false,
      items: [
        {
          icon: "mdi-flag",
          title: "Title 1",
          subtitle: "subtitle...",
        },
        {
          icon: "mdi-flag",
          title: "Title 2",
          subtitle: "subtitle...",
        },
        {
          icon: "mdi-flag",
          title: "Title 3",
          subtitle: "subtitle...",
        },
      ],
      tab: null,
    };
  },

  methods: {
    onIntersect(x) {
      this.isIntersecting = x;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-banner {
  margin-top: -16px;
  margin-left: -16px;
  width: calc(100% + 32px);
  z-index: 1;
}

.menu {
  margin-top: 20vh;
  width: 400px;
}
</style>
