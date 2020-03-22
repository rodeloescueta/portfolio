<template>
  <v-container fluid pa-0>
    <v-layout row wrap>
      <v-col class="pa-0 ma-0" cols="12">
        <v-img aspect-ratio="2.5"
        contain
        class="mr-5 ml-5"
        :src="require('@/assets/tempPic1.jpg')"></v-img>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{

    }
  }
}
</script>
