import MetaLine from "../meta/MetaLine";

export default interface IParser {
    fileType: String

    parse(file: File): Promise<MetaLine[]>
}