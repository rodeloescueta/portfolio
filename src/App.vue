<template>
  <v-app id="inspire">
    <v-navigation-drawer
      width="200"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-card
            v-if="item.heading"
            :key="item.heading"
            align="center"
            :to="item.to"
            @click="title = item.text"
            elevation="1"
          >
            <v-col cols="12" class="pb-0 text-center">
              <span class="display-1 font-weight-thin" style="color: #008B8B;">{{item.text}}</span>
            </v-col>
            <v-col cols="12" class="pt-0 text-center">
              <span class="body-2 font-weight-light" style="color: #708090;">{{item.heading}}</span>
            </v-col>
          </v-card>
          
          <v-list-item
            v-else
            :key="item.text"
            link
            :to="item.to"
            @click="title = item.text"
          >
            <v-list-item-action>
              <v-icon :color="item.color" large>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    
    <v-content class="main">
      <v-toolbar v-if="title != 'Rodelo Escueta'" height="120" color="#008B8B" dark>
        <span class="font-weight-thin display-3">{{title}}</span>
      </v-toolbar>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      title: '',
      dialog: false,
      drawer: null,
      items: [
        { text: 'Rodelo Escueta', heading: 'Full Stack Developer & Serverless Enthusiast', to: '/'},
        { icon: 'mdi-account', text: 'About', to: 'about', color: '#00E676' },
        { icon: 'mdi-trending-up', text: 'Experience', to: 'experience', color: 'deep-orange accent-3' },
        { icon: 'mdi-poll', text: 'Skills', to: 'skills', color: 'light-blue accent-3' },
        { icon: 'mdi-apps', text: 'Projects', to: 'projects', color: 'indigo accent-3' },
        { icon: 'mdi-email', text: 'Contact', to: 'contact', color: 'amber accent-3' },
      ],
    }),
  }
</script>

<style>
.main{
    background: url('~@/assets/bg.jpg') repeat;
    /* background-size: cover; */
}

</style>