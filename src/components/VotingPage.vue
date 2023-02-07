<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 <div id="address"></div>
 <div class="table-responsive">
  <table class="table table-bordered">
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
 <input type="text" id="candidate" />
 <a href="#" onclick="voteForCandidate()" class="btn btn-primary">Vote</a>
  </div>
</template>

<script>
export default {
  name: 'voting',
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
