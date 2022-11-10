import { type IPlayList, PlayList } from './PlayList'

interface IInOut {
    in: string | number
    out: number
}

export function computePosition(fps: number, time: string) {
    const timeArray: Array<string> = time.split(':')
    return ((60 * 60 * parseInt(timeArray[0], 10)) + (60 * parseInt(timeArray[1], 10)) + parseInt(timeArray[2], 10)) * fps
}

export function buildPlayList(source: string, frame: IInOut[]) {
    const listArray: Array<IPlayList> = []
    for (const item of frame) {
        if (typeof item.in === 'number') {
            listArray.push({
                type: 'producer',
                id: source,
                in: item.in,
                out: item.out
            })
            continue
        }
        listArray.push({
            type: 'producer',
            id: source,
            in: computePosition(60, item.in),
            out: computePosition(60, `0:0:${item.out}`) + computePosition(60, item.in)
        })
    }
    return new PlayList(listArray)
}