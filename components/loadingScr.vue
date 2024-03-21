<template>
  <v-progress-circular
    class="small-glow pulse text-h4"
    indeterminate
    :size="256"
    :width="24"
  >
    Ready
  </v-progress-circular>
</template>

<script lang="ts" setup>

</script>

<style>
.small-glow {
  filter: drop-shadow(0 0 0.75rem lightblue);
}

.pulse {
  margin: 100px;
  border-radius: 100%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow:
      0 0 20px #fff,
      -10px 0 40px #f0f,
      10px 0 40px #0ff;
  }

  70% {
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
</style>