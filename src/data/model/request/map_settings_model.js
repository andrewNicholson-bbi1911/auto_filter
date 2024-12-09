export default class RequestMapSettings{
    constructor(
        data_model_name,
        loadRequesRepoMethodName,
        loadRequesApiMethodName,
        additionalUrl,
        mainDataField,
    ){
        this.data_model_name = data_model_name
        this.loadRequesRepoMethodName = loadRequesRepoMethodName
        this.loadRequesApiMethodName = loadRequesApiMethodName
        this.additionalUrl = additionalUrl
        this.mainDataField = mainDataField
    }

    static getReferenceSettingsNames(){
        return referenceSettingsNames;
    }
}

const referenceSettingsNames = new RequestMapSettings(
    "<dataName>",
    
    //название метода загрузки респонза в репозитории [load<Smth>Data]
    "<LoadRequestRepositoryMethodName>",

    //название метода загрузки респонза в репозитории [get<Smth>Data]
    "<LoadRequestAPIMethodName>",
    
    //добавочный url апи
    "<AdditionalUrl>",
    
    //основное поле в запросе для данных (обычно data):
    "<MainDataField>"
    
)