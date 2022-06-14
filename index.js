const {
    GoogleSpreadsheet
} = require("google-spreadsheet");
const creds = require('./lenguajes-352322-d64f4da6bfa6.json');
const express = require('express')
const app = express()


var cors = require('cors')
app.use(cors())

const port = 3001;


(async function () {
        const doc = new GoogleSpreadsheet('1iEAntS4gM308YhkGsPS0X_znCwjWC4q2Cl6GVDYo2hA');

        await doc.useServiceAccountAuth(creds);

        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        

        app.get('/data', async (req, res) => {
            res.send(await (await (sheet.getRows())).map(row => ({
                name: row.name,
                nombre: row.nombre,
                speakers: row.speakers,
                wikiDataId: row.wikiDataId,
                walsCode: row.walsCode,
                iso6393: row.iso6393,
                genus: row.genus,
                family: row.family,
                area: row.area,
                lat: row.lat,
                lon: row.lon,
                countries: row.countries,

            })))
        })


        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })


}());

