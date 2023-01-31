import MetaLine from "../meta/MetaLine";
import IParser from "./IParser";

export default class HarParser implements IParser {
    parse(file: File): MetaLine[] {
        var har = require('har')
        const log = har.Log(file)
        console.info(log.version)
        return [] as MetaLine[]
    }
}