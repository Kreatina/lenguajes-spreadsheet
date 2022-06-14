console.log(require("./sheets"))
const { getSheet } = require("./sheets");

const port = 3001;


(async function () {
 
    const sheet = await getSheet()
    console.log(sheet)

}());
