<template>
    <header id="header">
        <template v-if="isLogin">
            <div class="login">
                <div class="nav-left">
                    <h3>
                        <router-link to="/" class="white">多用户博客管理平台</router-link>
                    </h3>
                </div>
                <div class="nav-right">
                    <router-link to="/create"><i class="el-icon-edit"></i></router-link>
                    <div class="block">
                        <el-avatar :size="45" class="avatar">avatar</el-avatar>
                        <ul>
                            <li>
                                <router-link to="/my">我的{{user.id}}</router-link>
                            </li>
                            <li><a href="#" @click="onLogout">注销</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="!isLogin">
            <div class="logout">
                <h3><router-link to="/" class="title">多用户博客管理平台</router-link></h3>
                <div class="route">
                        <router-link to="/login" class="login1">登录</router-link>
                        <router-link to="/register" class="register">注册</router-link>
                </div>
            </div>
        </template>
    </header>
</template>

<script>
    import auth from '@/api/auth.js'

    window.auth = auth

    import {mapGetters, mapActions} from 'vuex'

    export default {
        // data 里面的数据是自己去使用的， 其他的组件和页面是不会去使用的
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'isLogin',
                'user'
            ])

        },
        created() {
            this.checkLogin()

        },
        methods: {
            ...mapActions([
                'checkLogin',
                'logout'
            ]),
            onLogout() {
                this.logout()
            },
        }
    }
</script>
<style lang="less">
    @import "../assets/base.less";

    header {
        background-color: @color-login-theme;
        padding: 0 12%;
        display: grid;
        border-bottom: 1px solid #dfdfdf;

        .login {
            display: grid;
            color: white;
            background-color: #262626;
            grid-template-areas: 'left middle right';
            grid-template-columns: repeat(3, 33.3%);

            .nav-left {
                grid-area: left;
                align-self: center;

                h3 {
                    display: inline-block;
                    font-weight: normal;
                    margin: 16px 0;

                    .white {
                        color: white;
                        text-decoration: none;
                    }
                }
            }

            .nav-right {
                grid-area: right;
                position: relative;

                .el-icon-edit {
                    position: absolute;
                    font-size: 20px;
                    right: 80px;
                    top: 50%;
                    margin-top: -10px;
                    color: white;
                    text-decoration: none;
                    font-weight: bold;

                }


                .block {
                    position: absolute;
                    top: 50%;
                    margin-top: -22.5px;
                    right: 0;

                    ul {

                        li {
                            text-align: center;
                        }
                    }

                }
            }

        }

        .logout {
            display:grid;
            color: white;
            grid-template-columns: 3fr 1fr ;
            padding: 10px 0;

            h3 {
                text-align: center;
                font-weight: normal;
                align-self: center;
                justify-self: start;

                .title{
                    color: #262626;
                }
            }

            .route{
                text-align: center;
                display: grid;
                align-items: center;
                grid-auto-flow: column;

                .login1{
                    justify-self: end;
                    color: red;

                }

                .register{
                    justify-self:start;
                    padding-left: 10px;
                    color: red;
                }
            }

        }
    }

    header.no-login {

    }
</style>

