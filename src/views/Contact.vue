<template>
    <v-container fluid>
            <v-row>
                <v-col cols="12"  md="8">
                    <p class="headline-1">CONTACT US!</p>
                    <p>Sunt minim laborum adipisicing pariatur ea aliqua aute mollit dolore sint elit Lorem irure.</p>
                    <v-text-field dense outlined v-model="name" label="Name"></v-text-field>
                    <v-text-field dense outlined v-model="email" label="Email"></v-text-field>
                    <v-textarea dense outlined v-model="message" label="Message"></v-textarea>
                    <v-layout>
                        <v-row>
                            <v-col class="pt-0" cols="6">
                                <v-card width="170">
                                    <v-checkbox class="pt-4"
                                    v-model="checkbox"
                                    label="I'm not a robot"
                                    ></v-checkbox>
                                </v-card>
                                
                            </v-col>
                            <v-col cols="6">
                                <v-btn height="65" width="170">Send</v-btn>
                            </v-col>
                        </v-row>
                    </v-layout>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card color="orange lighten-5">
                        <v-layout class="pl-3 pt-8 pb-8">
                            <v-row class="pt-8 pb-8">
                                <v-col cols="4">
                                    <v-btn color="orange accent-2" fab><v-icon>mdi-mail</v-icon></v-btn> <span  style="color: #69F0AE;">EMAIL</span>
                                </v-col>
                                <v-col class="pt-6" cols="8">
                                    <p style="color: #69F0AE;">cxcxcxtest@gmail.com</p>
                                </v-col>
                                <v-col cols="4">
                                    <v-btn color="orange accent-2" fab><v-icon>mdi-map-marker</v-icon></v-btn> <span  style="color: #69F0AE;">ADDRESS</span>
                                </v-col>
                                <v-col class="pt-6" cols="8">
                                    <p style="color: #69F0AE;">Gen. Trias Cavite Dream Homes Subd.</p>
                                </v-col>
                                <v-col cols="4">
                                    <v-btn color="orange accent-2" fab><v-icon>mdi-phone</v-icon></v-btn> <span  style="color: #69F0AE;">PHONE</span>
                                </v-col>
                                <v-col class="pt-6" cols="8">
                                    <p style="color: #69F0AE;">09506519614</p>
                                </v-col>
                            </v-row>
                        </v-layout>
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>
<script>
export default{
    data(){
        return{
            name: '',
            email: '',
            message: '',
            checkbox: false,
            robot: true
        }
    },
    watch:{
        checkbox(){
            this.robot = false
        }
    }
}
</script>