<template>
    <v-container fluid pa-0>
        <header-title/>
    </v-container>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle.vue'

export default{
    data(){
        return{
            skills: [
                {}
            ]
        }
    },
    components: {
        HeaderTitle
    }
}
</script>