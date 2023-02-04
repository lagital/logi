import CustomFileIdentifier, { CustomLogFileTypes } from "./CustomFileIdentifier";
import IFileIdentifier from "./IFileIdentifier";
import MetaLine from "./MetaLine";
import StandardFileIdentifier, { LogFileTypes } from "./StandardFileIdentifier";
import HarParser from "../parsers/HarParser";
import CustomParser from "../parsers/CustomParser";


export class MetaFile {
    name: String
    type: String
    metaLines: MetaLine[] = [] as MetaLine[]
    fileIdentifiers: IFileIdentifier[] = [new StandardFileIdentifier, new CustomFileIdentifier]

    static buildMetaFile(file: File): MetaFile {
        return new MetaFile(file)
    }

    static async buildMetLines(file: File, metaFile: MetaFile): Promise<MetaLine[]> {
        return MetaFile.extractMetaLines(file, metaFile.type)
    }

    private constructor(file: File) {
        this.name = file.name
        this.type = this.identifyFile(file)
    };

    private identifyFile(file: File): String {
        var type: String | null = null;
        for (var i of this.fileIdentifiers) {
            type = i.identifyType(file);
            if (type != null) {
                return type;
            }
        }

        throw new Error("Unknown log file type")
    }

    private static async extractMetaLines(file: File, fileType: String): Promise<MetaLine[]> {
        // har
        if (fileType == LogFileTypes.HAR.toString()) return new HarParser().parse(file)
        // custom
        return new CustomParser(fileType).parse(file)
    }
}