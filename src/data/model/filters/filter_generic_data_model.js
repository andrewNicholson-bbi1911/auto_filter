import FilterMapSettings from './map_settings_model.js';

export default class FilterGenericDataModel{
    constructor(additionalUrl, filterTypeName, requestValueName, titleName, searchLabelName){
        this.additionalUrl = additionalUrl;
        this.filterTypeName = filterTypeName;
        this.requestValueName = requestValueName;
        this.titleName = titleName;
        this.searchLabelName = searchLabelName;
    }

    generateSettingsValues(){
        const upperCasedType = this.filterTypeName[0].toUpperCase() + this.filterTypeName.slice(1);
        const data_model_name = upperCasedType + "Model";
        const api_filter_load_method_name = "get" + upperCasedType + "TypeFilter";
        const repo_filter_load_method_name = "load" + upperCasedType;
        const repo_filter_empty_getter_name = "empty" + upperCasedType;

        var mapSettings = new FilterMapSettings(
            data_model_name,
            this.requestValueName,
            this.titleName,
            this.searchLabelName,
            api_filter_load_method_name,
            this.additionalUrl,
            repo_filter_load_method_name,
            repo_filter_empty_getter_name,
            this.filterTypeName,
            this.filterTypeName,
        );

        return mapSettings;
    }
}