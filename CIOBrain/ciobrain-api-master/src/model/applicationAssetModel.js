XLSX = require('xlsx');

let workbook = XLSX.readFile('./src/data/Application.xlsx', {type: "binary"});
let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

let applicationAssetModel = {
    
    findById: (id) => {
        return data.filter(item => parseInt(item["Application ID"]) == id)[0];
    },
    findAll: () => {
        return data;
    }
}

module.exports = applicationAssetModel;