<template>
    <v-container fluid pa-0>
        <v-toolbar height="120" color="#008B8B" dark>
            <span class="font-weight-thin display-3">{{title}}</span>
        </v-toolbar>
    </v-container>

</template>
<script>
export default{
    data(){
        return{
            title: 'header title'
        }
    }
}
</script>