export default {
    template: `
    <section class="keep-create-note">
    <form @submit.prevent="onSubmit">
    <input v-model="txt" class="keep-input" type="text" placeholder="Enter Note">
    <button>create note</button>
    </form>
    </section>
    `,
    data() {
        return {
            txt: ''
        }
    },
    methods: {
        onSubmit() {
            console.log('submmited');
            console.log('this.txt', this.txt);
        }
    },

    components: {

    }
}