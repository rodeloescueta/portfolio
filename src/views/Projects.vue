<template>
  <v-container fluid pa-6>
    <v-row>
      <template v-for="(p, i) in projects">
        <v-col md="4" sm="12" :key="i">
          <v-card max-width="344" class="mx-auto">
            <v-toolbar :color="p.color">
              <v-list-item>
                <v-list-item-avatar color="grey">
                  <v-img :src="p.logo"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">{{
                    p.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle
                    >@{{ p.projectBy }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-toolbar>
            <v-img :src="p.imageUrl" height="194"></v-img>
            <v-card-text>
              <template v-for="(chip, j) in p.accomplishments">
                <v-chip small class="ma-1" :key="j">
                  {{ chip }}
                </v-chip>
              </template>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="goTo(p.websiteUrl)" text :color="p.color" block
                >Visit Website</v-btn
              >
              <!-- <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>-->
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
// http://plans.hrd-s.com/
export default {
  data() {
    return {
      projects: [
        {
          name: "Company Notice",
          logo:
            "https://lh3.googleusercontent.com/I2SmSD1cXk2_efU4Ysv0ZJ7g0A859m3GABFpvU1V1kuboTsKKFGYODHKv2_U16SF0uMialUc1-63Ar6kZX9wQR_ryDOQdLlZK_EaFKBT4kFq-o5M1UA0wE6Ae_YnbgknMezM5noR",
          imageUrl:
            "https://lh3.googleusercontent.com/uCzbfVI6VurfpWbgUYHfJYcmhqlPxCHjMRXN_uwojvuvzW4v5aNJcWiWMNbv9XfBx_z-i1028p820A7I0MR0dyYaA6M4yFlRYoQ9gxJMkf13AWIIwGlrmT4yHn0DEcrdNQLNOleQ",
          projectBy: "HRD Ichijo",
          projectInfo:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          websiteUrl:
            "http://notice.hrd-s.com.s3-website.us-east-2.amazonaws.com/",
          color: "light-green lighten-3",
          accomplishments: [
            "Vue",
            "Node",
            "Express",
            "Webpack",
            "AWS Lambda",
            "AWS DynamoDB",
            "AWS SNS"
          ]
        },

        {
          name: "Company Plans",
          logo:
            "https://lh3.googleusercontent.com/I2SmSD1cXk2_efU4Ysv0ZJ7g0A859m3GABFpvU1V1kuboTsKKFGYODHKv2_U16SF0uMialUc1-63Ar6kZX9wQR_ryDOQdLlZK_EaFKBT4kFq-o5M1UA0wE6Ae_YnbgknMezM5noR",
          imageUrl:
            "https://lh3.googleusercontent.com/_GhdhYLa1q9qHyfhGI0cBDi1ykzflzTbqjd9FHzAq3E1ggwPdUcb1SoImBVVYTSJ-prNdssEGCzfFnPy7x98aBSp3xKoQlX2PZBhUebu2QmLDYFT9t2G7UWp-6xyDxNMldmh3W_N0Q",
          projectBy: "HRD Ichijo",
          projectInfo:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          websiteUrl: "http://plans.hrd-s.com/",
          color: "red lighten-3",
          accomplishments: [
            "Vue",
            "Vuex",
            "Node",
            "Express",
            "Webpack",
            "AWS Lambda",
            "AWS DynamoDB"
          ]
        },

        {
          name: "Blank Project",
          logo:
            "https://lh3.googleusercontent.com/I2SmSD1cXk2_efU4Ysv0ZJ7g0A859m3GABFpvU1V1kuboTsKKFGYODHKv2_U16SF0uMialUc1-63Ar6kZX9wQR_ryDOQdLlZK_EaFKBT4kFq-o5M1UA0wE6Ae_YnbgknMezM5noR",
          imageUrl:
            "https://lh3.googleusercontent.com/_GhdhYLa1q9qHyfhGI0cBDi1ykzflzTbqjd9FHzAq3E1ggwPdUcb1SoImBVVYTSJ-prNdssEGCzfFnPy7x98aBSp3xKoQlX2PZBhUebu2QmLDYFT9t2G7UWp-6xyDxNMldmh3W_N0Q",
          projectBy: "HRD Ichijo",
          projectInfo:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          websiteUrl: "http://plans.hrd-s.com/",
          color: "blue lighten-3",
          accomplishments: [
            "Vue",
            "Vuex",
            "Node",
            "Express",
            "Webpack",
            "AWS Lambda",
            "AWS DynamoDB"
          ]
        }
      ]
    };
  }
};
</script>
