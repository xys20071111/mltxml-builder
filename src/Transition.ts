import { create } from "xmlbuilder2"
import { XMLSerializedAsObject, XMLSerializedAsObjectArray } from "xmlbuilder2/lib/interfaces"

interface IProperty {
    name: string
    text: string
}
export class Transition {
    private source: Array<IProperty>
    constructor(source: Array<IProperty>) {
        this.source = source
    }
    public add(property: IProperty) {
        this.source.push(property)
    }
    public getNode(): XMLSerializedAsObject | XMLSerializedAsObjectArray {
        const node = create().ele('transition')
        for (const item of this.source) {
            node.ele('property', { name: item.name }).txt(item.text)
        }
        return node.toObject()
    }
}