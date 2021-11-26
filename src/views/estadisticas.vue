<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto text-center"
          color="pink darken-3"
          dark
          max-width="600"
        >
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">Ventas del mes de octubre-noviembre 2021</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" color="grey lighten-4" max-width="600" max-height="600">
          <v-card-title>

            <v-row align="start">
              <div>
                <span
                  class="text-h3 font-weight-black"
                  v-text="avg || '—'"
                ></span>
                <strong v-if="avg">POPULARIDAD</strong>
              </div>
            </v-row>
          </v-card-title>

          <v-sheet color="transparent">
            <v-sparkline
              :key="String(avg)"
              :smooth="16"
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :value="heartbeats"
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" color="grey lighten-4" max-width="600" max-height="600">
          <v-card-title>

            <v-row align="start">
              <div>
                <span
                  class="text-h3 font-weight-black"
                  v-text="avg || '—'"
                ></span>
                <strong v-if="avg">OFERTAS</strong>
              </div>
            </v-row>
          </v-card-title>

          <v-sheet color="transparent">
            <v-sparkline
              :key="String(avg)"
              :smooth="16"
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :value="heartbeats"
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
        </v-card>
      </v-col>
       <v-col>
        <v-card
          class="mx-auto text-center"
          color="purple darken-1"
          dark
          max-width="600"
        >
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">Ventas de Samsung's</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const exhale = ms =>
    new Promise(resolve => setTimeout(resolve, ms))
export default {

  name: "estadisticas",
  
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],

  }),

  computed: {
      avg () {
        const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
        const length = this.heartbeats.length

        if (!sum && !length) return 0

        return Math.ceil(sum / length)
      },
    },

    created () {
      this.takePulse(false)
    },

    methods: {
      heartbeat () {
        return Math.ceil(Math.random() * (120 - 80) + 80)
      },
      async takePulse (inhale = true) {
        this.checking = true

        inhale && await exhale(1000)

        this.heartbeats = Array.from({ length: 20 }, this.heartbeat)

        this.checking = false
      },
    },
};
</script>
