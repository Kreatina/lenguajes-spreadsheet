const wdk = require('wikidata-sdk')
const {
  getSheet
} = require("./sheets");




//getUrl() generates endpoints to data in json to  query wikidataIds  
const getUrl = async () => {
  const sheet = await getSheet();
  const rows = await sheet.getRows();
  rows.map((row) => {
    if (row.nombre === '') {
      const searchConfig = {
        search: row.name + ' ' + 'language',
        format: 'json',
        limit: 10,
        language: 'en',
        description: '',


      }
      url = wdk.searchEntities(searchConfig)
      console.log(url)
    }
  })
  // console.log(rows)




}

module.exports = {
  getUrl
}