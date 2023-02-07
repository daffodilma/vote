<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="block">
      <el-carousel height="250px" direction="vertical">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div id="address"></div>
    <el-row>
      <el-col :span="12" :offset="4" class="tit">
        <div class="grid-content bg-purple-dark">候选人</div>
      </el-col>
      <el-col :span="4" class="tit">
        <div class="grid-content bg-purple-dark">票数</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="4">
        <div class="grid-content bg-purple">
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="4">
        <div class="grid-content bg-purple">
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="4">
        <div class="grid-content bg-purple">
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="4">
        <div class="grid-content bg-purple">
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="4">
        <div class="grid-content bg-purple">
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <div class="vote"> 
      <input type="text" id="candidate" class="inp"/>
      <a href="#" onclick="voteForCandidate()" class="btn btn-primary">Vote</a>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucy</td>
            <td id="candidate-1"></td>
          </tr>
          <tr>
            <td>Lancy</td>
            <td id="candidate-2"></td>
          </tr>
          <tr>
            <td>Wayne</td>
            <td id="candidate-3"></td>
          </tr>
        </tbody>
      </table>
      <div id="msg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'voting',
  props: {
    msg: String
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inp{
width: 300px;
height: 40px;
margin-right: 50px;
padding-left: 8px;
border-radius: 5px;
outline: none;
border:none;
box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.3);
}

h3 {
  margin: 40px 0 0;
}

h1 {
  margin: 0;
  padding: 50px 0 60px 0;
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
  text-decoration: none;
  border: solid 1px #f9fafc;
  border-radius: 10px;
  display: inline-block;
  width: 100px;
  height: 35px;
  line-height: 35px;
}
.vote{
  margin-top: 40px;
}
.tit {
  height: 55px;
}

.el-row {
  margin: auto;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  /* background: #99a9bf; */
}

.bg-purple {
  /* background: #d3dce6; */
  border: 1px solid black;
}

.bg-purple-light {
  /* background: #e5e9f2; */
  border: 1px solid black;
}

.grid-content {
  /* border-radius: 4px; */
  min-height: 160px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.hello {
  font-family: Arial, Helvetica, sans-serif;

}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #050532;
  border-radius: 50px;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #060639;
  border-radius: 50px;

}

.block {
  margin: 0 150px 60px;
  border-radius: 50px;
  box-shadow: 0 6px 15px 2px rgba(0, 0, 0, 0.5);
}
</style>
