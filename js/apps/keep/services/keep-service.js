import { storageService } from '../../../services/async-storage-service.js'
export const keepService = { query, post, remove, get, put }

const KEEP_KEY = 'notes'
var gNotes = [
    {
        id: 'f43f43f34f',

        type: "keep-note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!",
            title: 'moto',
        },
        style: {
            backgroundColor: 'blanchedalmond'
        }
    },
    {
        id: '34f34f43f',
        type: "keep-note-txt",

        isPinned: true,
        info: {
            txt: "Alexander Magnus!",
            title: 'nickname',
        },
        style: {
            backgroundColor: 'blanchedalmond'
        }
    },
    {
        id: '34f34f34',
        type: "keep-note-img",
        isPinned: false,
        info: {
            title: 'Knight',
            txt: "",
            imgUrl: 'https://ih1.redbubble.net/image.2054593603.1211/flat,128x,075,f-pad,128x128,f8f8f8.jpg'
        },
        style: {
            backgroundColor: 'white'
        },
    },
    {
        id: '43f34f34',
        type: "keep-note-txt",

        isPinned: true,
        info: {
            txt: "Remember this and this and this and that!",
            title: 'remember',
        },
        style: {
            backgroundColor: 'lightgreen'
        }
    },
    {
        id: '34f34f34f',

        type: "keep-note-txt",
        isPinned: false,
        info: {
            txt: "If things are hard it means you are going up!",
            title: 'motivation',
        },
        style: {
            backgroundColor: 'lightpink',

        }
    },
    {
        id: '34f34f',

        type: "keep-note-txt",
        isPinned: false,
        info: {
            txt: "lets try going down \n \n \n \n \n \n yeeeesssss 😁",
            title: 'expiriment',
        },
        style: {
            backgroundColor: 'lightblue'
        }
    },
    {
        id: '34f34f4f',
        type: "keep-note-img",
        title: 'poem',
        isPinned: false,
        info: {
            txt: "",
            imgUrl: 'https://image.flaticon.com/icons/png/128/753/753305.png',
            title: 'flower',
        },
        style: {
            backgroundColor: 'white'
        }
    },
    {
        id: 'f34f43f43',

        type: "keep-note-txt",
        isPinned: true,
        info: {
            txt: `"How happy is the blameless vestal's lot!
            The world forgetting, by the world forgot.
            Eternal sunshine of the spotless mind!
            Each pray'r accepted, and each wish resign'd;
           `,
            title: 'poem',
        },
        style: {
            backgroundColor: 'lightblue'
        }
    },

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

