export default defineEventHandler(async (event) => {

  // const { name } = getQuery(event);

  // const { age } = await readBody(event);

  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_SvgIICYQ3g3PCd4YIk0y3JEiyZWWYX9txDBN9qJv');

  // return {
  //   message: `Hello ${name}! You are ${age} years old`
  // };
  return data;
});