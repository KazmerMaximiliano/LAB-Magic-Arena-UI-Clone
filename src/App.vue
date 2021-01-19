<template>
    <v-app>
        <!-- APPBAR -->
        <v-app-bar
            color="#1f201f"
            class="appbar"
            dense
            dark
            app
            v-if="$route.name != 'home'"
        >
            <div class="left-items" @click="$vuetify.breakpoint.xs ? appDrawer = true : $router.push('/');">
                <div class="logo-item hidden-xs-only">
                    <v-img src="./assets/img/logo.png"></v-img>
                    
                </div>
                <div class="name-item">AfterWiki</div>
                <v-icon class="hidden-sm-and-up">fas fa-bars</v-icon>
            </div>
            <div class="main-items hidden-xs-only">
                <v-btn to="/ematicones" active-class="main-active">Ematicones</v-btn>
                <v-btn to="/cartas" active-class="main-active">
                    {{ $vuetify.breakpoint.smAndDown ? 'Cartas' : 'Cartas y Mazos' }}
                </v-btn>
                <v-btn to="/terminos" active-class="main-active">
                    Diccionario
                </v-btn>
            </div>
            <v-spacer></v-spacer>
            <div class="right-items hidden-xs-only">
                <v-btn icon ><v-icon>fas fa-question-circle</v-icon></v-btn>
                <!-- <v-btn icon><v-icon>fas fa-gamepad</v-icon></v-btn> -->
            </div>
        </v-app-bar>

        <!-- NAVIGATION DRAWER -->
        <v-navigation-drawer
            v-model="appDrawer"
            absolute
            temporary
            app
            dark
            color="#1f201f"
            class="app-drawer"
        >
            <v-row class="drawer-title ma-0">
                <v-col cols="auto" align-self="center" class="drawer-logo">
                    <v-img src="./assets/img/logo.png"></v-img>
                </v-col>
                <v-col cols="auto" class="drawer-text">
                    After Wiki
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-list>
                <v-list-item to="/ematicones" link>
                    <v-list-item-content>
                        <v-list-item-title>Ematicones</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/cartas" link>
                    <v-list-item-content>
                        <v-list-item-title>Cartas y Mazos</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/terminos" link>
                    <v-list-item-content>
                        <v-list-item-title>Diccionario</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <v-row>
                    <v-btn icon class="ml-5 mr-2"><v-icon>fas fa-question-circle</v-icon></v-btn>
                    <v-btn icon class="ml-2"><v-icon>fas fa-gamepad</v-icon></v-btn>
                </v-row>
            </template>
        </v-navigation-drawer>

        <!-- MAIN APP -->
        <div class="arena-background">
            <div class="arena-background-transparency">
                <router-view />
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        appDrawer: false,
    }),
};
</script>
