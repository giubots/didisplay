<template>
  <h1 style="padding: 50px">
    {{ message }}
  </h1>
</template>

<script setup>
const route = useRoute();
const { data } = await useFetch(`/api/${route.params.id}`);
let message = undefined;
if (data.value.messages.length) {
  message = data.value.messages.at(-1).text
}
else { message = "" }
</script>