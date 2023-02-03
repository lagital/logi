import IFileIdentifier from "./IFileIdentifier"

export default class StandardFileIdentifier implements IFileIdentifier {
    identifyType(file: File): String {
        var type = null
        const ext = /(?:\.([^.]+))?$/.exec(file.name)
        const extStr = ext == undefined ? "" : ext[0].substring(1)
        console.info("File identifieed as " + extStr)

        type = extStr == LogFileTypes.HAR.toString().toLowerCase() ? extStr : null
        
        if (type == null) throw new Error("Unknown log file type")
        return (type as String).toLowerCase()
    }
}

export enum LogFileTypes {
    HAR = "har",
    GENERAL = ""
    //CEF, CLF, ELF,
}