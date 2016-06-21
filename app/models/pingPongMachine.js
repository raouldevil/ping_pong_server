var axios = require('axios')

var pingServer = function(url) {
  return axios.get(url)
  // return axios.get('https://api.github.com/users/raouldevil')

}

var pingPongMachine = {
  pingServers: function(urlList) {
    return axios.all(
      urlList.map(function(url){
        return pingServer(url)
      })
    ).then(function(pings){
      return pings.map(function(ping){
        console.log('Ping: ', ping)
        if (ping.status == 200) {
          return {"key": Math.round(Math.random()*100000), "logId": toString(Math.round(Math.random()*100000)), "time": new Date(), "server": ping.request.responseURL, "result": "Success"}
        } else {
          return {"key": Math.round(Math.random()*100000), "logId": toString(Math.round(Math.random()*100000)), "time": new Date(), "server": ping.request.responseURL, "result": "Fail"}
        }
      })
    }).catch(function(err) {
      console.warn("There was an issue pinging the server: " + err)
    })
  }
}


module.exports = pingPongMachine
