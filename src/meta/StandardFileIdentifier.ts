import IFileIdentifier from "./IFileIdentifier"

export default class StandardFileIdentifier implements IFileIdentifier {
    private regexFileExt: RegExp = RegExp("/\.[0-9a-z]+$/i")

    identifyType(file: File): String {
        var type = null
        type = file.name.match(this.regexFileExt)? LogFileTypes.HAR.toString() : null
        
        if (type == null) throw new Error("Unknown log file type")
        return (type as String).toLowerCase()
    }
}

export enum LogFileTypes {
    HAR,
    GENERAL
    //CEF, CLF, ELF,
}