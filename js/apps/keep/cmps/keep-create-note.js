import { keepService } from '../services/keep-service.js'

export default {
    template: `
    <section class="keep-create-note">
    <form @submit.prevent="onSubmit">
    <input v-model="note.info.txt" class="keep-input" type="text" placeholder="Enter Note">
    <button>create note</button>
    </form>
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