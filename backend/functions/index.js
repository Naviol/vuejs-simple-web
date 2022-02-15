const functions = require("firebase-functions");
const fs = require("fs");
const dataSrc = "data/resources_library-issues_cleaned.csv";
const express = require("express");
const app = express();
const cors = require('cors');
const corsOptions = {
    methods: 'GET'
};
app.use(cors(corsOptions));

let data = fs.readFileSync(dataSrc, "utf8");
data = data.split("\r\n");

for (let r in data) {
    data[r] = data[r].split(",");
}

// Remove extra line generate from above process
data.pop();

// Cannot put data.length in while loop
// each loop will decrease number of arrays
let len = data.length
let result = [] // Array to store all datas
let json = [] // Temp array for concat()
let x = 0
while (x < len) {
    for (let i = 0; i < data.length; i++) {
        let arrLen = data[i].length;

        for (let j = 0; j < arrLen; j++) {
            json[j] = {
                "@context": {
                    "name": "https://schema.org/Place",
                    "date": "https://schema.org/Date",
                    "number": "https://schema.org/Number"
                },
                "name": data[i][0],
                "date": data[0][j],
                "number": data[i][j]
            };
        }
    }
    data.pop(); // Remove last element of array after stored to $json
    // Remove noise data
    json = json.filter((d) => d.date != "Library name ");
    json = json.filter((d) => d.name != "Library name ");
    result = result.concat(json);
    x++;
}

app.get("/data/", (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(result);
});

exports.app = functions.https.onRequest(app);
