applicationAssetModel = require('../model/applicationAssetModel');
dataAssetModel = require('../model/dataAssetModel')
infrastructureAssetModel = require('../model/infrastructureAssetModel')
talentAssetModel = require('../model/talentAssetModel')
projectsAssetModel = require('../model/projectsAssetModel')
businessAssetModel = require('../model/businessAssetModel')
const assetFunctions = require('../assetFunctions');
XLSX = require('xlsx');

let dataAssetController = {
    
    findById: (req, res) => {
        res.json(dataAssetModel.findById(req.params.id));
    },
    findAll: (req, res) => {
        res.json(dataAssetModel.findAll());
    },
    findChildrenById: (req, res) => {
        let children = [];
        let parent = dataAssetModel.findById(req.params.id);
        parent["Asset Type"] = "Data";
        if (parent['Application Connections'] && parent['Application Connections'].trim().length) {
            let applicationAssetChildrenIds = parent['Application Connections'].split(';');
            applicationAssetChildrenIds = applicationAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidApplicationChildren(parent, applicationAssetChildrenIds));
        }
        if (parent['Data Connections'] && parent['Data Connections'].trim().length) {
            let dataAssetChildrenIds = parent['Data Connections'].split(';');
            dataAssetChildrenIds = dataAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidDataChildren(parent, dataAssetChildrenIds));
        }
        if (parent['Infrastructure Connections'] && parent['Infrastructure Connections'].trim().length) {
            let infrastructureAssetChildrenIds = parent['Infrastructure Connections'].split(';');
            infrastructureAssetChildrenIds = infrastructureAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidInfrastructureChildren(parent, infrastructureAssetChildrenIds));
        }
        if (parent['Talent Connections'] && parent['Talent Connections'].trim().length) {
            let talentAssetChildrenIds = parent['Talent Connections'].split(';');
            talentAssetChildrenIds = talentAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidTalentChildren(parent, talentAssetChildrenIds));
        }
        if (parent['Projects Connections'] && parent['Projects Connections'].trim().length) {
            let projectsAssetChildrenIds = parent['Projects Connections'].split(';');
            projectsAssetChildrenIds = projectsAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidProjectsChildren(parent, projectsAssetChildrenIds));
        }
        if (parent['Business Connections'] && parent['Business Connections'].trim().length) {
            let businessAssetChildrenIds = parent['Business Connections'].split(';');
            businessAssetChildrenIds = businessAssetChildrenIds.map(item => parseInt(item.replace(/\D/g, '')));
            children = children.concat(assetFunctions.filterForValidBusinessChildren(parent, businessAssetChildrenIds));
        }

        var hierarchy = {
            ...parent,
            children: children
        }

        res.json(hierarchy)
    }
}

module.exports = dataAssetController;