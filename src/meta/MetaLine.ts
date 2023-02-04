export default class MetaLine {
    timestamp: number
    label:     String
    details?:  String = undefined
    fileName:  String
    fileType:  String

    constructor(timestamp: number, label: String, fileName: String, fileType: String, details?: String) {
        this.timestamp = timestamp
        this.label     = label
        this.fileName  = fileName
        this.fileType  = fileType
        this.details   = details
    }
}