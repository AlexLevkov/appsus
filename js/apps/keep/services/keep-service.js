import { storageService } from '../../../services/async-storage-service.js'
export const keepService = { query, post, remove, get, put }

const KEEP_KEY = 'notes'
var gNotes = [
    {
        id: 'hd8awehd9723',
        type: "keep-note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: 'blanchedalmond'
        }
    },
    {
        id: 'jf2809332f',
        type: "keep-note-txt",
        isPinned: true,
        info: {
            txt: "Alexander Magnus!"
        },
        style: {
            backgroundColor: 'blanchedalmond'
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


function remove(noteIdx) {
    return storageService.remove(KEEP_KEY, noteIdx)
}

function get(noteIdx) {
    return storageService.get(KEEP_KEY, noteIdx)
}

function put(note) {
    return storageService.put(KEEP_KEY, note)
}

