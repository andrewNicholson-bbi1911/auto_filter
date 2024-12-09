export default class FilterMapSettings{
    constructor(
        data_model_name,
        filter_request_value_name,
        filter_title_name,
        filter_search_label_name,
        api_filter_load_method_name,
        filter_additional_url,
        repo_filter_load_method_name,
        repo_filter_empty_getter_name,
        filter_enum_type_name,
        filters_type_name
    ){
        this.data_model_name = data_model_name
        this.filter_request_value_name = filter_request_value_name
        this.filter_title_name = filter_title_name
        this.filter_search_label_name = filter_search_label_name
        this.api_filter_load_method_name = api_filter_load_method_name
        this.filter_additional_url = filter_additional_url
        this.repo_filter_load_method_name = repo_filter_load_method_name
        this.repo_filter_empty_getter_name = repo_filter_empty_getter_name
        this.filter_enum_type_name = filter_enum_type_name
        this.filters_type_name = filters_type_name
    }

    static getReferenceSettingsNames(){
        return referenceSettingsNames;
    }
}

const referenceSettingsNames = new FilterMapSettings(
    "<ModelName>",
    "<RequestValueName>",
    "<FilterTitleName>",
    "<FilterSearchLableName>",
    "<ApiLoadFilterName>",
    "<ExtraUrl>",
    "<RepoLoadFilterName>",
    "<RepoEmptyFilterGetterName>",
    "<FilterEnumType>",
    "<FiltersType>"
)