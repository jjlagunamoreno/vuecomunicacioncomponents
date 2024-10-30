<template>
  <div>
    <h1>Ejemplo Checkbox</h1>
    <button type="button" @click="generarCheckboxAleatorio">Generar Checkbox</button>
    <form>
      <div v-for="numero in checkBoxNumeros" :key="numero">
        <input
          type="checkbox"
          :value="numero"
          v-model="seleccionados"
          @change="actualizarSuma(numero, $event)"
        />
        <label>{{ numero }}</label>
      </div>
      <h3 style="color: blue">La suma seleccionada es {{ suma }}</h3>
    </form>
  </div>
</template>

<script>
export default {
  name: "SumaCheckboxVue",
  data() {
    return {
      checkBoxNumeros: [], // Array de números para los checkboxes
      seleccionados: [], // Array para almacenar los números seleccionados
      suma: 0, // Resultado de la suma
    };
  },
  methods: {
    generarCheckboxAleatorio() {
      // Genera un array de 6 números aleatorios entre 1 y 50
      this.checkBoxNumeros = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 50) + 1
      );
      this.seleccionados = []; // Reinicia seleccionados al generar nuevos números
      this.suma = 0; // Reinicia la suma
    },
    actualizarSuma(numero, event) {
      // Suma o resta el número dependiendo del estado del checkbox
      if (event.target.checked) {
        this.suma += numero;
      } else {
        this.suma -= numero;
      }
    },
  },
};
</script>

<style scoped>
.div {
  text-align: justify;
}
</style>
