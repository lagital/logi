import CustomFileIdentifier from "./CustomFileIdentifier";
import FileIdentifier from "./FileIdentifier";
import MetaLine from "./MetaLine";
import StandardFileIdentifier from "./StandardFileIdentifier";


export class MetaFile {
    name: String
    type: String
    metaLines: MetaLine[]
    fileIdentifiers: FileIdentifier[] = [new StandardFileIdentifier, new CustomFileIdentifier]

    build(file: File): MetaFile {
        return new MetaFile(file);
    }

    private constructor(file: File) {
        this.name = file.name
        this.fileIdentifiers.forEach
        this.metaLines = [] as MetaLine[]
    };

    private converLinesToMeta(lines: String[], fileType: String): MetaLine[] {
        
    }
}