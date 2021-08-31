const xml2js = require('xml2js');
const fs = require('fs');
const request = require('request');
const { throws } = require('assert');
const axios = require('axios');
const

    axios.
g("http://192.168.0.4:83/getaccountlist?pass=TESTPASS").then(resp => {
    xml2js.parseString(resp.data, (err, result) => {
        // const json = JSON.stringify(result);
        let ange = [];
        let anfus = [];
        let c = result["Accounts"]["Account"];
        for (let i = 0; i < c.length; i++) {
            const qth1 = /1H./;
            const qth2 = /3H./;

            if (qth1.test(c[i]["Username"][0]) || qth2.test(c[i]["Username"][0])) {
                ange[i] = c[i]["Username"][0];
            }

        }

        for (let i = 0; i < ange.length; i++) {

            axios.get('http://192.168.0.4:83/viewaccount?account=' + ange[i] + '&pass=TESTPASSS').then(res => {
                xml2js.parseString(res.data, (err, result) => {
                    let l = result["Accounts"]["Account"][0]["TimeUsed"][0];

                    if (parseInt(l) == 0) {
                        anfus[i] = ange[i];

                    }
                    console.log(anfus)

                })

            })
        }

    })
})

/*request('http://192.168.0.4:83/getaccountlist?pass=TESTPASS', function(error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode);


    //fs.writeFileSync('pol.xml', body); // Print the response status code if a response was received
    //const xml = fs.readFileSync('pol.xml');
    xml2js.parseString(body, (err, result) => {

        if (err) {
            throw err;
        }
        const json = JSON.stringify(result);

        let c = json["Accounts"];
        console.log(json);
        console.log(Object.values(json));
        for (let i = 0; i < c.length; i++) {
            //console.log(json);
            let z = [];
            request('http://192.168.0.4:83/viewaccount?account=' + c[i]["Username"][0] + '&pass=TESTPASSm', function(error, response, body) {
                console.error('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode);

                //fs.writeFileSync('pol.xml', body); // Print the response status code if a response was received
                //const xml = fs.readFileSync('pol.xml');
                xml2js.parseString(body, { mergeAttrs: true }, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    const natsu = JSON.stringify(result, null, 4);
                    let b = natsu["Accounts"]["Account"][0]["TimeUsed"][0];
                    let c = natsu["Accounts"]["Account"][0]["Username"][0];
                    if (parseInt(b) == 0) {
                        z[i] = c;
                    }
                    //let c = puil["Accounts"]["Account"][0]["Username"][0];
                    //const json = JSON.stringify(result, null, 4);

                    console.log();

                });

            });

        }
        console.log(z);
    });

})*/
;