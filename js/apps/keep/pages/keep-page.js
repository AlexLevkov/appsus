import { keepService } from '../services/keep-service.js'
import keepCreateNote from "../cmps/keep-create-note.js"
import keepNotesList from "../cmps/keep-notes-list.js"

export default {
    template: `
    <section class="app-main">
    <keep-create-note @submit="addNote" ></keep-create-note>
    <keep-notes-list :notes="notes" ></keep-notes-list>
    <br/>
    {{notes}}
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
            console.log('loadNotes')
            keepService.query().then((notes) => {
                this.notes = notes
            })
        },
        addNote(note) {
            keepService.post(note).then(() => {
                this.loadNotes()
            })
        }
    },
    components: {
        keepCreateNote,
        keepNotesList
    }
}