<script setup>
  const { id } = useRoute().params;

  const uri = 'https://fakestoreapi.com/products/' + id;
  console.log(uri);
  const { data: product } = await useFetch(uri, {
    key: id
  });

  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `Product ${id} not found`,
      fatal: true
    });
  }

  console.log(product);

  definePageMeta({
  layout: 'products'
  });
</script>

<template>
  <div>
    <Head>
      <Title> Nuxt Product | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product"/>
  </div>
</template>

<style scoped>

</style>