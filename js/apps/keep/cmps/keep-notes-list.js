import keepNoteTxt from './keep-note-txt.js'

export default {
    props: ["notes"],
    template: `
        <section >
            <div class="notes-container">
                <div 
                     
                    v-for="note in notes" >
                    <button @click="editNote(note)">EDIT</button>
                    <button @click="removeNote(note)">X</button>
                    <component :is="type" :note="note" ></component> 
                </div>
            </div>
        </section>
    

    `,
    data() {
        return {
            type: "keep-note-txt"
        }
    },
    methods: {

        removeNote(note) {
            this.$emit('removeNote', note.id)

        },
        editNote(note) {
            this.$router.push('/keep/' + note.id)
        }


    },
    components: {
        keepNoteTxt

    },


}

