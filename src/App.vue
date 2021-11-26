<template>
  <v-app>
    <v-app-bar
      app
      color="yellow"
      class="
        d-sm-none
        d-md-flex
        d-none
        d-md-flex
        d-lg-none
        d-none
        d-lg-flex
        d-xl-none
      "
      dark
    >
      <v-container>
        <v-row>
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Tienda Celular</v-toolbar-title>
          </v-col>
          <v-spacer></v-spacer>
          <v-col md="3" class="d-flex align-center">
            <v-text-field
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            ><v-btn
              style="font-size: 10px"
              class="ma-1"
              small
              outlined
              color="indigo"
              :to="{ path: '/' }"
              >Inicio</v-btn
            ></v-col
          ><v-spacer></v-spacer>
          <v-col
            ><v-btn
              style="font-size: 10px"
              class="ma-1"
              small
              outlined
              color="indigo"
              :to="{ path: '/estadisticas' }"
              >Estadisticas</v-btn
            ></v-col
          ><v-spacer></v-spacer>
          <v-col>
           
            <NuevoAnuncio /> </v-col
          ><v-spacer></v-spacer>
          <v-col>
            <v-btn
              class="mx-1"
              fab
              dark
              dense
              small
              color="purple"
              :to="{ path: '/carrito' }"
            >
              <v-icon dark small>mdi-cart-plus</v-icon>
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-app-bar
      app
      color="yellow"
      dark
      class="d-flex d-sm-none d-none d-sm-flex d-md-none"
    >
      <v-container>
        <v-row>
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          </v-col>
          <v-col cols="8">
            <v-text-field
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-card-account-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Tienda Celulares</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-btn
                class="ma-1"
                :to="{ path: '/' }"
                small
                outlined
                block
                color="indigo"
                >Inicio</v-btn
              >
            </v-list-item-icon>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
             
              <v-btn class="ma-1" small block outlined color="indigo">
                <NuevoAnuncio />Nuevo Anuncio</v-btn
              >
            </v-list-item-icon>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon
              class="d-flex justify-center"
              style="align-items: center"
            >
              <v-btn
                class="ma-1"
                :to="{ path: '/carrito' }"
                small
                block
                outlined
                color="indigo"
                ><v-icon style="color: purple">mdi-cart-plus</v-icon
                >Carrito</v-btn
              >
            </v-list-item-icon>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-btn
                class="ma-1"
                :to="{ path: '/estadisticas' }"
                small
                block
                outlined
                color="indigo"
                >Estadisticas</v-btn
              >
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NuevoAnuncio from "./components/NuevoAnuncio.vue";
export default {
  name: "App",
  components: {
    NuevoAnuncio,
  },
  data: () => ({
    //
    drawer: false,
    group: null,
  }),
};
</script>
