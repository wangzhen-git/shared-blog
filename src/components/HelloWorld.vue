<template>
  <div id="page">
    <el-button type="primary">主要按钮</el-button>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">111</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">222</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">333</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">444</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
