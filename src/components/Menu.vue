<template>
  <div>
    <ul id="menu">
      <li>
        <router-link to="/">Home | </router-link>
      </li>
      <li>
        <router-link to="/sumacheckbox">Suma Checkbox | </router-link>
      </li>
      <li>
        <router-link to="/numerodoble/77">Numero 77 | </router-link>
      </li>
      <li>
        <router-link to="/numerodoble">Numero doble SIN | </router-link>
      </li>
      <li>
        <router-link to="/deportes/1">Deportes | </router-link>
      </li>
      <li v-for="numero in numeros" :key="numero">
        <router-link :to="'/numerodoble/'+ numero ">Numero | {{ numero }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      numeros: [5, 2, 3],
    };
  },
  methods: {},
};
</script>

<style scoped>
ul#menu li {
  display: inline;
}
</style>
