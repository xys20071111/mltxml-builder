import { v4 } from "uuid"
import { create } from "xmlbuilder2"

interface IPlayList {
   type: 'producer' | 'blank'
   id?: string
   in?: number | string
   out?: number | string
   length?: number
}
export class PlayList {
    private id = v4()
    private source: Array<IPlayList>;
    constructor(source: Array<IPlayList>) {
        this.source = source
    }
    public getId(): string {
        return this.id
    }
    public getNode(): string {
       const node = create().ele('playlist', {id: this.id})
           for (const item of this.source) {
               if(item.type === 'blank') {
                   node.ele('blank', {length: item.length})
               } else {
                   const attr:any = {producer: item.id}
                   if (item.in && item.out) {
                       attr.in = item.in.toString()
                       attr.out = item.out.toString()
                   } else if (item.length) {
                       attr.length = item.length
                   }
                   node.ele('entry', attr)
               }
           }
       return node.toString()
    }
}