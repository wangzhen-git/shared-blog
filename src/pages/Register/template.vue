<template>
    <div id="login">
        <h3>用户名</h3>
        <el-input v-model="password" placeholder="请输入注册名" autocomplete="on"></el-input>
        <h3>密码</h3>
        <el-input  v-model="password" placeholder="请输注册入密码" @keyup.enter="onLogin" autocomplete="on" ></el-input>
        <el-button @click="onRegister" type="success" plain>注册账号</el-button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data() {
            return {
                password: '',
                username:''

            }
        },
        methods:{
            ...mapActions(['register']),
            onRegister(){
                this.register({password:this.password,password:this.password})
                    .then(()=>{
                        this.$router.push({path:'/'})
                    })
            }
        }
    }
</script>
