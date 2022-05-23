import { create } from "xmlbuilder2"
import { v4 } from "uuid"
import { XMLSerializedAsObject, XMLSerializedAsObjectArray } from "xmlbuilder2/lib/interfaces"
import { MultiTrack } from "./MultiTrack"
import { Filter } from "./Filter"
import { Transition } from "./Transition"

export class Tractor {
    private root
    private id = v4()
    constructor() {
        this.root = create().ele('tractor', {id: this.id})
    }
    public toString(): string {
        return this.root.toString({ prettyPrint: true })
    }
    public add(node: MultiTrack | Filter | Transition): void {
        this.root.ele(node.getNode())
    }
    public getNode(): XMLSerializedAsObject | XMLSerializedAsObjectArray {
        return this.root.toObject()
    }
}