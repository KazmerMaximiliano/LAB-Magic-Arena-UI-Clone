<template>
  <div>
      <v-row justify="center">
          <v-col cols="auto">
              <v-img src="../assets/img/felipe.png" width="500"></v-img>
              <h1 class="notFoundTitle">¿Dónde estoy?</h1>
          </v-col>
          
      </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@font-face {
    font-family: "BelerenSmallBold";
    src: url("../assets/fonts/BelerenSmallCapsBold.woff") format("woff");
}

.notFoundTitle {
    font-family: 'BelerenSmallBold';
    padding: 16px 32px 0px 0px;
    text-align: center; 
    color: #fff;
}

</style>