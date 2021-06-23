import keepNoteTxt from './keep-note-txt.js'

export default {
    props: ["notes"],
    template: `
    
        <section >
     

        <component :is="type" :notes="notes" ></component> 
        <!-- <div v-for="note in notes" >{{note.info.txt}}</div> -->
        </section>
    

    `,
    data() {
        return {
            type: "keep-note-txt"
        }
    },
    methods: {

    },
    components: {
        keepNoteTxt

    },


}