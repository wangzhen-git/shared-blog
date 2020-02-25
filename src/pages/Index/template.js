import blog from '@/api/blog.js'
// 为首页轮播图引入的图片链接
import juejin from '@/assets/imgs/blog.jpg'
import github from '@/assets/imgs/github.jpg'

export default {
    data(){
        return{
            // 所有博客数据
            blogs:[],
            // 博客总量
            total:0,
            // 当前所在页面
            page:1,
            carouselItems:[
                {src:'https://juejin.im/user/577ed755a341310061abc214',img:juejin},
                {src:'https://github.com/sunnywanggit',img:github}
            ]
        }
    },
    created(){
        this.page = parseInt(this.$route.query.page ) || 1
        // console.log(blog);
        blog.getIndexBlogs({page:this.page})
            .then(res=>{
                // console.log(res);
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
            })
    },
    methods:{
        onPageChange(newPage){
            console.log(newPage);
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