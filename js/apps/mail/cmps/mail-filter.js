export default {
    template: `
    <section class="mail-filter">
        <label class="mail-search">
            <input v-model="filterBy.mailTitle" type="text" @input="filter" placeholder="Search...">
        </label>
        
        <div class="mail-filter-nav">
            <span @click="deleteMails" ><i class="fa-regular fa-trash-can"></i></span>         
            <label :class="{ active: filterBy.isRead }">Unread only
                <input v-model="filterBy.isRead" id="a" type="checkbox" @input="filter">
            </label>
            <label :class="{ active: filterBy.timeRecived }" >Sort by Date
                <input v-model="filterBy.timeRecived" id="a" type="checkbox" @input="filter">
            </label>   
        </div>
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
            this.$emit('filtered', this.filterBy);
        },
        deleteMails() {
            this.$emit('deleteMails')
        }
    }
};