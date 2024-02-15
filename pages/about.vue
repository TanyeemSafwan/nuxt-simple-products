<script setup>
// const { data } = await useFetch('/api/soft?name=Tan', {
//   method: 'post',
//   body: {
//     age: 30
//   }
// });
// const { data } = await useFetch('/api/soft');
const { data } = await useFetch('/api/currency/EUR');
</script>

<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem eaque vitae, expedita delectus possimus ab temporibus facere! Dolor eius pariatur fugit harum necessitatibus? Nam, exercitationem delectus quia mollitia rem repellat.</p>
    <div> {{ data }} </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
