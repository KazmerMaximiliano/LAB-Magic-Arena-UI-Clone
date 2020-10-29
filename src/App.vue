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

<style lang="scss">

@font-face {
  font-family: "BelerenSmallBold";
  src: url("./assets/fonts/BelerenSmallCapsBold.woff") format("woff");
}

.beleren {
    font-family: 'BelerenSmallBold';
    font-weight: 400;
}


.arena-bar {
    
    background: #1d1f20;
    border-bottom: 2px solid #3b3e42 !important;
    background: linear-gradient(to bottom,  #1d1f20 0%,#343639 100%); 
    box-shadow: 0px 10px 10px -2px rgba(255,255,255,0.2) !important;

    .v-toolbar__content {
        padding: 0px;
        align-items: flex-start;
        .left-btn, .right-btn {
            height: 72px;
            width: 175px;
            padding: 16px;
            display: flex;
            align-items: center;
            background: #1d1f20;
            border-bottom: 2px solid #3b3e42 !important;
            background: linear-gradient(to bottom,  #1d1f20 0%,#343639 100%); 
            
        }

        .left-btn {
            justify-content: flex-end;
            border-radius: 0px 0px 16px 0px;
            border-right: 2px solid #3b3e42 !important;
            box-shadow: -5px 10px 10px -2px rgba(255,255,255,0.2) !important;
        }

        .right-btn {
            justify-content: flex-start;
            border-radius: 0px 0px 0px 16px;
            border-left: 2px solid #3b3e42 !important;
            box-shadow: 5px 10px 10px -2px rgba(255,255,255,0.2) !important;
        }
    }

    
}

.arena-background {
    height: 100vh;
    background-color: #000;
    background-image: url('./assets/img/background.png');
    background-size: fill;
    .arena-main {
        height: 100vh;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, .8);

    }
}

body::-webkit-scrollbar {
    width: 5px;
    background-color: #000;
}
 
body::-webkit-scrollbar-thumb {
    background-color: #E0BC2A;
}

</style>
