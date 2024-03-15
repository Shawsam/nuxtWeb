<template>
    <div class="container">
      <p>参数：{{ id }}</p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

const id = ref(route.params.id)
</script>