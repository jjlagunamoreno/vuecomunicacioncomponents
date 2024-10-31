<template>
  <div>
    <h1>Menú Tabla de Multiplicar</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="numero in numerosEjemplo" :key="numero">
        <!-- Enlace para el doble del número -->
        <router-link :to="'/numerodoble/' + numero">
          Doble de {{ numero }}
        </router-link>
      </li>
      <li v-for="num in numeros" :key="num">
        <!-- Enlace para la tabla de multiplicar del número -->
        <router-link :to="'/tablamultiplicar/' + num">Tabla de {{ num }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuTablaMultiplicar",
  data() {
    return {
      numerosEjemplo: [1, 22],
      numeros: []
    };
  },
  methods: {
    generarNumerosAleatorios() {
      // Genera 5 números aleatorios entre 1 y 10 y los agrega al array `numeros` con push
      for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        this.numeros.push(randomNum);
      }
    }
  },
  created() {
    // Genera números aleatorios cuando el componente se monta
    this.generarNumerosAleatorios();
  }
};
</script>

<style scoped>
/* Centrar el contenedor principal */
div {
  text-align: center;
}

/* Estilos para el menú */
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>
