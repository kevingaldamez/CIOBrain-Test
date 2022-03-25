XLSX = require('xlsx');

let workbook = XLSX.readFile('./src/data/Business.xlsx', {type: "binary"});
let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

let businessAssetModel = {
    
    findById: (id) => {
        return data.filter(item => parseInt(item["Business ID"]) == id)[0];
    },
    findAll: () => {
        return data;
    }
}

module.exports = businessAssetModel;