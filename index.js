console.log(require("./sheets"))

const { getSheet } = require("./sheets");
const { getUrl } = require("./urlHandler");
const { getWiki } = require("./wiki");



(async function () {
    const wiki = await getWiki();
    const apiUrl = await getUrl();
    console.log(apiUrl)
    const sheet = await getSheet();
    // console.log(sheet)

}());
