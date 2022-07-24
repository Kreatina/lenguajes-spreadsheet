const { getSheet, getCell } = require("./sheets");

const fetch = require("node-fetch");

const wdk = require("wikidata-sdk");
const {
  GoogleSpreadsheetRow,
  GoogleSpreadsheet,
  GoogleSpreadsheetCell,
} = require("google-spreadsheet");
const { default: wiki } = require("wikipedia/dist");

async function searchWikipediaByTitle(title) {
  const searchConfig = {
    search: title,
    format: "json",
    language: "en",
    limit: 1,
    haswbstatement: "P31=Q34770",
  };
  const url = await wdk.cirrusSearchPages(searchConfig);
  const data = await fetch(url, {
    headers: {
      "User-Agent": "WikiSheetsBot/0.1",
    },
  }).then((res) => res.json());

  return data.query.search;
}

(async function () {
  const sheet = await getSheet();
  const rows = await sheet.getRows();
  for (row of rows) {
    if (row.wikidataId !== "") {
      continue;
    }

    const fetchedData = await searchWikipediaByTitle(row.name);
    if (fetchedData.length == 0) continue;

    const wikidataId = fetchedData[0].title;
    row.wikidataId = wikidataId;
    await row.save();

    console.log(wikidataId);
    console.log(rows.indexOf(row) + "/" + rows.length);
  }
})();
