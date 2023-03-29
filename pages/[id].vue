<template>
  <h1 style="padding: 50px">{{ message }}</h1>
</template>

<script setup>
const route = useRoute();
const { data: message } = await useFetch(`/api/${route.params.id}`);
</script>