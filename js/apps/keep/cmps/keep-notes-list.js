import keepNoteTxt from './keep-note-txt.js'
import keepNoteImg from './keep-note-img.js'

export default {
    props: ["notes"],
    template: `
        <section >
            <div class="notes-container">
                <div 
                     
                    v-for="note in notes" >
                    <button @click="editNote(note)">EDIT</button>
                    <button @click="removeNote(note)">X</button>
                    <button @click="pinNote(note)">Pin</button>
                    <component :is="note.type" :note="note" ></component> 
                </div>
            </div>
        </section>
    

    `,
    data() {
        return {

            // type: "keep-note-img"
            // type: "keep-note-txt"
        }
    },
    methods: {

        removeNote(note) {
            this.$emit('removeNote', note.id)

        },
        editNote(note) {
            this.$router.push('/keep/' + note.id)
        },
        pinNote(note) {
            note.isPinned = !note.isPinned;
            this.$emit('pinNote', note)
        }


    },
    components: {
        keepNoteTxt,
        keepNoteImg

    },


}

