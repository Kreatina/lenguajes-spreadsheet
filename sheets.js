
const {GoogleSpreadsheet} = require('google-spreadsheet')
const creds = require('./client_secret.json');

 const getSheet = async ()=>{
    
    const doc = new GoogleSpreadsheet('1iEAntS4gM308YhkGsPS0X_znCwjWC4q2Cl6GVDYo2hA');

    await doc.useServiceAccountAuth(creds);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    return sheet

}
module.exports = {getSheet}