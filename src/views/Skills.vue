<template>
    <v-container>
        <!-- isMobile: {{isMobile}} sizes.skillsIconWidth: {{sizes.skillsIconWidth}} -->
        <template v-for="(skill, i) in skills">
            <v-container :key="i+'s'">
                <v-card height="250">
                    <v-row>
                        <v-col class="pt-0" cols="12">
                            <v-card-text>
                                <p class="display-1 text--primary">
                                    {{skill.text}}
                                </p>
                            </v-card-text>
                            <v-divider></v-divider>
                        </v-col>
                        <template  v-for="(item, i) in skill.data">
                            <v-col class="pl-4" cols="3" :key="i+'h'">
                                <v-img :height="sizes.skillsIconHeight" :width="sizes.skillsIconWidth" :aspect-ratio="1.3" :src="item.src">
                                </v-img>
                                <div :class="[isMobile? 'overline': '']">{{item.text}}</div>
                            </v-col>
                        </template>
                        
                    </v-row>
                </v-card>
            </v-container>
            
        </template>
        
    </v-container>
</template>

<script>
export default{
    mounted(){
        if(this.isMobile){
            this.sizes.skillsIconHeight = 55
            this.sizes.skillsIconWidth = 55
        }
    },
    data(){
        return{
            sizes: {
                skillsIconHeight: 100,
                skillsIconWidth: 100,
            },
            skills: [
                {text: 'Front End', data: 
                    [
                        {src: './myicon/html.png', text: 'HTML'},
                        {src: './myicon/css.png', text: 'CSS'},
                        {src: './myicon/js.png', text: 'Javascript'}  
                    ]
                },

                {text: 'Javascript Frameworks', data: 
                    [
                        {src: './myicon/vue.png', text: 'Vue.js'},
                        {src: './myicon/nodejs.png', text: 'Node.js'},
                        {src: './myicon/expressjs.png', text: 'Express.js'}  
                    ]
                },

                {text: 'Component Library', data: 
                    [
                        {src: './myicon/bootstrap.png', text: 'Bootstrap'},
                        {src: './myicon/vuetify.png', text: 'Vuetify'} 
                    ]
                },

                {text: 'Database', data: 
                    [
                        {src: './myicon/mysql.png', text: 'MySQL'},
                        {src: './myicon/couchdb.png', text: 'Couchdb'},
                        {src: './myicon/dynamodb.png', text: 'Dynamodb'} 
                    ]
                },

                {text: 'AWS Serverless Services', data: 
                    [
                        {src: './myicon/s3.png', text: 'S3'},
                        {src: './myicon/lambda.png', text: 'Lambda'},
                        {src: './myicon/apigateway.png', text: 'Api Gateway'},
                        {src: './myicon/cognito.png', text: 'Cognito'} 
                    ]
                },

                {text: 'Others', data: 
                    [
                        {src: './myicon/webpack.png', text: 'Webpack'},
                        {src: './myicon/github.png', text: 'Github'},
                        {src: './myicon/gitlab.png', text: 'Gitlab'} 
                    ]
                },

            ]
        }
    }
}
</script>

