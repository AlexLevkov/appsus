import keepNoteTxt from './keep-note-txt.js'
import keepNoteImg from './keep-note-img.js'
import keepNoteToDo from './keep-note-to-do.js'
import keepNoteVideo from './keep-note-video.js'

export default {
    props: ["notes"],
    template: `
   נ     <section >
            <div class="notes-container">
                <div class="keep-note-container"
                    v-for="note in notes" >
                        <div class="keep-note-edit-btns">
                            <button title="remove" @click="removeNote(note)">❌</button>
                            <button title="edit" @click="editNote(note)">🧰</button>
                            <button title="pin" @click="pinNote(note)">📌</button>
                        </div>
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

            this.$emit('pinNote', note)
        }


    },
    components: {
        keepNoteTxt,
        keepNoteImg,
        keepNoteToDo,
        keepNoteVideo

    },


}

