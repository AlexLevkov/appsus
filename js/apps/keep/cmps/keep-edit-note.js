import { keepService } from '../services/keep-service.js'
import { eventBus } from "./keep-event-bus.js"

export default {
    template: `
    <section>
        
        <div v-if="note" class="edit-container">
   
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
        
        <div class="keep-note-editor-container">
        <button class="keep-subbmit-btn" @click='FinishEdit' >Done</button>
        <button class='paint-select-btn create-note-btn'>
                            <!-- <img class="paint-icon" src="./icons/paint-board-and-brush.png"> -->

                            <select 
                            class="paint-select"
                            :style="{color:note.style.backgroundColor}"
                            v-model="note.style.backgroundColor" 
                            name="colors" 
                            id="colors">
                            
                            <option :style="{color:'lightblue'}" value="lightblue">⬤</option>
                            <option :style="{color:'lightgreen'}" value="lightgreen">⬤</option>
                            <option :style="{color:'lightgrey'}" value="lightgrey">⬤</option>
                            <option :style="{color:'lightpink'}" value="lightpink">⬤</option>
                            <option :style="{color:'blanchedalmond'}" value="blanchedalmond">⬤</option>
                            <option :style="{color:'white'}" value="white">⬤</option>
                            </select>
                    </button>
        </div>
  
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
        const backGroundEl = document.querySelector('.keep-background')
        backGroundEl.classList.add('keep-black-screen');

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
            const backGroundEl = document.querySelector('.keep-background')
            backGroundEl.classList.remove('keep-black-screen');

        }
    },
    components: {
        keepService

    }
}