<template>
    <section id="content">
        <router-link class="item" :to="`/detail/${blog.id}`" v-for="blog in blogs">
            <div class="con-left">
                <div class="figure">
                    <el-avatar :size="50" class="img" :src="blog.user.avatar" :alt="blog.user.username"></el-avatar>
                    <figcaption>{{blog.user.username}}</figcaption>
                </div>
            </div>
            <div class="con-right">
                <h4>{{blog.title}}</h4>
                <span>{{friendlyDate(blog.createdAt)}}</span>
                <article>
                    {{blog.description}}
                    本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
                    本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文文
                </article>
            </div>
        </router-link>
        <section>
            <el-pagination
                    @current-change="onPageChange"
                    :current-page="this.page"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </section>
    </section>
</template>

<script src="./template.js"></script>

<style lang="less">
    @import "./template.less";
</style>
