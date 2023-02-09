<template>
  <div class="login">
    <div class="getin">行星防御理事会投票系统
        </div>
        <div class="tit">登陆</div>
        <div class="name">
            用户名<input type="text" name="" id="">
           <a href="register.html">注册账号</a> 
        </div>
        <div class="inp">
            密码<input type="password" name="" id="pwd">
            <label for="">
                <img src="眼睛.png" alt="" id="eye">
            </label>
        <a href="" class="forget">忘记密码</a>
        </div>
        <div class="btn">
            <button>登录</button>
        </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {},
  activated () {},
  deactivated () {},
  destroyed () {},
}
</script>
<style lang='less' scoped>
.box {
    border: 2px;
    width: 600px;
    height:360px;
    margin: 40px auto;
    border-radius: 10px;
}

.getin {
    color:black;
    text-align: center;
    font-size: 50px;
    height: 100px;
    padding: 20px;
    line-height: 100px;
    margin-bottom: 60px;

}

.tit{
    text-align: center;
    margin-bottom: 40px;
    color:black;
    font-size: 30px;
}

.box input {
    width: 350px;
    height: 40px;
    border-radius: 20px;
    outline: none;
}
input{
    margin-left: 30px;
    border: black solid 1px;
    margin-bottom: 35px;
    padding-left: 8px;
    
}
.inp{
    color:black;
    margin-left: 70px;
    font-size: 20px;
}
.name{
    color:black;
    font-size: 20px;
    margin-left: 50px;
}

.btn{
    margin-left: 270px;
    
}

button{
    width: 60px;
    height: 40px;
    background-color: black;
    border: none;
    outline: none;
    color: white;
    border-radius: 10px;
    font-size: 17px;
 
}

img{
    height: 35px;
    position: relative;
    /* top: 371px;
    left: 850px;  */
    right: 50px;
    top: 10px;
}

a{
    display: inline;
    font-size: 10px;
    text-decoration: none;
    color: black;
}
.forget{
    position: relative;
    right:40px
}
body{
    font-family:Arial, Helvetica, sans-serif;
    background-image: linear-gradient(to right, #FED0FC, #63D1EC);
}
</style>