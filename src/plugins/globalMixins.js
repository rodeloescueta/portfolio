export default {
    data(){
        return{
            isMobile: false,
        }
    },
    methods: {
        alert(val){
            alert(val)
        },
        onResize () {
            this.isMobile = window.innerWidth < 760
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
    }
}