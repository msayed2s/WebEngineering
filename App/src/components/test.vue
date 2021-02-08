<template>
    <div>
        <button >{{msg}}</button>
    </div>
</template>

<script>
export default {
  name: 'test',
//   props: {title},
  data() {
    return {
        msg: "Hello " //+ title,
    }
  },
}
</script>

<style>
/* button {
    color: red;
} */
</style>