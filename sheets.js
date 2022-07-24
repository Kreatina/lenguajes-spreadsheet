const {
    GoogleSpreadsheet
} = require('google-spreadsheet')
const creds = require('./client_secret.json');

const getSheet = async () => {

    const doc = new GoogleSpreadsheet('1PqSVi0uqcw7kLK3_9RECCcWYg4zr_sXntwcrZc4m72c'); 

    await doc.useServiceAccountAuth(creds);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    return sheet
}





module.exports = {
    getSheet
}














