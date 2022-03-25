XLSX = require('xlsx');

let workbook = XLSX.readFile('./src/data/Talent.xlsx', {type: "binary"});
let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

let talentAssetModel = {
    
    findById: (id) => {
        return data.filter(item => parseInt(item["Talent ID"]) == id)[0];
    },
    findAll: () => {
        return data;
    }
}

module.exports = talentAssetModel;