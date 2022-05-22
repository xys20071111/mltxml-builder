import { create } from "xmlbuilder2"
import { PlayList } from "./PlayList";
import { Producer } from "./Producer";

export class Document {
    private document;
    private root;
    constructor() {
        this.root = create({ version: '1.0' })
        this.document = this.root.ele('mlt')
    }
    public toString(): string {
        return this.root.toString({ prettyPrint: true })
    }
    public add(node: Producer | PlayList): void {
        this.document.ele(node.getNode())
    }
}