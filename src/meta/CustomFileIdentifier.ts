import IFileIdentifier from "./IFileIdentifier"

export enum CustomLogFileTypes {
    WSRTP = "wsrtp",
    TS = "ts"
}

export default class CustomFileIdentifier implements IFileIdentifier{
    identifyType(file: File): String {
        var type = null
        // wsrtp
        if (type == null && file.name.startsWith("wsrproxy")) type = CustomLogFileTypes.WSRTP.toString()
        // ts
        if (type == null &&
            (file.name.startsWith("ext_")  ||
             file.name.startsWith("base_") ||
             file.name.startsWith("main_"))) type = CustomLogFileTypes.TS.toString()

        if (type == null) throw new Error("Unknown log file type")
        return (type as String).toLowerCase()
    }
}