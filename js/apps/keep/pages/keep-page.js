import { keepService } from '../services/keep-service.js'
import keepCreateNote from "../cmps/keep-create-note.js"
import keepNotesList from "../cmps/keep-notes-list.js"
import keepEditNote from "../cmps/keep-edit-note.js"

export default {
    template: `
    <section class="app-main">
    <keep-create-note @submit="addNote" ></keep-create-note>
    <keep-notes-list :notes="pinnedNotesToShow" @removeNote="removeNote" @pinNote="pinNote"></keep-notes-list>
    <keep-notes-list :notes="unPinnedNotesToShow" @removeNote="removeNote" @pinNote="pinNote"></keep-notes-list>
    <router-view @refresh="refresh" ></router-view>
    <br/>
    <!-- {{notes}} -->




    </section>
    `,
    data() {
        return {
            notes: [],
        }
    },
    created() {
        this.loadNotes()

    },
    computed: {
        pinnedNotesToShow() {
            return this.notes.filter(note => note.isPinned)
        },
        unPinnedNotesToShow() {
            return this.notes.filter(note => !note.isPinned)
        }

    },
    methods: {
        loadNotes() {
            keepService.query().then((notes) => {
                this.notes = notes
            })
        },
        addNote(note) {
            keepService.post(note).then(() => {
                this.loadNotes()
            })

        },
        refresh() {
            this.loadNotes()
        },
        removeNote(noteIdx) {
            keepService.remove(noteIdx).then(() => {
                this.loadNotes()
            })
        },
        pinNote(note) {
            note.isPinned = !note.isPinned;
            console.log(note)
            keepService.put(note).then(() => {
                this.loadNotes()
            })
        },


    },
    components: {
        keepCreateNote,
        keepNotesList,
        keepEditNote
    }
}