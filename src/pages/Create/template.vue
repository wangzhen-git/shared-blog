<template>
    <div id="create">
        <h2>创建文章</h2>
        <h3>文章标题</h3>
        <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入标题"
                v-model="title"
                v-bind:class="{wordlimit:titleLimit}"
        >
        </el-input>
        <p>你还能输入{{countTitleNumber}}个字</p>
        <h3>内容简介</h3>
        <el-input
                type="textarea"
                :rows="6"
                v-bind:class="{desclimit:descLimit}"
                placeholder="请输入内容"
                v-model="description">
        </el-input>
        <p>你还能输入{{countDescNumber}}个字</p>
        <h3>文章内容</h3>
        <el-input
                type="textarea"
                :autosize="{ minRows: 14, maxRows: 20}"
                placeholder="请输入内容"
                v-model="content">
        </el-input>
        <p>
            <label>是否展示到首页</label>
            <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
            </el-switch>
        </p>
        <el-button type="primary" @click="onCreate">提交文章</el-button>
    </div>
</template>

<script src="./template.js"></scripts>

    <style lang="less">
        @import "./template.less";
    </style>