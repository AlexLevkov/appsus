import { keepService } from '../services/keep-service.js'

export default {
    template: `
    <section class="keep-create-note">

        <form @submit.prevent="onSubmit">

            <textarea  
            placeholder="Enter Note" 
            v-model="note.info.txt" 
            name="" id="" 
            cols="20" rows="5">
            </textarea>
  
            <button>create note</button>
         </form>
         <!-- :style="{padding:'5px',width:'auto',height:'auto' -->
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
    {{note.style.backgroundColor}}
    </section>
    `,
    data() {
        return {
            note: {
                info:
                {
                    txt: null
                },
                style:
                {
                    backgroundColor: 'blanchedalmond'
                }

            },

        }
    },
    methods: {
        onSubmit() {
            const noteCopy = JSON.parse(JSON.stringify(this.note))
            this.$emit('submit', noteCopy)
            // setTimeout(() => {
            this.note.info.txt = null;
            // }, 1000);

        }
    },

    components: {

    }
}