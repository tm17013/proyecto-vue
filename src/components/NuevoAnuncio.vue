<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent scrollable max-width="1000px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn small fab dark color="purple" v-bind="attrs" v-on="on">
            <v-icon dark>mdi-plus</v-icon></v-btn
          >
        </template>
        <v-card>
          <v-toolbar color="yellow" dark class="text-h4"
            >NUEVO ANUNCIO</v-toolbar
          >

          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-carousel small>
                      <v-carousel-item> </v-carousel-item>
                      <v-carousel-item> </v-carousel-item>
                      <v-carousel-item> </v-carousel-item>
                    </v-carousel>
                    <v-file-input
                      label="Agregar imagen"
                      show-size
                      outlined
                      dense
                      counter
                      chips
                      
                      prepend-icon="mdi-camera"
                      accept="image/*"
                    ></v-file-input>
                    <v-btn
                      style="background-color: purple; margin-right: 20px"
                      dark
                      elevation="2"
                      >Subir</v-btn
                    >
                    <v-btn style="background-color: purple" dark elevation="2"
                      >Eliminar</v-btn
                    >
                  </v-col>
                  <v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Titulo"
                        required
                        :rules="rules.titulo"
                        v-model="anuncio.titulo"
                        :counter="maxTitulo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Precio"
                        required
                        type="number"
                        hint=""
                        :rules="rules.precio"
                        v-model="anuncio.precio"
                      ></v-text-field>
                    </v-col>
                    <v-row>
                      <v-col cols="4" sm="12">
                        <v-text-field
                          label="Vendedor"
                          hint="Nombre y  apellido"
                          persistent-hint
                          required
                          :counter="maxvendedor"
                          :rules="rules.vendedor"
                          v-model="anuncio.vendedor"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4" sm="12">
                        <v-text-field
                          label="Telefono"
                          hint="Numero como 22347890"
                          persistent-hint
                          required
                          prefix="+503"
                          :counter="maxTel"
                          :rules="rules.telefono"
                          v-model="anuncio.telefono"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4" sm="12">
                        <v-text-field
                          label="Color"
                          hint="Colocar color del telefono"
                          persistent-hint
                          required
                          :counter="maxcolor"
                          :rules="rules.color"
                          v-model="anuncio.color"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-card elevation="3">
                      <v-col>
                         <v-select
                          label="Estado"
                          placeholder="Nuevo"
                          :items="estados"
                          required
                          v-model="anuncio.estado"
                        ></v-select>
                      </v-col>
                      <v-col>
                        <v-select
                          label="Marca"
                          placeholder="Iphone"
                          :items="marcas"
                          required
                          v-on:change="selectSistema()"
                          :rules="rules.selection"
                          v-model="anuncio.marca"
                        ></v-select>
                      </v-col>
                      <v-col>
                        <v-text-field
                          placeholder="6 Plus"
                          label="Modelo"
                          required
                          :counter="maxModel"
                          :rules="rules.modelo"
                          v-model="anuncio.modelo"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          placeholder="5.5"
                          label="Pantalla"
                          hint="Pulgadas"
                          persistent-hint
                          type="number"
                          max="20"
                          min="1"
                          suffix="Pulgadas"
                          required
                          :rules="rules.pantalla"
                          v-model="anuncio.pantalla"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-select
                          label="Sistema"
                          placeholder="Ios"
                          :items="sistemas"
                          required
                          :rules="rules.selection"
                          v-model="anuncio.sistema"
                        ></v-select>
                      </v-col>
                      <v-col>
                        <v-text-field
                          placeholder="64 GB"
                          label="ROM"
                          required
                          max="128"
                          min="1"
                          suffix="GB"
                          :rules="rules.rom"
                          v-model="anuncio.rom"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          placeholder="64 GB"
                          label="RAM"
                          required
                          max="128"
                          min="1"
                          suffix="GB"
                          :rules="rules.ram"
                          v-model="anuncio.ram"
                        ></v-text-field>
                      </v-col>
                    </v-card>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-card elevation="3">
                      <v-card-title>Descripción</v-card-title>
                      <v-textarea
                        label="Escribir... "
                        :counter="maxdes"
                        :rules="rules.des"
                        v-model="anuncio.des"
                      ></v-textarea>
                    </v-card>
                    <v-btn color="secundary" dark @click="limpiar()"
                      ><v-icon class="mr-2"> mdi-broom </v-icon>
                      <span class="hidden-sm-and-down"> Limpiar </span>
                    </v-btn>
                    <v-btn color="red darken-1" text @click="cancelar()"
                      ><v-icon class="mr-2">mdi-delete</v-icon>
                      <span class="hidden-sm-and-down">Cancelar </span>
                    </v-btn>
                    <v-btn :disabled="!valid" color="green darken-1" text
                      ><v-icon class="mr-2"> mdi-content-save </v-icon>
                      <span class="hidden-sm-and-down">Guardar </span>
                    </v-btn>
                  </v-col>
                
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secundary" dark @click="limpiar()"
              ><v-icon class="mr-2"> mdi-broom </v-icon>
              <span class="hidden-sm-and-down"> Limpiar </span>
            </v-btn>
            <v-btn color="red darken-1" text @click="cancelar()"
              ><v-icon class="mr-2">mdi-delete</v-icon>
              <span class="hidden-sm-and-down">Cancelar </span>
            </v-btn>
            <v-btn
              
              color="green darken-1"
              text
              @click="(dialog = false), (snackbar = true)"
              ><v-icon class="mr-2"> mdi-content-save </v-icon>
              <span class="hidden-sm-and-down">Crear Anuncio</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar v-model="snackbar">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Quitar mensaje
          </v-btn>
        </template>
      </v-snackbar>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NuevoAnuncio",

  data() {
    return {
      dialog: false,
      valid: true,
      row: null,
      snackbar: false,
      text: `Anuncio Creado Satisfactoriamente`,
      sistemas: ["Android", "Windows", "Ios"],
      marcas: ["Samsung", "Huawei", "Nokia", "Iphone", "Xiaomi"],
      estados: ["Nuevo", "Usado"],
      maxTitulo: 50,
      maxdes: 100,
      maxvendedor: 20,
      maxModel: 10,
      maxcolor: 10,
      maxTel: 8,
      anuncio: {
        sistema: "",
        marca: "",
        estado: "",
      },
      
      rules: {
        selection: [(v) => !!v || "Este campo es requerido"],
        titulo: [
          (v) => !!v || "Este campo es requerido",
          (v) =>
            (v && v.length <= this.maxTitulo) ||
            "El titulo no debe exceder " + this.maxTitulo + " caracteres",
        ],
        modelo: [
          (v) => !!v || "Este campo es requerido",
          (v) => (v && v.length <= 10) || "Solo son permitidos 10 caracteres",
        ],
        pantalla: [
          (v) => !!v || "Este campo es requerido",
          (v) => (v && v > 0) || "El tamaño de la pantalla debe ser mayor a 0",
          (v) =>
            (v && v == 5) || (v && v == 5.5)|| (v && v == 6) || "El tamaño de la pantalla debe ser 5,5.5 o 6",
            
        ],
        color: [
          (v) => !!v || "Este campo es requerido",
          (v) => (v && v.length <= 10) || "Solo son permitidos 10 caracteres",
        ],
        ram: [
          (v) => !!v || "Este campo es requerido",
          (v) => (v && v > 0) || "La memoria RAM debe ser mayor a 0",
          (v) => (v && v <= 128) || "La memoria RAM debe ser menor a 128 GB",
        ],
        rom: [
          (v) => !!v || "Este campo es requerido",
          (v) => (v && v > 0) || "La memoria R0M debe ser mayor a 0",
          (v) => (v && v <= 128) || "La memoria R0M debe ser menor a 128 GB",
        ],
        des: [
          (v) => !!v || "Este campo es requerido",
          (v) =>
            (v && v.length <= this.maxdes) ||
            "La descripción no debe exceder 500 caracteres",
        ],
        precio: [
          (v) => !!v || "Este campo es requerido",
          (v) => (v && v >= 0) || "El precio debe ser un numero positivo",
        ],
        vendedor: [
          (v) => !!v || "Este campo es requerido",
          (v) =>
            (v && v.length <= this.maxvendedor) ||
            "El nombre no debe exceder los 20 caracteres",
        ],
        telefono: [
          (v) => !!v || "Este campo es requerido",
          (v) =>
            (v && v.length <= this.maxTel) ||
            "Telefono no debe exceder los 8 caracteres",
          (v) => /\d{8}/.test(v) || "El telefono debe ser de la forma ########",
        ],
      },
    };
  },
  /* fuera del data, inicio de metodos*/
  methods: {
    selectSistema() {
      if (this.anuncio.marca == "Iphone") {
        this.anuncio.sistema = "Ios";
      } else {
        this.anuncio.sistema = "Android";
      }
    },
    makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    cancelar() {
      this.$refs.form.reset();
      this.dialog = false;
    },
    limpiar() {
      this.$refs.form.reset();
    },
  },

};
</script>