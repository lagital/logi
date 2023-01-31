import IFileIdentifier from "./IFileIdentifier"

export default class CustomFileIdentifier implements IFileIdentifier{
    identifyType(file: File): String {
        throw new Error("Unknown log file type")
    }
}