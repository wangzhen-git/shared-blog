<template>
    <div id="detail">
        <section class="user-info">
            <div class="avatar">
                <el-avatar :size="70" :src="user.user.avatar"></el-avatar>
            </div>
            <h3>{{title}}</h3>
            <p>
                 <div class="user"><router-link :to="`/user/${user.user.id}`">{{user.user.username}}</router-link></div>
            {{friendlyDate(createdAt)}}
            </p>
        </section>
        <section class="article" v-html="markdown">
        </section>
    </div>
</template>

<script src="./template.js"></script>

<style lang="less" >
    @import "../../assets/base.less";
    @import "./template.less";

</style>

