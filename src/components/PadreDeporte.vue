<template>
  <div>
    <h1 style="color: blue">Padre Deporte Component</h1>
    <h2 style="background-color: yellow" v-if="favorito">
      Su deporte favorito es: {{ favorito }}
    </h2>
    <ul v-for="sport in deportes" :key="sport">
      <HijoDeporte
        :nombredeporte="sport"
        v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
      />
    </ul>
  </div>
</template>

<script>
import HijoDeporte from "./HijoDeporte.vue";
export default {
  name: "PadreDeporte",
  methods: {
    seleccionarFavoritoParent(deporteFavorito) {
      console.log("Yo soy tu padre");
      this.favorito = deporteFavorito;
    },
  },
  components: {
    HijoDeporte,
  },
  data() {
    return {
      deportes: [
        "baloncesto",
        "fútbol",
        "boxeo",
        "bolos",
        "canicas",
        "parchís",
      ],
      favorito:null,
    };
  },
};
</script>
