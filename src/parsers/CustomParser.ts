import MetaLine from "../meta/MetaLine";
import IParser from "./IParser";


export default class CustomParser implements IParser {
    fileType: String
    
    constructor(fileType: String) {
        this.fileType = fileType
    }

    async parse(file: File): Promise<MetaLine[]> {
        return [] as MetaLine[]
    }
}