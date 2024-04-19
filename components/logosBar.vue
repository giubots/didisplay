<template>
  <div class="d-flex align-center">
    <v-img
      v-for="(item, index) in config.public.logos"
      :key="index"
      width="100"
      :src="theme.global.current.value.dark ? item.dark : item.light"
    />
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const config = useRuntimeConfig()

</script>
