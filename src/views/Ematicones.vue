<template>
    <div class="ematicones">
         <v-row justify="center">
            <v-col 
                cols="auto"
                class="pa-0"
                v-for="(emoji, i) in ematicones" 
                :key="i"
            >
                <v-row justify="center">
                    <flip-card>
                        <template slot="front">
                            <div class="front-card">
                                <div class="top-title">
                                    {{ emoji.name }}
                                </div>
                                <div class="main-content">
                                   <div class="img-container">
                                       <v-img :src="require(`@/assets/img/ematicones/${emoji.image}`)"></v-img>
                                   </div>
                                </div>
                                <div class="bottom-container">
                                    <div class="bottom-circle"></div>
                                    <div class="bottom-field"></div>
                                    <div class="bottom-border-fix"></div>
                                    <div class="bottom-text">{{ emoji.code }}</div>
                                </div>
                            </div>
                        </template>
                        <template slot="back">
                            <div class="back-card">
                                {{ emoji.description }}
                            </div>
                        </template>
                    </flip-card>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import FlipCard from '../components/FlipCard';
import ematicones from '../assets/json/ematicones.json';

export default {
    data: () => ({
        ematicones: ematicones
    }),

    components: {
        "flip-card": FlipCard
    },

}
</script>

<style>

</style>