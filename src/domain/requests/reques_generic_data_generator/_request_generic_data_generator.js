import RequestGenericDataModel from "../../../data/model/request/request_generic_data_model.js";

export default class RequestGenericDataGenerator{
     async generateGenericData() { }

     createGenericModel(dataName, url, mainField){
        return new RequestGenericDataModel(dataName, url, mainField);
     }
}