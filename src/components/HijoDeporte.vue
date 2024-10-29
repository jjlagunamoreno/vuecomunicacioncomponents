<template>
  <div style="color: red">
    <li>
      {{ nombredeporte }}
      <button @click="seleccionarFavoritoParent()">Seleccionar Favorito</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "HijoDeporte",
  props: ["nombredeporte"],
  methods: {
    seleccionarFavoritoParent() {
      console.log("Yo soy el hijo klk");
      //DEBEMOS REALIZAR LA LLAMADA A PADRE
      //DICHA LLAMADA SE HACE MEDIANTE string "nombreMetodoParent"
      //para enviar información, se realiza con comas por cada parametro
      //que tengamos en la recepción
      this.$emit("seleccionarFavoritoParent", this.nombredeporte);
    },
  },
  mounted() {
    console.log(this.nombredeporte);
  },
};
</script>