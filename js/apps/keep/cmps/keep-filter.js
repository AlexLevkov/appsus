export default {

    template: `
    <section class="keep-filter">
        <input v-model="filter.text" type="text" @input="search">
        
        <select v-model="filter.type">
            <option value="">All</option>
            <option value="keep-note-txt">Text</option>
            <option value="keep-note-img">Image</option>
            <option value="keep-note-video">Video</option>
            <option value="keep-note-to-do">To Do List</option>
        </select>
    </section>
    `,
    data() {
        return {
            filter: {
                text: '',
                type: ''
            }
        }
    },

    methods: {
        search() {
            console.log('search');
            this.$emit('filterBy', this.filter)
        }
    }


}

