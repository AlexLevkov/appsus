import { storageService } from '../../../services/async-storage-service.js'
export const keepService = { query, post, remove, get, put }

const KEEP_KEY = 'notes'
var gNotes = [
    {
        id: 'f43f43f34f',

        type: "keep-note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Baby!",
            title: 'Life Goal',
        },
        style: {
            backgroundColor: 'blanchedalmond'
        }
    },
    {
        id: '34f34f43f',
        type: "keep-note-txt",

        isPinned: false,
        info: {
            txt: `Chuck Norris doesn’t read books. 
            He stares them down until he gets the information he wants.
            Time waits for no man. Unless that man is Chuck Norris.
            If you spell Chuck Norris in Scrabble, you win. Forever.
            Chuck Norris breathes air … five times a day.
            In the Beginning there was nothing … 
            then Chuck Norris roundhouse kicked nothing and told it to get a job.`,
            title: 'Chuck Norris',
        },
        style: {
            backgroundColor: 'blanchedalmond'
        }
    },
    {
        id: '34f34f34',
        type: "keep-note-img",
        isPinned: true,
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
            title: 'Remember',
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
            title: 'Motivation',
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
            title: 'Expiriment',
        },
        style: {
            backgroundColor: 'lightblue'
        }
    },
    {
        id: '34f34f4f',
        type: "keep-note-img",

        isPinned: false,
        info: {
            txt: "",
            imgUrl: 'https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_1280.jpg',
            title: 'Sunflower',
        },
        style: {
            backgroundColor: 'blanchedalmond'
        }
    },
    {
        id: 'f34f43f43',

        type: "keep-note-txt",
        isPinned: false,
        info: {
            txt: `"How happy is the blameless vestal's lot!
            The world forgetting, by the world forgot.
            Eternal sunshine of the spotless mind!
            Each pray'r accepted, and each wish resign'd;
           `,
            title: 'Poem',
        },
        style: {
            backgroundColor: 'lightblue'
        }
    },
    {
        "type": "keep-note-video",
        "info": {
            "title": "Vue Course",
            "txt": "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
            "imgUrl": null,
            "videoUrl": "https://www.youtube.com/embed/qZXt1Aom3Cs",
            "toDoList": null,
            "isMarked": false
        },
        "style": {
            "backgroundColor": "lightgreen"
        },
        "isPinned": true,
        "id": "bTIsS"
    },
    {
        id: '4315134t34',

        type: "keep-note-to-do",
        isPinned: true,
        info: {
            txt: null,
            title: 'Web Development',

            // , Learn React, Learn Angular'

            toDoList: [
                { toDo: 'Learn HTML', isMarked: true },
                { toDo: 'Learn CSS', isMarked: false },
                { toDo: 'Learn JS', isMarked: false },
            ]
        },
        style: {
            backgroundColor: 'lightpink'
        }
    },
    {
        id: '4315134t34',

        type: "keep-note-to-do",
        isPinned: true,
        info: {
            txt: null,
            title: 'JS Frameworks',

            // , Learn React, Learn Angular'

            toDoList: [
                { toDo: 'Learn Vue', isMarked: false },
                { toDo: 'Learn React', isMarked: false },
                { toDo: 'Learn Angular', isMarked: false },
            ]
        },
        style: {
            backgroundColor: 'lightblue'
        }
    },
    {
        id: 'f34f43afaf32f43',

        type: "keep-note-txt",
        isPinned: false,
        info: {
            txt: `“The best time to plant a tree was 20 years ago. 
            The second best time is now.” – Chinese Proverb
           `,
            title: 'Motivation',
        },
        style: {
            backgroundColor: 'lightgreen'
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

