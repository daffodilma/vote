var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'sh-cynosdbmysql-grp-7224u8cw.sql.tencentcdb.com',
  port:'21364', // assign your host name
  user: 'vote_dapp_dev',      //  assign your database username
  password: 'qk*$R%1H',      // assign your database password
  database: 'vote_dapp' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;