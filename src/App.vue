<template>
  <v-app id="inspire">
    <v-navigation-drawer
      width="200"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <v-card
            v-if="!isMobileA"
            align="center"
            to="/"
            elevation="1"
          >
            <v-col cols="12" class="pb-0 text-center">
              <span class="display-1 font-weight-light" style="color: #008B8B;">Rodelo Escueta</span>
            </v-col>
            <v-col cols="12" class="pt-0 text-center">
              <span class="body-2 font-weight-regular" style="color: #708090;">Full Stack Developer & Serverless Enthusiast</span>
            </v-col>
          </v-card>
        <template v-for="item in items">
          
          
          <v-list-item
            :key="item.text"
            link
            :to="item.to"
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
    <v-app-bar v-if="$vuetify.breakpoint.smAndDown"
      app
      clipped-left flat @click="home()"
    >
      <v-app-bar-nav-icon color="#008B8B" x-large @click.stop="drawer = !drawer"/>
      <v-spacer/>
        <div  class="text-center" >
            <h5 class="title font-weight-regular" style="color: #008B8B;">{{`Rodelo Escueta`}}</h5><small>Full Stack Developer & Serverless Enthusiast</small>
        </div>
      <v-spacer/>
    </v-app-bar>
    <v-content class="main">
      <v-toolbar v-if="title != 'Delo'" :height="sizesA.headersHeight" color="#008B8B" dark>
        <span :class="[isMobileA? 'display-1': 'display-3', 'font-weight-thin']">{{title}}</span>
      </v-toolbar>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        // { text: 'Rodelo Escueta', heading: 'Full Stack Developer & Serverless Enthusiast', to: '/'},
        { icon: 'mdi-account', text: 'About', to: 'about', color: '#00E676' },
        { icon: 'mdi-trending-up', text: 'Experience', to: 'experience', color: 'deep-orange accent-3' },
        { icon: 'mdi-poll', text: 'Skills', to: 'skills', color: 'light-blue accent-3' },
        { icon: 'mdi-apps', text: 'Projects', to: 'projects', color: 'indigo accent-3' },
        { icon: 'mdi-email', text: 'Contact', to: 'contact', color: 'amber accent-3' },
      ],
      quote: 'Don\'t make excuses, find a way!'
    }),
    methods:{
      home(){
        this.$router.push('/')
      }
    },
    computed: {
      title(){
        return this.$route.name
      }
    },
    mounted(){
      
      // console.log(this.$route.name)
      // console.log(this.$vuetify.breakpoint)
      // console.log(this.$vuetify.breakpoint.smAndDown)
    }
  }
</script>

<style>
.main{
    background: url('~@/assets/bg.jpg') repeat;
}

</style>