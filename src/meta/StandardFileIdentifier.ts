import FileIdentifier from "./FileIdentifier"

export default class StandardFileIdentifier implements FileIdentifier {
    private regexFileExt: RegExp = RegExp("/\.[0-9a-z]+$/i")

    identifyType(file: File): String {
        var type = null
        type = file.name.match(this.regexFileExt)? LogFileTypes.HAR.toString() : null
        
        if (type == null) throw new Error("Unknown log file type")
        return (type as String).toLowerCase()
    }
}

enum LogFileTypes {
    HAR,
    GENERAL
    //CEF, CLF, ELF,
}