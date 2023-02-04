import { LogFileTypes } from "../../meta/StandardFileIdentifier";
import getCustomColor from "./CustomColorMap";

export default function getColor(fileTypeStr: String): String {
    var color = colorMap.get(fileTypeStr)
    color = color ? color : getCustomColor(fileTypeStr)
    color = color ? color : "#FFFFFF"
    return color
}

const colorMap = new Map<String, String>([
    [LogFileTypes.HAR.toString(), "#E1BEE7"]
]);