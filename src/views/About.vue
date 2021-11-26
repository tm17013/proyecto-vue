<template>
  <div class="about">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" class="d-sm-none d-md-flex d-none d-sm-flex">
          <v-col>
            <v-card elevation="2" style="margin-bottom: 20px">
              <v-card-title>
                <h6>Estado</h6>
              </v-card-title>
              <div
                class="px-0 py-0 mx-0 my-0"
                v-for="estado in estados"
                :key="estado"
              >
                <v-col>
                  <v-switch
                    color="indigo"
                    class="py-0 my-0"
                    v-model="estadoSelect"
                    :label="estado"
                    :value="estado"
                  >
                  </v-switch>
                </v-col>
              </div>
            </v-card>

            <!-- Comienza las cards de filtro multiple-->
            <v-card elevation="2" style="margin-bottom: 20px">
              <v-card-title>
                <h6>Marca</h6>
              </v-card-title>
              <div
                class="px-0 py-0 mx-0 my-0"
                v-for="marca in marcas"
                :key="marca"
              >
                <v-card-text>
                  <v-checkbox
                    color="indigo"
                    class="py-0 my-0"
                    hide-details
                    :label="marca"
                    :value="marca"
                    v-model="marcaSelect"
                  ></v-checkbox>
                </v-card-text>
              </div>
            </v-card>

            <v-card elevation="2" style="margin-bottom: 20px">
              <v-card-title>
                <h6>Sistema</h6>
              </v-card-title>
              <div
                class="px-0 py-0 mx-0 my-0"
                v-for="sistema in sistemas"
                :key="sistema"
              >
                <v-card-text>
                  <v-checkbox
                    color="indigo"
                    class="py-0 my-0"
                    :label="sistema"
                    :value="sistema"
                    v-model="sistemaSelect"
                  ></v-checkbox>
                </v-card-text>
              </div>
            </v-card>

            <v-card elevation="2">
              <v-card-title>
                <h6>Pantalla</h6>
              </v-card-title>
              <div v-for="pantalla in pantallas" :key="pantalla">
                <v-card-text>
                  <v-checkbox
                    color="indigo"
                    class="py-0 my-0"
                    :label="pantalla"
                    :value="pantalla"
                    v-model="pantallaSelect"
                    hide-details
                  ></v-checkbox>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-col>
        <v-col cols="12" sm="9">
          <v-row v-if="!basecard.length"> </v-row>
          <v-data-iterator
            no-data-text="Ningún telefono con esa descripción."
            v-if="basecard.length"
            :items="basecardFiltrado"
            :search="busqueda"
            :sort-by="sortBy"
            :items-per-page.sync="itemsPerPage"
            hide-default-footer
            :page.sync="page"
            :sort-desc="sortDesc"
          >
            <template v-slot:header>
              <v-toolbar class="12" sm="9" elevation="0">
                <v-text-field
                  v-model="busqueda"
                  clearable
                  filled
                  rounded
                  hide-details
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar"
                  color="yellow darken-2"
                ></v-text-field>
                <template v-if="$vuetify.breakpoint.mdAndUp">
                  <v-spacer></v-spacer>
                  <v-select
                    v-model="sortBy"
                    filled
                    rounded
                    hide-details
                    :items="params"
                    item-text="texto"
                    item-value="param"
                    prepend-inner-icon="mdi-magnify"
                    label="Ordenar por"
                    color="yellow darken-2"
                  ></v-select>
                  <v-spacer></v-spacer>
                  <v-btn-toggle v-model="sortDesc" mandatory>
                    <v-btn large depressed :value="false">
                      <v-icon color="yellow darken-2">mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn large depressed :value="true">
                      <v-icon color="yellow darken-2">mdi-arrow-down</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </template>
              </v-toolbar>

              <v-col cols="12" class="d-flex d-sm-none">
                <v-col cols="10">
                  <v-select
                  color="yellow darken-2"
                    v-model="sortBy"
                    filled
                    rounded
                    hide-details
                    :items="params"
                    item-text="texto"
                    item-value="param"
                    prepend-inner-icon="mdi-magnify"
                    label="Ordenar por"
                  ></v-select>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="2">
                  <v-dialog v-model="filterDialog" width="500">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        v-on="on"
                        color="purple"
                        @click="filterDialog = true"
                        class="esquina hidden-md-and-up"
                        dark
                      >
                        <v-icon>mdi-filter</v-icon>
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="headline grey lighten-2">
                        <div
                          class="
                            d-flex
                            flex-row
                            justify-center
                            align-center
                            w-100
                          "
                          color="yellow darken-2"
                          dark
                        >
                          <h2>Filtrar</h2>
                        </div>
                      </v-card-title>

                      <v-card-text>
                        <div class="my-3">
                          <h4>Estado</h4>
                          <div v-for="estado in estados" :key="estado">
                            <v-switch
                              color="indigo"
                              class="py-0 my-0"
                              v-model="estadoSelect"
                              :label="estado"
                              :value="estado"
                            >
                            </v-switch>
                          </div>
                        </div>
                        <div class="my-3">
                          <h4>Marcas</h4>
                          <div v-for="marca in marcas" :key="marca">
                            <v-checkbox
                              color="indigo"
                              class="py-0 my-0"
                              hide-details
                              :label="marca"
                              :value="marca"
                              v-model="marcaSelect"
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="my-3">
                          <h4>Sistemas</h4>
                          <div v-for="sistema in sistemas" :key="sistema">
                            <v-checkbox
                              color="indigo"
                              class="py-0 my-0"
                              :label="sistema"
                              :value="sistema"
                              v-model="sistemaSelect"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                        <div class="my-3">
                          <h4>Pantallas</h4>
                          <div v-for="pantalla in pantallas" :key="pantalla">
                            <v-checkbox
                              color="indigo"
                              class="py-0 my-0"
                              :label="pantalla"
                              :value="pantalla"
                              v-model="pantallaSelect"
                              hide-details
                            ></v-checkbox>
                          </div>
                        </div>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="yellow darken-4"
                          text
                          @click="filterDialog = false"
                        >
                          Aceptar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-col>
            </template>
            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="6"
                  sm="3"
                >
                  <v-card
                    :data-mult="index % 3"
                    class="mx-auto my-3"
                    elevation="8"
                  >
                    <v-img height="250" :src="item.imagenes[0]">
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey darken-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>

                    <v-card-title
                      class="pt-3 pb-0 center-text"
                      style="font-size: 14px"
                    >
                      <div v-if="item.titulo.length < 20">
                        {{ item.titulo }}
                      </div>
                      <div v-else>
                        {{ item.titulo.substring(0, 20) + ".." }}
                      </div>
                    </v-card-title>

                    <v-card-text>
                      <v-chip color="purple" class="white--text"
                        >$ {{ item.precio }}</v-chip
                      >

                      <div>
                        {{ item.estado }}
                      </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                      <v-row align="center" class="spacer" no-gutters>
                        <v-col cols="1" color="purple">
                          <v-icon> mdi-account</v-icon>
                        </v-col>
                        <v-col cols="3" md>
                          <strong class="mx-3">{{ item.vendedor }}</strong>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>

                    <v-card-text>
                      Click en los chips para filtrar
                      <v-chip-group
                        active-class="deep-purple justify-center accent-4 white--text"
                        column
                      >
                        <v-chip @click="filtrarPor(item.marca)">{{
                          item.marca
                        }}</v-chip>
                        <v-chip @click="filtrarPor(item.pantalla)">{{
                          item.pantalla
                        }}</v-chip>
                        <v-chip @click="filtrarPor(item.modelo)">{{
                          item.modelo
                        }}</v-chip>
                        <v-chip @click="filtrarPor(item.sistema)">{{
                          item.sistema
                        }}</v-chip>
                      </v-chip-group>
                    </v-card-text>

                    <v-card-actions
                      class="d-flex flex-row justify-center flex-wrap"
                    >
                      <router-link
                        :to="{ name: 'Informacion', params: { id: item.id } }"
                      >
                        <v-btn small dark color="purple" class="action-button">
                          <v-icon>mdi-magnify</v-icon>
                          Detalles
                        </v-btn>
                      </router-link>
                      <v-btn
                        black
                        small
                        color="yellow"
                        class="black--text action-button"
                      >
                        <v-icon>mdi-cart</v-icon>
                        Agregar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </template>

            <template v-slot:footer>
              <v-row
                class="mt-2"
                align="center"
                justify="center"
                style="margin-bottom: 10px"
              >
                <span class="mr-4 grey--text">
                  Página {{ page }} de {{ numberOfPages }}
                </span>
                <v-btn fab dark color="yellow" class="mr-1" @click="formerPage">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab dark color="yellow" class="ml-1" @click="nextPage">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <span class="grey--text">Items por página</span>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      text
                      color="yellow darken-4"
                      class="ml-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list >
                    <v-list-item 
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-row>
            </template>
          </v-data-iterator>
        </v-col>
      </v-row>
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
    </v-container>
  </div>
