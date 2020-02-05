<template>
    <div class="my" >
        <div class="figure">
            <el-avatar :size="50" class="img" :src="user.avatar"></el-avatar>
            <figcaption>{{user.username}}</figcaption>
            <hr/>
        </div>
        <section v-for="blog in blogs">
            <div class="date">
                <span class="day">{{splitDate(user.createdAt).date}}</span>
                <span class="month">{{splitDate(user.createdAt).month}}</span>
                <span class="year">{{splitDate(user.createdAt).year}}</span>
            </div>
            <h3>{{blog.title}}</h3>
            <p>{{blog.description}}</p>
            <div class="btns">
                <router-link :to="`/edit/${blog.id}`">编辑</router-link>
                <a href="#" @click.prevent="onDelete(blog.id)">删除{{blog.id}}</a>
            </div>
            <hr/>
        </section>
        <section>
            <el-pagination
                    @current-change="onPageChange"
                    :current-page="page"
                    layout="prev, pager, next"
                    :total="total">
            </el-pagination>
        </section>

    </div>
</template>

<script src="./template.js"></script>