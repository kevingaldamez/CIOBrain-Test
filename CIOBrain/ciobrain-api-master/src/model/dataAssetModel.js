XLSX = require('xlsx');

let workbook = XLSX.readFile('./src/data/Data.xlsx', {type: "binary"});
let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

let dataAssetModel = {
    
    findById: (id) => {
        return data.filter(item => parseInt(item["Data ID"]) == id)[0];
    },
    findAll: () => {
        return data;
    }
}

module.exports = dataAssetModel;