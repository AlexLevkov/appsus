import { keepService } from '../services/keep-service.js'

export default {
    template: `
    <section class="keep-create-note">

        <form @submit.prevent="onSubmit">

            <textarea v-model="note.info.txt" name="" id="" cols="30" rows="10"></textarea>

            {{note.info.txt}}

            <!-- <input 
            v-model="note.info.txt" class="keep-input" type="text" placeholder="Enter Note">
            -->
            <button>create note</button>
         </form>

        <button>
            <img class="paint" src="./icons/paint-board-and-brush.png">
            <select name="colors" id="colors">
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            </select>
        </button>

    </section>
    `,
    data() {
        return {
            note: {
                info:
                {
                    txt: null
                }

            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submmit');
            this.$emit('submit', this.note)
        }
    },

    components: {

    }
}