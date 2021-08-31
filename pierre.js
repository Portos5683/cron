 /*const pil = require('array.prototype.flat');
                       const flat = require('array.prototype.flat/implementation');
                     const puil = require('./pil.json');
                     const plo = require('./plo.json');

                     let b = puil["Accounts"]["Account"][0]["TimeLeft"][0];
                     let c = puil["Accounts"]["Account"][0]["Username"][0];
                     let a = plo["Accounts"]["Account"];

                     console.log(c);*/
 axios.get("http://192.168.0.4:83/getaccountlist?pass=TESTPhttp://192.168.0.4:83/viewaccount?account=3HB4D3NLV&pass=TESTPASS").then(res => {
     xml2js.parseString(res.data, (err, result) => {
         console.log(result);

     })
 })