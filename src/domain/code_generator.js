import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import * as path from 'path';
import * as fs from 'node:fs';
import { Console } from 'console';
const MainStorageDirectory = path.join(__dirname, "..", "..");

export default class CodeGenerator{
    constructor(referenceRelativePath, outputRelativePath){
        this.referencePath = path.join(MainStorageDirectory,referenceRelativePath );
        this.outputRelativePath = path.join(MainStorageDirectory, outputRelativePath);
    }

    async generateCode(settingsObj, settingsValue){

        var settingsMap = new Map( Object.entries(settingsObj));
        var valuesMap = new Map( Object.entries(settingsValue));

        console.log(settingsMap);

        (await this.getReferenceFiles()).forEach(refFileName => {

            if(refFileName.endsWith(".json")){
                return;
            }

            var fileData = fs.readFileSync(path.join(this.referencePath, refFileName )).toString();
            
            settingsMap.forEach((val, key) => {
                while(fileData.includes(val)){
                    fileData = fileData.replace(val, valuesMap.get(key));
                }
            });

            var newFilePath = path.join(this.outputRelativePath, refFileName);

            fs.writeFileSync(newFilePath, fileData);

            console.log("writen: " + newFilePath);
       });
    }

    async getReferenceFiles(){
        console.log("reading: " + this.referencePath);

        var refFiles = fs.readdirSync(this.referencePath);

        console.log(refFiles.length);

        return refFiles;
    }
}