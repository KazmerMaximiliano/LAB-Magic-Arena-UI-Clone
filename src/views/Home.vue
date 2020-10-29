<template>
  <div>
    <v-row class="arena-menu">
        <v-col cols="8" class="pa-0">
            <div class="menu-item">
                <div class="menu-left">
                    <v-card class="arena-card elevation-0" >
                        <v-img src="../assets/img/ematicones.png" class="white--text align-end">
                            <v-card-title class="beleren">Ematicones</v-card-title>
                            <v-card-subtitle class="white--text">Conoce todo sobres los emoticones que usamos en el canal</v-card-subtitle>
                        </v-img>
                    </v-card>
                </div>
            </div>
           
        </v-col>
        <v-col cols="4" class="pa-0">
            <div class="menu-item right">
                <v-row justify="end" align="center" class="arena-top-bar">
                    <h2>After Wiki</h2>
                    <div class="img-container">
                        <v-img src="../assets/img/logo.png" ></v-img>
                    </div>
                </v-row>
                <div class="menu-right">
                    <v-card class="arena-card">
                        <v-img src="../assets/img/cards.png" class="white--text align-end">
                            <v-card-title class="beleren">Cartas y mazos</v-card-title>
                            <v-card-subtitle class="white--text">Conoce todas las cartas y mazos del canal</v-card-subtitle>
                        </v-img>
                    </v-card>
                </div>
                <div class="menu-right">
                    <v-card class="arena-card">
                        <v-img src="../assets/img/terms.png" class="white--text align-end">
                            <v-card-title class="beleren">Términos comunes</v-card-title>
                            <v-card-subtitle class="white--text">Aprende sobre los términos más usados al jugar</v-card-subtitle>
                        </v-img>
                    </v-card>
                </div>
            </div>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

    

}
</script>


<style lang="scss">




.arena-menu {
    height: 75vh;

    .menu-item {
        cursor: pointer;
        height: 76vh;

        &.right {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        .menu-left {
            height: inherit;
            padding: 16px 8px 16px 16px;
        }

        .menu-right {
            height: 36vh;
            padding: 8px 16px 8px 16px;
            &:first-child {
                padding-top: 16px;
            }
            &:last-child {
                padding-bottom: 16px;
            }
        }

        .arena-top-bar {
            padding-right: 32px;

            h2 {
                font-family: "BelerenSmallBold";
                color: #fff;
                padding-right: 16px;
            }

            .img-container {
                width: 50px;
            }
        }
        
        .arena-card {
            height: 100%;
            background-color: transparent !important;

            .v-image {
                height: inherit;
                
                .v-responsive__content {
                    background-color: rgba(0, 0, 0, .8);
                }

                .v-image__image {
                    transition: all ease .2s !important;
                }

            }
            &:hover {
                -webkit-filter: drop-shadow(1px 1px 0 #fff)
                                drop-shadow(-1px -1px 0 #fff);
                filter: drop-shadow(1px 1px 0 #fff) 
                        drop-shadow(-1px -1px 0 #fff);

                .v-image {
                    .v-image__image {
                        background-position-x: right !important;
                    }
                }

            }
        }
    }

    
}

</style>
