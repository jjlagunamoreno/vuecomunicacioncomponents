<template>
  <div>
    <h2 style="color: blue">Número: {{ numero }}</h2>
    <button @click="sumarNumero">Sumar Número</button>
  </div>
</template>

<script>
export default {
  name: "HijoNumero",
  props: {
    numero: {
      type: Number,
      required: true,
    },
  },
  methods: {
    sumarNumero() {
      // emitimos el número hacia el componente padre
      this.$emit("sumar-numero", this.numero);
    },
  },
};
</script>
