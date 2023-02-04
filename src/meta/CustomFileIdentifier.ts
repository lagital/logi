import IFileIdentifier from "./IFileIdentifier"

export enum CustomLogFileTypes {
    WSRTP = "wsrtp"
}

export default class CustomFileIdentifier implements IFileIdentifier{
    identifyType(file: File): String {
        var type = null
        // wsrtp
        if (type == null && file.name.startsWith("wsrproxy")) type = CustomLogFileTypes.WSRTP.toString()

        if (type == null) throw new Error("Unknown log file type")
        return (type as String).toLowerCase()
    }
}