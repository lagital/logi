import MetaLine from "../meta/MetaLine";
import { LogFileTypes } from "../meta/StandardFileIdentifier";
import IParser from "./IParser";


export default class HarParser implements IParser {
    fileType: String

    constructor(fileType: String) {
        this.fileType = fileType
    }

    async parse(file: File): Promise<MetaLine[]> {
        return file.text()
        .then(function(text) {
            const lines = [] as MetaLine[]
            const json = JSON.parse(text)
            const log = json["log"]
            const entries = log["entries"]

            for (var e of entries) {
                let samlData = undefined

                if (e["request"]["url"].toString().indexOf("collector")) {
                    samlData = e["request"]["url"].toString().split("collector").pop()
                }

                lines.push(new MetaLine(
                    Date.parse(e["startedDateTime"]),
                    e["request"]["method"] + ": " + e["request"]["url"],
                    file.name,
                    LogFileTypes.HAR.toString(),
                    samlData
                ))
            }

            return lines
        })
    }
}