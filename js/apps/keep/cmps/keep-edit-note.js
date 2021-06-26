import { keepService } from '../services/keep-service.js'
import { eventBus } from "./keep-event-bus.js"

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
            cols="30"
            rows="1">
  
        </textarea>

        <textarea 
            v-if="note.info.txt"
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
   
            
        </textarea>

        <textarea 
            v-if="note.info.imgUrl"
            v-model="note.info.imgUrl"
            :style="{padding:'5px'
            ,width:'auto'
            ,height:'auto'
            ,'white-space':'pre-line',
            'text-align': 'left',
            'backgroundColor': note.style.backgroundColor,
            }" 
            name=""
            id=""
             >
         
            
        </textarea>

        <textarea 
            v-if="note.info.videoUrl"
            v-model="note.info.videoUrl"
            :style="{padding:'5px'
            ,width:'auto'
            ,height:'auto'
            ,'white-space':'pre-line',
            'text-align': 'left',
            'backgroundColor': note.style.backgroundColor,
            }" 
            name=""
            id=""
             >
         
             <!-- v-model="note.info.toDoList[0].toDo" -->
            
        </textarea>

        <section v-if="note.info.toDoList" v-for="task in note.info.toDoList">
            <textarea 
                v-model="task.toDo"
                :style="{padding:'5px'
                ,width:'auto'
                ,height:'auto'
                ,'white-space':'pre-line',
                'text-align': 'left',
                'backgroundColor': note.style.backgroundColor,
                'display': 'inherit'
                }" 
                cols="38"
                rows="1">
                >
            </textarea>

        </section>



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
            eventBus.$emit('toggleBlackScreen')
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