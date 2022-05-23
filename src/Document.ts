import { create } from "xmlbuilder2"
import { MultiTrack } from "./MultiTrack"
import { PlayList } from "./PlayList"
import { Producer } from "./Producer"
import { Tractor } from "./Tractor"
import { Transition } from "./Transition"

export class Document {
    private document
    private root
    constructor() {
        this.root = create({ version: '1.0' })
        this.document = this.root.ele('mlt')
    }
    public toString(): string {
        return this.root.toString({ prettyPrint: true })
    }
    public add(node: Producer | PlayList | Tractor | MultiTrack | Transition ): void {
        this.document.ele(node.getNode())
    }
}