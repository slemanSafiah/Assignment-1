const csvPath = 'customer-data.csv'
const csvtojson = require('csvtojson')

csvtojson().fromFile(csvPath).then((jsonObject) => {
    console.log(jsonObject)
})

const jsonArray = csvtojson().fromFile(csvPath);