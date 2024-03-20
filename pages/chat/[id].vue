<template>
  <div class="d-flex fill-height">
    <v-app-bar
      :elevation="24"
      rounded
    >
      <v-app-bar-title>
        <div class="d-flex flex-row  justify-center ">
          <div class="my-2 pa-2">
            Topic of the conversation:
          </div>
          <div class="mx-5 my-2 py-2 px-3 shadowed rounded-lg">
            {{ data.metadata }}
          </div>
        </div>
      </v-app-bar-title>
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
      <v-list class="d-flex flex-column fill-height">
        <div
          v-for="(message, i) in data.messages"
          :key="i"
          :class="['d-flex', { 'text-right flex-row-reverse': message.type == 'right' }]"
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
      <div id="endPage" />
    </v-main>
  </div>
  <!-- <div>
    <h1 style="padding: 50px">
      {{ data.messages }}
    </h1>
    <p> {{ data.metadata }}</p>
  </div> -->
</template>

<script setup>
import { useTheme } from 'vuetify'
const route = useRoute();
const theme = useTheme()
const { pending, data } = await useLazyAsyncData('data', () => $fetch(`/api/${route.params.id}`));
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
function refreshData() {
  refreshNuxtData('data').then(
    () => {
      const element = document.getElementById('endPage')
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  )
}
onMounted(() => setInterval(refreshData, 1000))

// const data = useState(() => {
//   return {
//     "messages": [
//     {
//         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non convallis sapien. Vestibulum tempus gravida facilisis. Maecenas quis nisi dictum, porta quam mollis, egestas enim. Praesent bibendum commodo elementum. Aliquam sodales sodales volutpat. Suspendisse pharetra sagittis erat, vel mattis lacus mollis a. In vulputate nisi et felis laoreet, eget interdum felis consectetur. Sed mattis arcu non fringilla lobortis. ",
//         "name": "AI",
//         "type": "left"
//       },
//       {
//         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non convallis sapien. Vestibulum tempus gravida facilisis. Maecenas quis nisi dictum, porta quam mollis, egestas enim. Praesent bibendum commodo elementum. Aliquam sodales sodales volutpat. Suspendisse pharetra sagittis erat, vel mattis lacus mollis a. In vulputate nisi et felis laoreet, eget interdum felis consectetur. Sed mattis arcu non fringilla lobortis. ",
//         "name": "user",
//         "type": "right"
//       },
//       {
//         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non convallis sapien. Vestibulum tempus gravida facilisis. Maecenas quis nisi dictum, porta quam mollis, egestas enim. Praesent bibendum commodo elementum. Aliquam sodales sodales volutpat. Suspendisse pharetra sagittis erat, vel mattis lacus mollis a. In vulputate nisi et felis laoreet, eget interdum felis consectetur. Sed mattis arcu non fringilla lobortis. ",
//         "name": "AI",
//         "type": "left"
//       },      {
//         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non convallis sapien. Vestibulum tempus gravida facilisis. Maecenas quis nisi dictum, porta quam mollis, egestas enim. Praesent bibendum commodo elementum. Aliquam sodales sodales volutpat. Suspendisse pharetra sagittis erat, vel mattis lacus mollis a. In vulputate nisi et felis laoreet, eget interdum felis consectetur. Sed mattis arcu non fringilla lobortis. ",
//         "name": "AI",
//         "type": "left"
//       },
//       {
//         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non convallis sapien. Vestibulum tempus gravida facilisis. Maecenas quis nisi dictum, porta quam mollis, egestas enim. Praesent bibendum commodo elementum. Aliquam sodales sodales volutpat. Suspendisse pharetra sagittis erat, vel mattis lacus mollis a. In vulputate nisi et felis laoreet, eget interdum felis consectetur. Sed mattis arcu non fringilla lobortis. ",
//         "name": "user",
//         "type": "right"
//       },
//       {
//         "text": "hello",
//         "name": "AI",
//         "type": "left"
//       },
//       {
//         "text": "hello back",
//         "name": "user",
//         "type": "right"
//       }
//     ]
//     , metadata: 'test'
//   }
// })

</script>

<style>
.shadowed {
  box-shadow:
    0 0 20px #fff,
    /* outer white */
    -10px 0 40px #f0f,
    /* outer left magenta */
    10px 0 40px #0ff !important;
  /* outer right cyan */
}
</style>