<template>
  <div class="homeclass">
    <h1>欢迎!</h1>
    <h3>Search for further message in the following URL</h3>
    <ul>
      <li> <a href="http://www.e-hentai.com">QQ</a></li>
    </ul>
    <button v-on:click="quit" class="buttonclass">注销登陆</button>
  </div>
</template>
<script>
  export default{
    name: 'home',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      quit () {
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>

  body{
    background-color: #d3ffee;
  }
  button{
    width:100px;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    border:none;  background-color: #307ab8;
    color:#fff;
    font-size:16px;
    margin-bottom:5px;
  }
</style>
