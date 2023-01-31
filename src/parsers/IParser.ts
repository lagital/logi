import MetaLine from "../meta/MetaLine";

export default interface IParser {
    parse(file: File): MetaLine[]
}