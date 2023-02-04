import IFileIdentifier from "./IFileIdentifier"

export enum LogFileTypes {
    HAR = "har",
    GENERAL = ""
    //CEF, CLF, ELF,
}

export default class StandardFileIdentifier implements IFileIdentifier {
    identifyType(file: File): String | null {
        var type = null
        const ext = /(?:\.([^.]+))?$/.exec(file.name)
        const extStr = ext == undefined ? "" : ext[0].substring(1)

        // har
        if (extStr == LogFileTypes.HAR.toString().toLowerCase()) type = extStr

        return type
    }
}