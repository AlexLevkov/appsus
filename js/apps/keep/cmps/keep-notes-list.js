import keepNoteTxt from './keep-note-txt.js'

export default {
    props: ["notes"],
    template: `
    <!-- break-spaces RVW --> 
        <section >
            <div class="notes-container">
                <div 
                     
                    v-for="note in notes" >
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
            console.log('delete')
            console.log(note.id)
            this.$emit('removeNote', note.id)

        }


    },
    components: {
        keepNoteTxt

    },


}