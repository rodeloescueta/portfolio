<template>
    <v-container fluid pa-0>
        <v-container>
            <v-row justify="center">
                <template v-for="(data, i) in exData">
                    <v-col :cols="isMobileA? 11: 9" :key="i">
                        <v-card>
                        <v-row class="pa-0">
                            <v-col class="pl-6 pt-0 pb-0" :cols="isMobileA? 6: 3">
                                <v-img height="90" width="120" contain :src="data.src"/>
                            </v-col>
                            <v-col class="pt-8 pb-0" justify="center" :cols="isMobileA? 6: 3">
                                    <v-btn text>
                                        <a :href="data.href" target="_blank"><span :class="isMobileA? 'title':'headline'">{{data.companyName}}</span></a>
                                    </v-btn>
                            </v-col>
                            <v-col :class="[isMobileA? '': 'pt-8', 'text-center pb-0']" :cols="isMobileA? 12: 6">
                                <span style="color: #8D6E63;" :class="isMobileA? 'subtitle-1':'title'">{{data.position}}</span>
                            </v-col>
                        </v-row>
                            <v-divider/>
                            <v-card-text>
                                    <p class="font-italic font-weight-bold">{{data.aboutCompany}}</p>
                                    <v-list class="pt-0" dense>
                                        <v-subheader>
                                            <span class="title">Responsibilities</span>
                                        </v-subheader>
                                        
                                        <v-list-item dense v-for="(res, i) in data.responsibilities" :key="i+'a'">
                                            <v-list-item-icon>
                                                <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                {{res}}
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>

                                    <v-list class="pt-0" dense>
                                        <v-subheader>
                                            <span class="title">Accomplishment</span>
                                        </v-subheader>
                                        
                                        <v-list-item dense v-for="(acc, i) in data.accomplishments" :key="i+'a'">
                                            <v-list-item-icon>
                                                <v-icon x-small>mdi-checkbox-blank-circle</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                {{acc}}
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                            </v-card-text>

                            <v-card-text>
                                <span>{{data.dateFromTo}}</span>
                            </v-card-text>
                        </v-card>
                        
                    </v-col>
                </template>
                
            </v-row>
        </v-container>
    </v-container>
</template>

<script>

export default{
    data(){
        return{
            exData: [
                { 
                    src: require('@/assets/logo_ichijo.png'), 
                    href: 'http://hrd-s.com/',
                    companyName: 'ICHIJO HRD',
                    position: 'Fullstack Web Developer',
                    dateFromTo: 'Jan 2010 - Present | Philippines, Cavite',
                    aboutCompany: 'Utilizing our management consulting services to Japanese home builders and well as know-how of product development, we deliver products with superior cost and offer warm-hearted services.',
                    responsibilities: [
                        'Manages and leads a team of web developer',
                        'Trainor of system committee member',
                        'Delegating tasks to team members',
                        'Develop web application for urgent and special projects',
                        'Mentoring, providing general guidance and puts work into the foundation and early stages of project development',
                        'Make sure that the development team and technologies being selected are aligned with the business goals and vision of the company'
                    ],
                    accomplishments: [
                        'Make significant improvement to the organization like:',
                        'Introduce Vue(JS Framework) to the organization',
                        'Introduce CEVN (couchdb, express, node, vue) stack to the inhouse developer',
                        'Introduce AWS serverless platform (lambda, s3, api-gateway and dynamodb)'
                    ]
                }
            ]
        }
    },
    mounted(){
        
        // console.log(this.$router.currentRoute.path)
    }
}
</script>