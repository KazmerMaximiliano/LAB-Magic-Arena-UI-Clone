<template>
    <v-app>
        <!-- APPBAR -->
        <v-app-bar color="#1f201f" class="appbar" dense dark app v-if="$route.name != 'home'">
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="appDrawer = true;"></v-app-bar-nav-icon>
            <div class="logo-container hidden-sm-and-down" @click="$router.push('/');">
                <v-img src="./assets/img/logo.png"></v-img>
            </div>
            <div class="logo-text hidden-sm-and-down" @click="$router.push('/');">After Wiki</div>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text  to="/ematicones">
                    Ematicones
                </v-btn>
                <v-btn text  to="/cartas">
                    Cartas y Mazos
                </v-btn>
                <v-btn text  to="/terminos">
                    Terminos Comunes
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <!-- NAVIGATION DRAWER -->
        <v-navigation-drawer
            v-model="appDrawer"
            absolute
            temporary
            app
            dark
            color="#1f201f"
            class="beleren"
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
                <v-list-item to="/" link>
                    <v-list-item-content>
                        <v-list-item-title>Inicio</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
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
                        <v-list-item-title>Terminos Comunes</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- MAIN APP -->
        <div class="arena-background">
            <div class="arena-main">
                <v-container>
                    <router-view />
                </v-container>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        appDrawer: false
    }),
}
</script>