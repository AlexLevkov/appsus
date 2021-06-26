import { keepService } from '../services/keep-service.js'
import { eventBus } from './keep-event-bus.js'

export default {
    template: `
    <section >

    <div class="keep-create-note">

        <form id="my-form" class="keep-notes-form" @submit.prevent="onSubmit">
        

            <input :style="{backgroundColor:note.style.backgroundColor}" class="keep-input-title"
            type="text" placeholder="Enter Note Title" v-model="note.info.title">

            <input v-if="isAddImg" :style="{backgroundColor:note.style.backgroundColor}" class="keep-input-img"
            type="text" placeholder="Enter Img Url" v-model="note.info.imgUrl">
            
            <input v-if="isAddVideo" :style="{backgroundColor:note.style.backgroundColor}" class="keep-input-video"
            type="text" placeholder="Enter Youtube Url" v-model="note.info.videoUrl">

            <textarea  
            v-if="isAddNote" :style="{backgroundColor:note.style.backgroundColor}"  class="keep-input-title"
            placeholder="Enter Note Text" 
            v-model="note.info.txt" 
            cols="20" rows="5">
            </textarea>

            <textarea  
            v-if="isAddToDo" :style="{backgroundColor:note.style.backgroundColor}" class="keep-input-to-do"
            placeholder="Enter To Do List Separated With Commas" 
            v-model="note.info.txt" 
            cols="20" rows="5">
            </textarea>

      

         </form>
         
         

        <div class="create-note-btns">

            <div class="submit-btn-container">
                   <button class="keep-subbmit-btn" form="my-form" ref="subbmitBtn">Add Note</button>
            </div>
    
            <div class="keep-design-btns">

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

                            <button title="add note" class="add-note create-note-btn" @click="addNote"></button>
                            <button title="add to do list" class="add-todo create-note-btn" @click="addTodo"></button>
                            <button title="add image" class="add-img create-note-btn" @click="addImg"></button>
                            <button title="add video" class="add-video create-note-btn" @click="addVideo"></button>


            </div>

    

        </div>
     
    </div>
      
    </section>
    `,
    data() {
        return {
            note: {
                type: null,
                info:
                {
                    title: '',
                    txt: null,
                    imgUrl: null,
                    videoUrl: '',
                    toDoList: null,
                    isMarked: false
                },
                style:
                {
                    backgroundColor: 'white'
                },
                isPinned: false

            },
            isAddImg: false,
            isAddVideo: false,
            isAddNote: true,
            isAddToDo: false,
            subbmitBtn: 'submit'

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

            if (this.isAddToDo) {
                this.createToDoList()
            } else if (this.isAddVideo) {
                this.createVideoUrl()
            }

            if (!this.note.info.title) {
                alert('Please Enter a Title for the Note')
                this.note.info.txt = null;
                this.note.info.title = null;
                this.note.info.imgUrl = null;
                this.note.info.videoUrl = null;
                this.note.info.toDoList = null;

                return
            }

            const noteCopy = JSON.parse(JSON.stringify(this.note))
            this.$emit('submit', noteCopy)
            // copy was made to prevent sending a null text due to async
            this.note.info.txt = null;
            this.note.info.title = null;
            this.note.info.imgUrl = null;
            this.note.info.videoUrl = null;
            this.note.info.toDoList = null;




        },
        addImg() {
            console.log('addImg')
            this.isAddToDo = false
            this.isAddNote = false
            this.isAddVideo = false
            this.isAddImg = true
            this.$refs.subbmitBtn.innerText = 'Add Image'
        },
        addVideo() {
            console.log('addVideo')
            this.isAddToDo = false
            this.isAddNote = false
            this.isAddImg = false
            this.isAddVideo = true
            this.$refs.subbmitBtn.innerText = 'Add Video'
        },
        addNote() {
            console.log('addNote')
            this.isAddToDo = false
            this.isAddImg = false
            this.isAddVideo = false
            this.isAddNote = true
            this.$refs.subbmitBtn.innerText = 'Add Note'
        },
        addTodo() {
            this.isAddImg = false
            this.isAddVideo = false
            this.isAddNote = false
            this.isAddToDo = true
            this.$refs.subbmitBtn.innerText = 'Add To Do List'
        },
        createToDoList() {

            this.note.info.toDoList = this.note.info.txt.split(',')
            this.note.info.toDoList = this.note.info.toDoList.map((toDo) => { return { isMarked: false, toDo } })
            console.log(this.note.info.toDoList)
            this.note.info.txt = null
        },
        createVideoUrl() {
            console.log('createVideoUrl');
            console.log('this.videoUrl', this.note.info.videoUrl);
            // console.log('this.note.info.txt', this.note.info.txt);
            // this.videoUrl = this.note.info.txt

            const idx = this.note.info.videoUrl.indexOf('=')
            console.log('idx', idx);
            const strHtml = this.note.info.videoUrl.slice(idx + 1, idx + 12)
            // const strHtml = 'V7ZVZTGvefQ'
            console.log('strHtml', strHtml);


            this.note.info.videoUrl = `https://www.youtube.com/embed/${strHtml}`

            // `https://www.youtube.com/embed/V7ZVZTGvefQ`

            console.log('this.videoUrl', this.videoUrl);
        },

    },
}

