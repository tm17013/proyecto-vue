<template>
  <v-container fluid>
    <v-row
      ><!-- Columna Uno-->

      <v-col cols="12" sm="3" class="d-sm-none d-md-flex d-none d-sm-flex"
        ><!-- Switch Nuevo-->
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
              
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  color="primary"
                  class="py-0 my-0"
                  v-model="estadoSelect"
                  :label="estado"
                  :value="estado"
                ></v-checkbox>
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
                <!-- <v-checkbox
                label="Samsung"
                color="indigo"
                value="Samsung"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="Hawuei"
                color="indigo"
                value="Hawuei"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="Nokia"
                color="indigo"
                value="Nokia"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="!Phone"
                color="indigo"
                value="!Phone"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="Xiomi"
                color="indigo"
                value="Xiomi"
                hide-details
              ></v-checkbox> -->
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
                <!-- <v-checkbox
                label="Android"
                color="indigo"
                value="Android"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="Windows"
                color="indigo"
                value="Windows"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="Ios"
                color="indigo"
                value="Ios"
                hide-details
              ></v-checkbox> -->
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
                <!-- <v-checkbox
                label="6.0"
                color="indigo"
                value="6.0"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="5.5"
                color="indigo"
                value="5.5"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="5"
                color="indigo"
                value="5"
                hide-details
              ></v-checkbox> -->
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-col>
      <v-col cols="12" sm="9">
        <!--Contenido segunda columna-->
        <v-row id="PrecioyOrdenarFila"
          ><!--Fila Precio y Ordenar-->
          <v-col cols="6" class="d-sm-none d-md-flex d-none d-sm-flex">
            <v-row>
              <v-col cols="3"><h6>Precio:</h6></v-col>
              <v-col><v-text-field label="$"></v-text-field></v-col>
              <v-col cols="3"><h6>Hasta:</h6></v-col>
              <v-col><v-text-field label="$"></v-text-field> </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="6">
            <v-row>
              <v-col class="d-sm-none d-md-flex d-none d-sm-flex"
                ><h6 style="margin-right: 10px">Ordenar por:</h6>
                <v-btn style="margin-right: 20px" elevation="2" small
                  ><v-icon dark small> mdi-arrow-up </v-icon>Precio</v-btn
                >
                <v-btn elevation="2" small>Fecha</v-btn></v-col
              >
              <v-col class="d-flex d-sm-none">
                <v-col cols="10">
                  <v-card elevation="2">
                    <v-row>
                      <v-col>
                        <v-card-text>Ordenar por:</v-card-text>
                      </v-col>
                      <v-col>
                        <v-select
                          :items="items1"
                          label="Precio"
                          solo
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <v-col cols="2">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="purple" dark v-bind="attrs" v-on="on"
                        ><v-icon>mdi-filter-outline</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-switch
                          color="primary"
                          label="Nuevo"
                          value="Nuevo"
                        ></v-switch>
                      </v-list-item>
                      <v-list-item>
                        <v-col>
                          <v-card elevation="2">
                            <v-card-title>
                              <h6>Marca</h6>
                            </v-card-title>
                            <v-card-text>
                              <v-checkbox
                                label="Samsung"
                                color="indigo"
                                value="Samsung"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Hawuei"
                                color="indigo"
                                value="Hawuei"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Nokia"
                                color="indigo"
                                value="Nokia"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="!Phone"
                                color="indigo"
                                value="!Phone"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Xiomi"
                                color="indigo"
                                value="Xiomi"
                                hide-details
                              ></v-checkbox>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-list-item>
                      <v-list-item>
                        <v-col>
                          <v-card elevation="2">
                            <v-card-title>
                              <h6>Sistema</h6>
                            </v-card-title>
                            <v-card-text>
                              <v-checkbox
                                label="Android"
                                color="indigo"
                                value="Android"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Windows"
                                color="indigo"
                                value="Windows"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="Ios"
                                color="indigo"
                                value="Ios"
                                hide-details
                              ></v-checkbox>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-list-item>
                      <v-list-item>
                        <v-col>
                          <v-card elevation="2">
                            <v-card-title>
                              <h6>Pantalla</h6>
                            </v-card-title>
                            <v-card-text>
                              <v-checkbox
                                label="6.0"
                                color="indigo"
                                value="6.0"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="5.5"
                                color="indigo"
                                value="5.5"
                                hide-details
                              ></v-checkbox>
                              <v-checkbox
                                label="5"
                                color="indigo"
                                value="5"
                                hide-details
                              ></v-checkbox>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-col>
            </v-row>
          </v-col> </v-row
        ><!--Primera Fila de Precio y Ordenar por-->

        <v-row id="CardProductosrow">
          <v-col cols="6" sm="3" v-for="i in basecards" :key="i.titulo">
            

            <v-card small elevation="3">
              <v-img :src="i.url" height="250px"></v-img>
              <v-card-title>${{ i.precio }}</v-card-title>
              <v-card-text max-height="150px"
                >Marca {{ i.marca }}, Sistema {{ i.sistema }}, {{ i.modelo }},
                Pantalla de {{ i.pantalla }}'', RAM de {{ i.ram }}, ROM de
                {{ i.rom }}, Color {{ i.color }}, Estado:
                {{ i.estado }}</v-card-text
              >
              <v-btn style="background-color: yellow" elevation="2" :to="{ path: '/informacion' }">Ver</v-btn>
              <v-btn style="background-color: purple" dark elevation="2"
                >Comprar</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
        <v-row id="Paginacion">
          <v-col class="d-flex" cols="9">
            <div class="text-center">
              <v-pagination v-model="page" :length="8"></v-pagination>
            </div>
          </v-col>
          <v-col class="d-sm-none d-md-flex d-none d-sm-flex" cols="2">
            <v-select :items="items" label="1" solo></v-select>
          </v-col>
        </v-row>
        <v-card>
          <v-card-text center>
            Kenia Stephannie Tepas Mazariego - TM17013
          </v-card-text>
        </v-card>
        <!--Fin de Contenido Cards--> </v-col
      ><!--Fin de Contenido segunda columna--></v-row
    >

    <!--Fin de contenido--> </v-container
  ><!--Fin de contenedor-->
</template>

<script>
import { db } from "../db";

export default {
  name: "Home",

  data() {
    return {
      basecards: [],
      page: 1,
      items: ["2", "3", "4", "5", "6", "7", "8"],
      items1: ["Precio", "Fecha"],
      marcaSelect: [],
      sistemas: ["Android", "Windows", "Ios"],
      marcas: ["Samsung", "Huawei", "Nokia", "Iphone", "Xiaomi"],
      pantallas: ["5", "5.5", "6"],
      pantallaSelect: [],
      sistemaSelect: [],
      estadoSelect: [],
      estados: ["Nuevo", "Usado"],
    };
  },
  firestore: {
    basecards: db.collection("basecard"),
  },
};
</script>

