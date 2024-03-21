<template>
  <div class="d-flex align-center">
    <v-img
      width="100"
      :src="theme.global.current.value.dark ? '/ugent-inv.png' : '/ugent.png'"
    />
    <v-img
      class="mr-9"
      width="100"
      :src="theme.global.current.value.dark ? '/imec-inv.png' : '/imec.png'"
    />
    <!-- <v-img
        width="100"
        aspect-ratio="2:1"
      :src="theme.global.current.value.dark ? '/idlab-inv.png' : '/idlab.png'"

      /> -->
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

</script>
