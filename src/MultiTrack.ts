import { create } from "xmlbuilder2"
import { XMLSerializedAsObject, XMLSerializedAsObjectArray } from "xmlbuilder2/lib/interfaces"

export class MultiTrack {
    private source: Array<string>
    constructor(source: Array<string>) {
        this.source = source
    }
    
    public add(id: string) {
        this.source.push(id)
    }

    public getNode(): XMLSerializedAsObject | XMLSerializedAsObjectArray {
        const node = create().ele('multitrack')
        for (const item of this.source) {
            node.ele('track', { producer: item })
        }
        return node.toObject()
    }
}