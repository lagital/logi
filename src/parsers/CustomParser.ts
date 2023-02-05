import { CustomLogFileTypes } from "../meta/CustomFileIdentifier";
import MetaLine from "../meta/MetaLine";
import TsParser from "./custom/TsParser";
import WsrtpParser from "./custom/WsrtpParser";
import IParser from "./IParser";


export default class CustomParser implements IParser {
    fileType: String
    
    constructor(fileType: String) {
        this.fileType = fileType
    }

    async parse(file: File): Promise<MetaLine[]> {
        if (this.fileType == CustomLogFileTypes.WSRTP) return new WsrtpParser(this.fileType).parse(file)
        if (this.fileType == CustomLogFileTypes.TS)    return new TsParser(this.fileType).parse(file)

        throw new Error("Unable to parse the file")
    }
}