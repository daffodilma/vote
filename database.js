var mysql = require('mysql');
var conn = mysql.createConnection({
  host:'sh-cynosdbmysql-grp-7224u8cw.sql.tencentcdb.com',
  port:'21364',
  user:'voted_app_dev',
  password:'123456',
  database:'vote_dapp'
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;