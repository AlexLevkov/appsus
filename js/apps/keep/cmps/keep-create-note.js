import { keepService } from '../services/keep-service.js'

export default {
    template: `
    <section class="keep-create-note">

        <form class="keep-notes-form" @submit.prevent="onSubmit">

            <input type="text" placeholder="Enter Note Title" v-model="note.info.title">

            <input v-if="isAddImg" 
            type="text" placeholder="Enter Img Url" v-model="note.info.imgUrl">
            
            <input v-if="isAddVideo" 
            type="text" placeholder="Enter Youtube Url" v-model="note.info.videoUrl">

            <textarea  
            v-if="isAddNote"
            placeholder="Enter Note Text" 
            v-model="note.info.txt" 
            cols="20" rows="5">
            </textarea>

            <textarea  
            v-if="isAddToDo"
            placeholder="Enter To Do List" 
            v-model="note.info.txt" 
            cols="20" rows="5">
            </textarea>

            <button>create note</button>

         </form>
         
        <button>
            <img class="paint" src="./icons/paint-board-and-brush.png">
            <select 
            :style="{color:note.style.backgroundColor}"
            v-model="note.style.backgroundColor" 
            name="colors" 
            id="colors">

            <option :style="{color:'lightblue'}" value="lightblue">⬤</option>
            <option :style="{color:'lightgreen'}" value="lightgreen">⬤</option>
            <option :style="{color:'lightgrey'}" value="lightgrey">⬤</option>
            <option :style="{color:'lightpink'}" value="lightpink">⬤</option>
            <option :style="{color:'blanchedalmond'}" value="blanchedalmond">⬤</option>
            </select>
        </button>

        <button @click="addNote" >add note</button>
        <button @click="addTodo" >add a to do list</button>
        <button @click="addImg" >add img</button>
        <button @click="addVideo" >add video</button>

    </section>
    `,
    data() {
        return {
            note: {
                type: null,
                info:
                {
                    title: null,
                    txt: null,
                    imgUrl: null,
                },
                style:
                {
                    backgroundColor: 'blanchedalmond'
                },
                isPinned: false

            },
            isAddImg: false,
            isAddVideo: false,
            isAddNote: true,
            isAddToDo: false,

        }
    },
    methods: {
        onSubmit() {

            if (this.isAddNote) {
                this.note.type = 'keep-note-txt'
            } else if (this.isAddImg) {
                this.note.type = 'keep-note-img'
            } else if (this.isAddVideo) {
                this.note.type = 'keep-note-video'
            } else if (this.isAddToDo) {
                this.note.type = 'keep-note-to-do'
            }


            const noteCopy = JSON.parse(JSON.stringify(this.note))
            this.$emit('submit', noteCopy)
            // setTimeout(() => {
            this.note.info.txt = null;
            this.note.info.title = null;
            // }, 1000);

        },
        addImg() {
            console.log('addImg')
            this.isAddToDo = false
            this.isAddNote = false
            this.isAddVideo = false
            this.isAddImg = true
        },
        addVideo() {
            console.log('addVideo')
            this.isAddToDo = false
            this.isAddNote = false
            this.isAddImg = false
            this.isAddVideo = true
        },
        addNote() {
            console.log('addNote')
            this.isAddToDo = false
            this.isAddImg = false
            this.isAddVideo = false
            this.isAddNote = true
        },
        addTodo() {
            this.isAddImg = false
            this.isAddVideo = false
            this.isAddNote = false
            this.isAddToDo = true

        }
    },

    components: {

    }
}