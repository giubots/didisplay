<template>
  <div class="d-flex fill-height">
    <v-app-bar :elevation="24">
      <v-app-bar-title v-if="data.messages.length">
        <div class="d-flex flex-row justify-center">
          <div class="my-2 pa-2">
            {{ config.public.preMetadata }}
          </div>
          <div class="mx-5 my-2 py-2 px-3 shadowed rounded-lg">
            {{ data.metadata }}
          </div>
          <div class="my-2 pa-2">
            {{ config.public.postMetadata }}
          </div>
        </div>
      </v-app-bar-title>
      <template #prepend>
        <logos-bar />
      </template>
      <template #append>
        <v-btn
          icon
          @click="toggleTheme"
        >
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-list
        v-if="data.messages.length"
        class="d-flex flex-column fill-height"
      >
        <div
          v-for="(message, i) in data.messages"
          :key="i"
          :class="[
            'd-flex',
            { 'text-right flex-row-reverse': message.type == 'right' },
          ]"
        >
          <v-card class="ma-3 pa-3 shadowed rounded-lg">
            <div class="text-body-1">
              {{ message.name }}
            </div>
            <div class="text-h5">
              {{ message.text }}
            </div>
          </v-card>
        </div>
      </v-list>
      <div
        v-else
        class="d-flex align-center justify-center"
      >
        <loading-scr />
      </div>
      <div id="endPage" />
    </v-main>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
const route = useRoute();
const theme = useTheme();
const config = useRuntimeConfig()
const { data } = await useLazyAsyncData("data", () =>
  $fetch(`/api/${route.params.id}`)
);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

function refreshData() {
  refreshNuxtData("data").then(() => {
    const element = document.getElementById("endPage");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

onMounted(() => setInterval(refreshData, 1000));
</script>

<style>
.shadowed {
  box-shadow: 0 0 20px #fff,
    -10px 0 40px #f0f,
    10px 0 40px #0ff !important;
}
</style>
