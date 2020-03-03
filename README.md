# template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


``
<template>
    <v-container class="background">
        <v-card height="200">
            <v-row>
                <v-col class="pt-0" cols="12">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Front End
                        </p>
                    </v-card-text>
                </v-col>
                <!-- <img :src="hIcon" class = "mr-3" > -->
                <v-col class="pl-4" cols="2" v-for="(item, i) in frontEnd" :key="i+'h'">
                    <v-img :height="35" :width="35" :aspect-ratio="1.3" :src="item">
                        
                    </v-img>
                </v-col>
            </v-row>
            
        </v-card>
    </v-container>
</template>

<script>
export default{
    data(){
        return{
            frontEnd: [
                './img/html.png',// public/...
                './img/css.png'
            ],
        }
    }
}
</script>

<style>
.background{
    background-image: url('~@/assets/logo.svg');
    background-size: cover;
}

</style>
``
