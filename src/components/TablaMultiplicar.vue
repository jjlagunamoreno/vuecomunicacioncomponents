<template>
  <div>
    <h1>{{ mensaje }}</h1>
    <ul v-if="numero">
      <li v-for="i in 10" :key="i">
        {{ numero }} x {{ i }} = {{ numero * i }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0, // Almacena el número de la tabla de multiplicar
      mensaje: "Tabla de Multiplicar" // Mensaje inicial
    };
  },
  mounted() {
    console.log("Param: " + this.$route.params.numero);
    // Captura el parámetro de la ruta y lo convierte a número
    let paramNumero = this.$route.params.numero;
    if (!paramNumero) {
      console.log("Sin parámetros");
      this.mensaje = "Sin parámetros en Routing";
    } else {
      console.log("Con parámetros");
      this.mensaje = "Tabla de Multiplicar del " + paramNumero;
      this.numero = parseInt(paramNumero);
    }
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      // Observa cambios en el parámetro y actualiza los valores
      if (nextVal !== oldVal) {
        if (!nextVal) {
          this.mensaje = "Sin parámetros en Routing";
          this.numero = 0; // Restablece el número si no hay parámetro
        } else {
          this.mensaje = "Tabla de Multiplicar del " + nextVal;
          this.numero = parseInt(nextVal);
        }
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

li {
  margin: 5px 0;
}
</style>
