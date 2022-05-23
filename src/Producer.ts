import { v4 } from "uuid"
import { create } from "xmlbuilder2"
import { XMLSerializedAsObject, XMLSerializedAsObjectArray } from "xmlbuilder2/lib/interfaces"

interface IProducer {
    name: string
    text: string
}
export class Producer {
    private id = v4()
    private source: string | Array<IProducer>
    constructor(source: string | Array<IProducer>) {
        this.source = source
    }
    public getId(): string {
        return this.id
    }
    public getNode(): XMLSerializedAsObject | XMLSerializedAsObjectArray {
       const node = create().ele('producer', {id: this.id})
       if (typeof this.source === 'string') {
           node.ele('property', {name: 'resource'}).txt(this.source)
       } else {
           for (const item of this.source) {
               node.ele('property', {name: item.name}).txt(item.text)
           }
       }
       return node.toObject()
    }
}