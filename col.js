var xmlrpc = require('xmlrpc')

const authToken = '123456789'

const hostAddress = "localhost"
 
// Waits briefly to give the XML-RPC server time to start up and start
// listening
setTimeout(function () {
  // Creates an XML-RPC client. Passes the host information on where to
  // make the XML-RPC calls.
  var client = xmlrpc.createClient({ host: hostAddress, port: 9191, path: '/rpc/api/xmlrpc'})
 
  // Sends a method call to the PaperCut MF/NG server

  client.methodCall(`api.processJob`, [ '123456789','printer'], function (error, value) {
    // Results of the method response
    console.log([authToken].concat(process.argv.slice(3)))
    if (undefined === error || null === error) {
        console.log(`Method response for plus: ${value}`)
    }
    else
    {
        console.log(`Error response for \'${process.argv[2]}\': ${error}`)
    }
  })
 
}, 1000)