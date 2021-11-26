<template>
  <div class="informacion">
    <v-container>
      <v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-carousel>
              <v-carousel-item
                v-for="(img, i) in basecard.imagenes"
                :key="i"
                :src="img"
              >
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card elevation="2">
              <v-card-title>Titulo: {{ basecard.titulo }}</v-card-title>
              <v-card-text style="font-size:20px">${{ basecard.precio }}</v-card-text>
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
          <v-col cols="12" sm="6" style="margin-bottom:10px">
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
    <div>
      <v-card flat tile class="yellow darken-2 white--text text-center">
        <v-card-text class="white--text pt-0">
          Elaborado por:
          <strong> Kenia Stephannie Tepas Mazariego- TM17013</strong>
        </v-card-text>
        <strong> Universidad de El Salvador</strong>
        <v-card-text class="white--text pt-0">
          Fundamentos de la programación en Internet
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>© All Right Reserved</strong>
        </v-card-text>
      </v-card>
    </div>
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