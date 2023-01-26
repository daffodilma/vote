/*
 * @Author: daffodilma daffodilma@163.com
 * @Date: 2022-11-04 10:10:19
 * @LastEditors: daffodilma daffodilma@163.com
 * @LastEditTime: 2022-11-05 21:28:07
 * @FilePath: \chapter2\truffle.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
      gas:470000
    }
  }
}
