<template>
    <div>{{ message }}</div>
</template>

<script>
export default {
    data() { return { message: "" } },
    async mounted() {
        this.message = await $fetch("/api/1")
        setTimeout(() => location.reload(), 1000)
    }
}
</script>