</template>
  
<script>
import { db } from "../db";
export default {
  name: "About",

  data() {
    return {
      page: 1,
      itemsPerPage: 8,
      itemsPerPageArray: [4, 8, 12, 14, 18, 20],

      loading: true,
      backgroundImg: null,
      sortBy: [],
      busqueda: "",

      sortDesc: true,
      filterDialog: false,
      marcaSelect: [],
      sistemas: ["Android", "Windows", "Ios"],
      marcas: ["Samsung", "Huawei", "Nokia", "Iphone", "Xiaomi"],
      pantallas: ["5", "5.5", "6"],
      pantallaSelect: [],
      sistemaSelect: [],
      estadoSelect: [],
      estados: ["Nuevo", "Usado"],
      params: [
        { texto: "Titulo", param: "titulo" },
        { texto: "Precio", param: "precio" },
        { texto: "Marca", param: "marca" },
        { texto: "Sistema", param: "sistema" },
        { texto: "Pantalla", param: "pantalla" },
      ],
      basecard: [],
    };
  },
  firestore: {
    basecard: db.collection("basecard"),
  },

  computed: {
    numberOfPages() {
      return Math.ceil(this.basecard.length / this.itemsPerPage);
    },
    marcasFiltrado() {
      if (this.marcaSelect.length) return this.marcaSelect;
      else return this.marcas;
    },
    estadosFiltrado() {
      if (this.estadoSelect.length) return this.estadoSelect;
      else return this.estados;
    },
    sistemasFiltrado() {
      if (this.sistemaSelect.length) return this.sistemaSelect;
      else return this.sistemas;
    },
    pantallasFiltrado() {
      if (this.pantallaSelect.length) return this.pantallaSelect;
      else return this.pantallas;
    },

    basecardFiltrado() {
      return this.basecard.filter((v) => {
        if (!this.marcasFiltrado.includes(v.marca)) return false;
        if (!this.estadosFiltrado.includes(v.estado)) return false;
        if (!this.sistemasFiltrado.includes(v.sistema)) return false;
        if (!this.pantallasFiltrado.includes(v.pantalla)) return false;
        return true;
      });
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    filtrarPor(param) {
      if (this.busqueda == param) this.busqueda = "";
      else this.busqueda = param;
    },
    /* comprar(anuncio) {
      this.$root.$emit("Added-to-cart", anuncio);
    }, */
    /* async traerAnuncio() {
      try {
        const snapshot = await db.collection("basecard").get();
        snapshot.forEach((doc) => {
          let eventoData = doc.data();
          eventoData.id = doc.id;
          this.basecard.push(eventoData);
        });
      } catch (error) {
        console.log(error);
      }
    }, */
  },
  /* async created() {
    this.traerAnuncio();
  }, */
};
</script>
<style scoped>
.borders {
  border: solid black 1px;
}

.w-100 {
  width: 100%;
}
.relative {
  position: relative;
}

.action-button {
  margin: 5px;
}
.before-enter {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s;
}
.enter {
  opacity: 1;
  transform: translate(0px);
}
</style>
