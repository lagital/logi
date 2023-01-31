import CustomFileIdentifier from "./CustomFileIdentifier";
import IFileIdentifier from "./IFileIdentifier";
import MetaLine from "./MetaLine";
import StandardFileIdentifier, { LogFileTypes } from "./StandardFileIdentifier";
import HarParser from "../parsers/HarParser";


export class MetaFile {
    name: String
    type: String
    metaLines: MetaLine[]
    fileIdentifiers: IFileIdentifier[] = [new StandardFileIdentifier, new CustomFileIdentifier]

    static build(file: File): MetaFile {
        return new MetaFile(file);
    }

    private constructor(file: File) {
        this.name = file.name
        this.type = this.identifyFile(file)
        this.metaLines = this.extractMetaLines(file, this.type)
    };

    private identifyFile(file: File): String {
        var type: String;
        for (var i of this.fileIdentifiers) {
            type = i.identifyType(file);
            if (type) {
                return type;
            }
        }

        throw new Error("Unknown log file type")
    }

    private extractMetaLines(file: File, fileType: String): MetaLine[] {
        switch(fileType) {
            case LogFileTypes.HAR.toString(): {
                return new HarParser().parse(file)
            }
            default: { 
                throw new Error("Unknow parser for log file type " + fileType)
            } 
        }
    }
}