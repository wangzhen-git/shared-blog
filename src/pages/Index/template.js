import blog from '@/api/blog.js'
import juejin from '@/assets/imgs/blog.jpg'
import github from '@/assets/imgs/github.jpg'

export default {
    data(){
        return{
            blogs:[],
            total:0,
            page:1,
            carouselItems:[
                {src:'https://juejin.im/user/577ed755a341310061abc214',img:juejin},
                {src:'https://github.com/sunnywanggit',img:github}
            ]
        }
    },
    created(){
        this.page = parseInt(this.$route.query.page ) || 1
        blog.getIndexBlogs({page:this.page})
            .then(res=>{
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
            })

    },
    methods:{
        onPageChange(newPage){
            blog.getIndexBlogs({page:newPage})
                .then(res=>{
                    this.blogs = res.data
                    this.total = res.total
                    this.page = res.page
                    this.$router.push({path:'/',query:{page:newPage}})
                })

        }
    }
}