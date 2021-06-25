import { keepService } from '../services/keep-service.js'
import keepCreateNote from "../cmps/keep-create-note.js"
import keepNotesList from "../cmps/keep-notes-list.js"
import keepEditNote from "../cmps/keep-edit-note.js"
import keepFilter from "../cmps/keep-filter.js"

export default {
    template: `
    <section class="app-main">
    <keep-filter @filterBy="setFilter" ></keep-filter>
    <keep-create-note @submit="addNote" ></keep-create-note>
    <keep-notes-list :notes="pinnedNotesToShow" @removeNote="removeNote" @pinNote="pinNote"></keep-notes-list>
    <keep-notes-list :notes="unPinnedNotesToShow" @removeNote="removeNote" @pinNote="pinNote"></keep-notes-list>
    <router-view @refresh="refresh" ></router-view>
    <br/>
    {{filterBy}}
    </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: { text: '', type: '' }
        }
    },
    created() {
        this.loadNotes()

    },
    computed: {
        pinnedNotesToShow() {
            const searchStr = this.filterBy.text.toLowerCase()
            return this.notes.filter(note => {
                return note.info.title.toLowerCase().includes(searchStr) && note.isPinned && (this.filterBy.type === "" ? true : note.type === this.filterBy.type)
            })
        },
        unPinnedNotesToShow() {

            const searchStr = this.filterBy.text.toLowerCase()
            return this.notes.filter(note => {
                return note.info.title.toLowerCase().includes(searchStr) && !note.isPinned && (this.filterBy.type === "" ? true : note.type === this.filterBy.type)
            })

            return this.notes.filter(note => !note.isPinned)
        },


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
        setFilter(filter) {
            console.log('filterBy', filter)
            this.filterBy = filter
        }
    },
    components: {
        keepCreateNote,
        keepNotesList,
        keepEditNote,
        keepFilter
    }
}