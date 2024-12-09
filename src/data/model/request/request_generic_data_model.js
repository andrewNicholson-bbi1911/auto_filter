import RequestMapSettings from './map_settings_model.js';

export default class RequestGenericDataModel{
    constructor(requestDataName, additionalUrl, mainDataFieldName){
        this.requestDataName = requestDataName;
        this.additionalUrl = additionalUrl;
        this.mainDataFieldName = mainDataFieldName;
    }

    generateSettingsValues(){
        var data_model_name = this.requestDataName[0].toUpperCase() + this.requestDataName.slice(1);
        if(data_model_name.endsWith("Data")){
            data_model_name = data_model_name.slice(0, data_model_name.length-4);
        }
        
        const load_reques_repo_method_name = "load" + data_model_name + "Data";
        const load_reques_api_method_name = "get" + data_model_name + "Data";
        const additional_url = this.additionalUrl;
        const main_data_field = this.mainDataFieldName;

        var mapSettings = new RequestMapSettings(
            data_model_name,
            load_reques_repo_method_name,
            load_reques_api_method_name,
            additional_url,
            main_data_field,
        );

        return mapSettings;
    }
}