import MetaLine from "../meta/MetaLine";
import IParser from "./IParser";


export default class CustomParser implements IParser {
    async parse(file: File): Promise<MetaLine[]> {
        return [] as MetaLine[]
    }
}