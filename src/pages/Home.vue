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

  <div class="d-flex vh-100 pa-4">
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

  <v-card class="pb-6" color="secondary">
    <v-card-title class="d-flex align-center py-3">
      <v-icon class="mr-3" size="small" :icon="items[0].icon"></v-icon>
      <div>{{ items[0].title }}</div>
    </v-card-title>

    <v-card-text>
      <Music></Music>
    </v-card-text>
  </v-card>

  <div class="vh-100">
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-5257181231136891"
      data-ad-slot="6235112269"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>

<script>
import GSheet from "@/components/GSheet.vue";
import Music from "@/components/Music.vue";

export default {
  components: { GSheet, Music },

  mounted() {
    const adsScript = document.createElement("script");
    adsScript.async = true;
    adsScript.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5257181231136891";
    adsScript.crossOrigin = "anonymous";

    // (adsbygoogle = window.adsbygoogle || []).push({});
    const adsPush = document.createElement("script");
    adsPush.text = "(adsbygoogle = window.adsbygoogle || []).push({});";

    document.head.appendChild(adsScript);
    document.body.appendChild(adsPush);
  },

  data() {
    return {
      isIntersecting: false,
      items: [
        // {
        //   icon: "mdi-information",
        //   title: "關於我",
        // },
        // {
        //   icon: "mdi-star-box-multiple",
        //   title: "小工具/作品",
        // },
        {
          icon: "mdi-music",
          title: "音樂推薦",
        },
        {
          icon: "mdi-advertisements",
          title: "廣告專區",
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
  z-index: 1;
}

.menu {
  margin-top: 20vh;
  width: 300px;
}
</style>
