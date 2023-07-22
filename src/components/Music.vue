<template>
  <v-row>
    <v-col cols="12" sm="6">
      <iframe
        src="https://open.spotify.com/embed/playlist/1WSa8k34La1qXE1PkXokRn?utm_source=generator&theme=0"
        width="100%"
        height="750"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </v-col>

    <v-col class="d-flex flex-column" cols="12" sm="6">
      <iframe
        src="https://open.spotify.com/embed/playlist/4yE8E5ktReGb77ynxscPV0?utm_source=generator"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <div class="text-primary-darken-1">全部的歌都在這 (只增不減)</div>

      <v-divider class="my-2"></v-divider>

      <div class="font-weight-bold">推薦藝人</div>

      <div class="flex-grow-1">
        <iframe
          src="https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02?utm_source=generator"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style="padding-bottom: 6px"
        ></iframe>
      </div>
    </v-col>
  </v-row>
</template>
