<script setup>
  const { id } = useRoute().params;
  definePageMeta({
  layout: 'products'
  });
</script>

<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit libero dolore, numquam a eligendi tempora sapiente sunt ex architecto saepe eaque natus placeat, impedit optio? Inventore incidunt nulla ducimus?</p>
  </div>
</template>

<style scoped>

</style>