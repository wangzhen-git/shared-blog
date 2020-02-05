import blog from '@/api/blog'

export default {
    data() {
        return {
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
    methods: {
        onCreate() {
            blog.createBlog({title: this.title, description: this.description, content: this.content,anIndex:this.atIndex})
                .then(res  => {
                    this.$message.success(res.msg)
                    this.$router.push({path:`/detail/${res.data.id}`})
                })
        },
    },
    computed: {
        countTitleNumber: function () {
            this.titleNumber = 30 - this.title.length
            if (this.titleNumber <= 0) {
                this.titleNumber = 0
                this.titleLimit = true
            } else {
                this.titleLimit = false
            }
            return this.titleNumber
        },
        countDescNumber: function () {
            this.descNumber = 30 - this.description.length
            if (this.descNumber <= 0) {
                this.descNumber = 0
                this.descLimit = true
            } else {
                this.descLimit = false
            }

            return this.descNumber
        }

    }

}