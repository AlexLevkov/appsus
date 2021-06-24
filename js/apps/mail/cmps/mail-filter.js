export default{
    template: `
    <section class="mail-filter">
        <label>Read:</label>
        <input v-model="filterBy.isRead" type="checkbox" @input="filter">
        <label>time:</label>
        <input v-model="filterBy.timeRecived" type="checkbox" @input="filter">
        <label>Search:</label>
        <input v-model="filterBy.mailTitle" type="text" @input="filter" placeholder="Search...">
        <button @click="filter">By time</button>
    </section>
    `,
    data() {
        return {
            filterBy: {
                mailTitle: '',
                isRead: false,
                timeRecived: true
            }
        };
    },
    methods: {
        filter() {
            // console.log('filtering...', this.filterBy)
            this.$emit('filtered', this.filterBy);
        }
    }
};