<template>
  <div>
    <h1>Padre Número</h1>
    <hr />
    <h2 style="color: red">La suma es: {{ resultado }}</h2>
    <button @click="generarNumeros">Generar Números Aleatorios</button>
    <div>
      <!-- Dibujamos un HijoNumero por cada número en el array -->
      <HijoNumero
        v-for="(num, index) in arrayNumerosHijosSuma"
        :key="index"
        :numero="num"
        @sumar-numero="sumarNumero"
      />
    </div>
  </div>
</template>

<script>
import HijoNumero from "./HijoNumero.vue";
export default {
  name: "PadreNumeros",
  methods: {
    generarNumeros() {
      // genera un número aleatorio y los asigna al array
      let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      this.arrayNumerosHijosSuma.push(numeroAleatorio);
    },
    sumarNumero(numero) {
      // agrega el número recibido del hijo al resultado
      this.resultado += numero;
    },
  },
  components: {
    HijoNumero,
  },
  data() {
    return {
      resultado: 0,
      arrayNumerosHijosSuma: [],
    };
  },
};
</script>
