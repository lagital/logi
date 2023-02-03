import MetaLine from "../meta/MetaLine";
import IParser from "./IParser";


export default class HarParser implements IParser {
    async parse(file: File): Promise<MetaLine[]> {
        return file.text()
        .then(function(text) {
            var lines = [] as MetaLine[]
            const json = JSON.parse(text)
            const log = json["log"]
            const entries = log["entries"]
            
            console.log(entries)

            for (var e of entries) {
                lines.push(new MetaLine(
                    e["startedDateTime"],
                    e["request"]["url"] + ": " + e["request"]["url"]
                ))
            }

            return lines
        })
    }
}