import FilterGenericDataModel from "../../../data/model/filters/filter_generic_data_model.js";

export default class FilterGenericDataGenerator{
     async generateGenericData() { }

     createGenericModel(url, typeName, requestValueName, titleName, searchLabelName){
        return new FilterGenericDataModel(url, typeName, requestValueName, titleName, searchLabelName);
     }
}