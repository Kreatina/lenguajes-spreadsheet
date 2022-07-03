const {
    getSheet
} = require("./sheets");

const fetch = require('node-fetch')

const wdk = require('wikidata-sdk');
const { GoogleSpreadsheetRow, GoogleSpreadsheet } = require("google-spreadsheet");


(async function () {
    const sheet = await getSheet();
    const rows = await sheet.getRows();
    for (row of rows) {
        
        if (row.wikidataId !== '') {
            continue
        }
        const searchConfig = {
            search: row.name,
            format: 'json',
            language: 'en',
            limit: 1,
            haswbstatement: 'P31=Q34770',
        }
        const url = await wdk.cirrusSearchPages(searchConfig)
        const data = await fetch(url, {
            headers: {
                'User-Agent': 'WikiSheetsBot/0.1'
            }
        })
        .then(res => res.json())
        
        
        const fetchedData = data.query.search
        // console.log(fetchedData)
        fetchedData.filter(prop =>{
            const titles = prop.title
            console.log(titles)
         
        })
       
    }

}());