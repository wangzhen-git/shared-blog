<template>
    <div class="user">
        <section class="user-info">
            <div class="figure">
                <el-avatar :size="50" class="img" :src="user.avatar"></el-avatar>
                <figcaption>{{user.username}}</figcaption>
            </div>
        </section>
        <hr/>
        <section>
            <router-link :to="`/detail/${blog.id}`" v-for="blog in blogs" :key="blog.id">
                <div class="date">
                    <span class="day">day:{{splitDate(blog.createdAt).date}}</span>
                    <span class="month">month:{{splitDate(blog.createdAt).month}}</span>
                    <span class="year">year:{{splitDate(blog.createdAt).year}}</span>
                </div>
                <h3>{{blog.title}}</h3>
                <p>{{blog.description}}</p>
            </router-link>
        </section>
        <section>
            <el-pagination
                    @current-change="onPageChange"
                    :current-page="this.page"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </section>
    </div>
</template>

<script src="./template.js"></script>