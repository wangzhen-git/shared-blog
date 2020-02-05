<template>
    <div id="login">
        <h3>用户名</h3>
        <el-input v-model="username" placeholder="请输入用户名" autocomplete="on"></el-input>
        <h3>密码</h3>
        <el-input  v-model="password" placeholder="请输入密码" @keyup.enter="onLogin" autocomplete="on" ></el-input>
        <el-button @click="onLogin" type="success" plain>立刻登录</el-button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data() {
            return {
                username: '',
                password:''

            }
        },
        methods:{
            ...mapActions(['login']),
            onLogin(){
                this.login({username:this.username,password:this.password})
                    .then(()=>{
                        this.$router.push({path:this.$route.query.redirect || '/'})
                    })
            }
        }
    }
</script>