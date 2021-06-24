import { keepService } from '../services/keep-service.js'

export default {
    template: `
    <section>
        
        <div v-if="note" class="edit-container">
            <button @click='FinishEdit' >Done</button>
        <textarea 
            
            v-model="note.info.title"
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
            rows="1">
            {{note.info.title}}
        </textarea>

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
            {{note.info.title}}
            {{note.info.txt}}
        </textarea>

        </div>

     

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