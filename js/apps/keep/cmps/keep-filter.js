export default {

    template: `
    <section class="keep-filter">
        <div class="keep-filter-box">
            <input class="keep-input-filter" placeholder="search" v-model="filter.text" type="search" @input="search">
            <select class="keep-select-filter" v-model="filter.type" @input="search">
                <option value="">All</option>
                <option value="keep-note-txt">Text</option>
                <option value="keep-note-img">Image</option>
                <option value="keep-note-video">Video</option>
                <option value="keep-note-to-do">To Do List</option>
            </select>
        </div>
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

