<template>
  <div class="d-flex align-center">
    <img
      v-for="(item, index) in config.public.logos"
      :key="index"
      :src="theme.global.current.value.dark ? item.dark : item.light"
    >
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const config = useRuntimeConfig()

</script>
