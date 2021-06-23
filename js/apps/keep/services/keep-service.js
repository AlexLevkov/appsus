import { storageService } from '../../../services/async-storage-service.js'
export const keepService = { query, post }

const KEEP_KEY = 'notes'
var gNotes = [
    {
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Alexander Magnus!"
        }
    }
]

function query() {
    return storageService.query(KEEP_KEY).then((notes) => {
        if (notes.length)
            return notes
        else {
            return storageService.postMany(KEEP_KEY, gNotes)
        }
    })
}

function post(note) {
    return storageService.post(KEEP_KEY, note)
}