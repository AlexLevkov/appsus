import { keepService } from '../services/keep-service.js'
import keepCreateNote from "../cmps/keep-create-note.js"
import keepNotesList from "../cmps/keep-notes-list.js"
import keepEditNote from "../cmps/keep-edit-note.js"

export default {
    template: `
    <section class="app-main">
    <keep-create-note @submit="addNote" ></keep-create-note>
    <keep-notes-list :notes="notes" @removeNote="removeNote"></keep-notes-list>
    <router-view @refresh="refresh" ></router-view>
    <!-- <keep-edit-note></keep-edit-note> -->
    <br/>
    <!-- {{notes}} -->

    </section>
    `,
    data() {
        return {
            notes: null,
        }
    },
    created() {
        this.loadNotes()

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
        }
    },
    components: {
        keepCreateNote,
        keepNotesList,
        keepEditNote
    }
}