<template>
  <h1 style="padding: 50px">{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return { message: "hello" };
  },
  async mounted() {
    this.message = await $fetch("/api/1");
    setTimeout(() => location.reload(), 1000);
  },
};
</script>