export default {
    data(){
        return{
            isMobileA: false,
            sizesA: {
                skillsIconHeight: 100,
                skillsIconWidth: 100,
                headersHeight: 100,
            },
        }
    },
    methods: {
        alert(val){
            alert(val)
        },
        onResize () {
            this.isMobileA = window.innerWidth < 760
          },
    },
    beforeDestroy () {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize, { passive: true })
        }
    },
    mounted(){
        this.onResize()
        window.addEventListener('resize', this.onResize, { passive: true })
        if(this.isMobileA){
            this.sizesA.skillsIconHeight = 55
            this.sizesA.skillsIconWidth = 55
        }

        if(this.isMobileA){
            this.sizesA.headersHeight = 70
        }
    },
    created(){
        // console.log('a')
        // if (sessionStorage.redirect) {
        //     const redirect = sessionStorage.redirect
        //     delete sessionStorage.redirect
        //     this.$router.push(redirect)
        // }
        
          
    
    }
}