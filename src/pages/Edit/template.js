import blog from '@/api/blog'

export default {
    data() {
        return {
            blogId:null,
            title: '',
            description: '',
            content: '',
            value: 'false',
            titleNumber: '30',
            descNumber: '30',
            titleLimit: '',
            descLimit: ''
        }
    },
    created(){
        this.blogId = this.$route.params.blogId
        blog.getDetail({blogId:this.blogId})
            .then(res=>{
                this.title = res.data.title
                this.description = res.data.description
                this.content = res.data.content
            })

    },
    methods: {
        onCommit() {
            blog.updateBlog({blogId:this.blogId},{title: this.title, description: this.description, content: this.content,anIndex:this.atIndex})
                .then(res  => {
                    this.$message.success(res.msg)
                    this.$router.push({path:`/detail/${res.data.id}`})
                })
        },
    },
}

// updateBlog({blogId},{title,content,description,atIndex}){
//     return request(URL.UPDATE.replace(':blogId',blogId),'PATCH',{title,content,description,atIndex})
// },
