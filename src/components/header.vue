<template>
    <header id="header">
        <template v-if="isLogin">
            <div class="login">
                <div class="nav-left">
                    <h3><router-link to="/" class="white">王二狗</router-link></h3>
                </div>
                <div class="nav-right">
                    <router-link to="/create"><i class="el-icon-plus" ></i></router-link>
                    <div class="block">
                        <el-avatar :size="45" class="avatar" >avatar</el-avatar>
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
                <h3>多人共享博客</h3>
                <div class="btns">
                    <el-button type="primary" class="btn"><router-link to="/login">立刻登录</router-link></el-button>
                    <el-button type="primary" class="btn"><router-link to="/register">注册账号</router-link></el-button>
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
        background-color: @bgColor;
        padding: 0 12%;
        display: grid;

        .login {
            display: grid;
            color: white;
            grid-template-areas: 'left middle right';
            grid-template-columns: repeat(3, 33.3%);

            .nav-left {
                grid-area: left;
                align-self: center;

                h3 {
                    display: inline-block;
                    font-weight: normal;
                    margin: 16px 0;
                    
                    .white{
                        color: white;
                        text-decoration: none;
                    }
                }
            }

            .nav-right {
                grid-area: right;
                position: relative;

                .el-icon-plus{
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
            display: grid;
            color: white;
            /*grid-template-areas: 'left middle right';*/
            /*grid-template-columns: repeat(3, 33.3%);*/

            h3 {
                text-align: center;
                font-weight: normal;
                margin: 16px 0;
            }

            .btns {
                text-align: center;
                margin-bottom: 20px;

                .btn{
                    text-align: center;
                }
            }

        }
    }

    header.no-login {

    }
</style>

