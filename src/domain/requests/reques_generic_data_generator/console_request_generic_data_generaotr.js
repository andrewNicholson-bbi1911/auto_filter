import RequestGenericDataGenerator from "./_request_generic_data_generator.js";
import * as readline from 'node:readline/promises';
import {
    stdin as input,
    stdout as output,
} from 'node:process';


export default class ConsoleRequestGenericDataGenerator extends RequestGenericDataGenerator{

    constructor(){
        super();
    }

    async generateGenericData(){
        const rl = readline.createInterface({ input, output });


        var dataName = await rl.question("enter getting data name (in format like: checksCardComplaintsInfo):");
        var url = await rl.question("enter additional Url to filter (in format like: kno/facts/bla_request):");
        var mainField = await rl.question("enter main field name containig general info (in format like: data):")

        return this.createGenericModel(dataName, url, mainField);
    }
}
