applicationAssetModel = require('./model/applicationAssetModel');
dataAssetModel = require('./model/dataAssetModel')
infrastructureAssetModel = require('./model/infrastructureAssetModel')
talentAssetModel = require('./model/talentAssetModel');
projectsAssetModel = require('./model/projectsAssetModel');
businessAssetModel = require('./model/businessAssetModel');
const loggingModel = require('./model/loggingModel')

let assetFunctions = { 
    filterForValidApplicationChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = applicationAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Application Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Application Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Application";
            }
            return child;
        }).filter(item => item != null);
    },
    filterForValidDataChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = dataAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Data Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Data Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Data";
            }
            return child;
        }).filter(item => item != null);
    },
    filterForValidInfrastructureChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = infrastructureAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Infrastructure Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Infrastructure Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Infrastructure";
            }
            return child;
        }).filter(item => item != null);
    },
    filterForValidTalentChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = talentAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Talent Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Talent Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Talent";
            }
            return child;
        }).filter(item => item != null);
    },
    filterForValidProjectsChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = projectsAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Projects Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Projects Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Projects";
            }
            return child;
        }).filter(item => item != null);
    },
    filterForValidBusinessChildren: (asset, childrenList) => {
        return childrenList.map(id => {
            var child = businessAssetModel.findById(id); 
            if(!child) {
                //asset not found
                loggingModel.push('Business Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" does not exist', JSON.stringify(asset));
                return null;
            } else if (!child["Name"] ) { 
                loggingModel.push('Business Connection with an ID of ' + id + ' for asset "' + asset["Name"] + '" exists but is invalid', JSON.stringify(asset));
                return null;
            } else {
                child["Asset Type"] = "Business";
            }
            return child;
        }).filter(item => item != null);
    }
}

module.exports = assetFunctions;