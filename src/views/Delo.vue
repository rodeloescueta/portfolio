<template>
  <v-container pa-0 fluid>
    <v-row>
        <v-col cols="9">
          asdf
        </v-col>
        <v-col cols="3">
          {{test}}asdf
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return{
      test: 'asdf'
    }
  },
  
}
</script>
