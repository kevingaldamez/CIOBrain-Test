XLSX = require('xlsx');

let workbook = XLSX.readFile('./src/data/Projects.xlsx', {type: "binary"});
let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

let projectsAssetModel = {
    
    findById: (id) => {
        return data.filter(item => parseInt(item["Projects ID"]) == id)[0];
    },
    findAll: () => {
        return data;
    }
}

module.exports = projectsAssetModel;