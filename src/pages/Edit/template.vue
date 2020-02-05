<template>
    <div id="edit">
        <h2>编辑文章</h2>
        <h3>文章标题</h3>
        <el-input
                type="textarea"
                :rows="2"
                v-model="title"
        >
        </el-input>
        <h3>内容简介</h3>
        <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="description">
        </el-input>
        <h3>文章内容</h3>
        <el-input
                type="textarea"
                :autosize="{ minRows: 14, maxRows: 20}"
                placeholder="请输入内容"
                v-model="content">
        </el-input>
        <el-button type="primary" @click="onCommit">提交文章</el-button>
    </div>
</template>

<script src="./template.js"></scripts>

    <style lang="less">
        @import "./template.less";
    </style>

