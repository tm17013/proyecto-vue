<template>
  <v-container>
    <div>
      <h2>Lista de Articulos</h2>
      <v-col>
        <v-card class="mx-auto" elevation="5" outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile size="80" color="grey">
              <img src="https://firebasestorage.googleapis.com/v0/b/vue-finalfpi.appspot.com/o/idanuncio%2F1.jpg?alt=media&token=57f06496-a95d-46e0-8595-726e8c64ab9b"  />
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="text-overline mb-4 " >Articulo 1</div>
              <v-list-item-title class="text-h5 mb-1">
                Iphone 13 pro 
              </v-list-item-title>
              <v-list-item-subtitle
                >$230</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col> 
        <v-card class="mx-auto" elevation="5" outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile size="80" color="grey">
              <img src="https://firebasestorage.googleapis.com/v0/b/vue-finalfpi.appspot.com/o/idanuncio%2F6.jpg?alt=media&token=b60073f0-50e5-4611-8b34-96f1dacaa645"  />
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="text-overline mb-4">Articulo 2</div>
              <v-list-item-title class="text-h5 mb-1">
                Hawuei Y9
              </v-list-item-title>
              <v-list-item-subtitle
                >$555</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "carrito",
};
</script>