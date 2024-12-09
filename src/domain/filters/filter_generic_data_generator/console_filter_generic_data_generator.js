import FilterGenericDataGenerator from "./_filter_generic_data_generator.js";
import * as readline from 'node:readline/promises';
import {
    stdin as input,
    stdout as output,
} from 'node:process';


export default class ConsoleFilterGenericDataGenerator extends FilterGenericDataGenerator{

    constructor(){
        super();
    }

    async generateGenericData(){
        const rl = readline.createInterface({ input, output });

        var url = await rl.question("enter additional Url to filter (in format like: kno/filters/filter_name):");
        var filterTypeName = await rl.question("enter enum filter type name:");
        var requestValueName = await rl.question("enter requestValueName of filter (initilaizing in empty filter in repo\n" +
            ", value is usualu similar to enum filter type):");
        var titleName = await rl.question("enter displaying title name of filter:");
        var searchLabelName = await rl.question("enter displaying search label of filter:");

        return this.createGenericModel(url, filterTypeName, requestValueName, titleName, searchLabelName);
    }
}
