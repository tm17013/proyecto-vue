<template>
  <div class="informacion">
    <v-container>
      <v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-carousel>
              <v-carousel-item
               v-for="(img, i) in basecard.imagenes" :key="i" :src="img"
              >
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card elevation="2">
              <v-card-title>Titulo: {{ basecard.titulo }}</v-card-title>
              <v-card-subtitle>${{ basecard.precio }}</v-card-subtitle>
              <v-card-text>
                <v-btn color="yellow" dark rounded>Comprar</v-btn>
              </v-card-text>
              <v-card-text>
                <v-chip color="purple" dark
                  >Vendedor: {{ basecard.vendedor }}</v-chip
                >
                <v-chip color="purple" dark
                  >Teléfono: {{ basecard.telefono }}</v-chip
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card elevation="2">
              <v-card-title>Caracteristicas</v-card-title>
              <v-card-text>
                <div>Estado: {{ basecard.estado }}</div>
                <div>Marca: {{ basecard.marca }}</div>
                <div>Modelo: {{ basecard.modelo }}</div>
                <div>Pantalla: {{ basecard.pantalla }}</div>
                <div>Sistema: {{ basecard.sistema }}</div>
                <div>Rom: {{ basecard.rom }}</div>
                <div>Ram: {{ basecard.ram }}</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card elevation="2">
              <v-card-title>Descripción</v-card-title>
              <v-card-text>{{ basecard.descripcion }} </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row
          class="center-align d-flex d-sm-none"
          style="position: fixed; bottom: 0; width: 100%"
        >
          <v-spacer></v-spacer>
          <v-col>
           
            <v-btn color="yellow" dark x-large elevation="11">Inicio</v-btn>
          </v-col>
          <v-col>
            <v-btn color="yellow" dark x-large elevation="11">Comprar</v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "../db";
export default {
  name: "Informacion",

  data() {
    return {
      basecard: {},
    };
  },
  /* firestore: {
    basecard: db.collection("basecard"),
  }, */
  methods: {
    async traerinfo() {
      try {
        var res = await db
          .collection("basecard")
          .doc(this.$route.params.id)
          .get();
        this.basecard = await res.data();
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.traerinfo();
  },
};
</script>