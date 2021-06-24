import { keepService } from '../services/keep-service.js'

export default {
    template: `
    <section>EDIT NOTE
        <button @click='FinishEdit' >Done</button>

        <div v-if="note">

            <!-- <section
            :style="{padding:'5px'
            ,width:'auto'
            ,height:'auto'
            ,'white-space':'pre-line',
            'text-align': 'left',
            'background-color': note.style.backgroundColor,
            }" 
            class="keep-txt-note"
        >   {{note.info.txt}}  
            </section> -->
            

            <textarea 
            v-model="note.info.txt"
            :style="{padding:'5px'
            ,width:'auto'
            ,height:'auto'
            ,'white-space':'pre-line',
            'text-align': 'left',
            'backgroundColor': note.style.backgroundColor,
            }" 
            name=""
            id=""
            cols="30"
            rows="10">
{{note.info.txt}}</textarea>

        </div>
 
        


        <!-- style="color:blue;text-align:center;" -->
        

    </section>
    `,
    data() {
        return {
            note: null,
            noteId: null

        }
    },
    created() {
        const { noteId } = this.$route.params;
        this.noteId = noteId
        keepService.get(noteId).then((note) => {
            this.note = note

        })
    },
    methods: {
        FinishEdit() {
            console.log('note', this.note);
            keepService.put(this.note).then(() => {
                this.$emit('refresh')
                this.$router.push('/keep')
            })
            // console.log('note', this.note);
            // keepService.put(this.noteId)


        }
    },
    components: {
        keepService

    }
}