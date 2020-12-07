<template>
  <div>
    <v-row class="arena-menu">
        <v-col cols="12" md="8" class="pa-0">
            <div class="menu-item">
                <v-row justify="end" align="center" class="arena-top-bar" v-if="$vuetify.breakpoint.smAndDown">
                    <h2>After Wiki</h2>
                    <div class="img-container">
                        <v-img src="../assets/img/logo.png" ></v-img>
                    </div>
                </v-row>
                <div class="menu-left" @click="$router.push('/ematicones')">
                    <v-card class="arena-card elevation-0" >
                        <v-img src="../assets/img/ematicones.png" class="white--text align-end">
                            <v-card-title class="beleren">Ematicones</v-card-title>
                            <v-card-subtitle class="white--text" v-if="$vuetify.breakpoint.mdAndUp">Conoce todo sobres los emoticones que usamos en el canal</v-card-subtitle>
                        </v-img>
                    </v-card>
                </div>
            </div>
        </v-col>

        <v-col cols="12" md="4" class="pa-0">
            <div class="menu-item right">
                <v-row justify="end" align="center" class="arena-top-bar" v-if="$vuetify.breakpoint.mdAndUp">
                    <h2>After Wiki</h2>
                    <div class="img-container">
                        <v-img src="../assets/img/logo.png" ></v-img>
                    </div>
                </v-row>
                <div class="menu-right" @click="$router.push('/cartas')">
                    <v-card class="arena-card elevation-0">
                        <v-img src="../assets/img/cards.png" class="white--text align-end">
                            <v-card-title class="beleren">Cartas y mazos</v-card-title>
                            <v-card-subtitle class="white--text" v-if="$vuetify.breakpoint.mdAndUp">Conoce todas las cartas y mazos del canal</v-card-subtitle>
                        </v-img>
                    </v-card>
                </div>
                <div class="menu-right" @click="$router.push('/terminos')">
                    <v-card class="arena-card elevation-0">
                        <v-img src="../assets/img/terms.png" class="white--text align-end">
                            <v-card-title class="beleren">Términos comunes</v-card-title>
                            <v-card-subtitle class="white--text" v-if="$vuetify.breakpoint.mdAndUp">Aprende sobre los términos más usados al jugar</v-card-subtitle>
                        </v-img>
                    </v-card>
                </div>
            </div>
        </v-col>
    </v-row>
  </div>
</template>
