import FileIdentifier from "./FileIdentifier"

export default class CustomFileIdentifier implements FileIdentifier{
    identifyType(file: File): String {
        throw new Error("Unknown log file type")
    }
}