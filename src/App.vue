<template>
    <v-app>
        <!-- <v-app-bar class="arena-bar" dark dense app>
            <div class="left-btn">Inicio</div>
            <v-btn flat color="transparent elevation-0">asd</v-btn>
            <v-spacer></v-spacer>
            <div class="right-btn">Inicio</div>
        </v-app-bar> -->

        <div class="arena-background">
            <div class="arena-main">
                <v-container>
                    <router-view />
                </v-container>
            </div>
        </div>
    </v-app>
</template>
