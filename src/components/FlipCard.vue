<template>
    <v-flip 
        :flipped="flip"
        @mouseover="flip = true"
        @mouseleave="flip = false"
        class="flip-card"
        height="270px" width="200px"
    >
        <div slot="front">
            <v-card height="270px" width="200px">
                <v-card-text class="pa-0">
                    <slot name="front"></slot>
                </v-card-text>
            </v-card>   
        </div>
        <div slot="back">
            <v-card height="270px" width="200px">
                <v-card-text class="pa-0">
                    <slot name="back"></slot>
                </v-card-text>
            </v-card>   
        </div>
    </v-flip>
</template>

<script>
export default {
    data: () => ({
        flip: false,
    }),

}
</script>

<style>

</style>