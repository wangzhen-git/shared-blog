<template>
    <div id="login">
        <el-input v-model="username" placeholder="请输入账户" autocomplete="on"></el-input>
        <el-input  v-model="password" placeholder="请输入密码" @keyup.enter="onLogin" autocomplete="on" ></el-input>
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

<style scoped lang="less">
    #login {
        margin-top: 40px;

        .el-input {
            margin-top: 20px;
        }

        .el-button {
            margin-top: 30px;
            display: flex;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }

        p {
            color: #ccc;
            font-size: 10px;
            text-align: center;
            margin-top: 10px;
        }
    }
</style>