export default {
    template: `
<section class="mail-sort">
    <div class="mail-sort-item">
        <button @click="setSortBy(1)">Inbox</button>
    </div>
    <div class="mail-sort-item">
        <button @click="setSortBy(-1)">Sent</button>
        
    </div>
</section>
`,
    data() {
        return {
            sortBy: {
                isInbox: true,
                isSent: false
            }
        }
    },
    methods: {
        setSortBy(param) {
            if (param === 1) {
                this.sortBy.isInbox = true
                this.sortBy.isSent = false

            } else {
                this.sortBy.isInbox = false
                this.sortBy.isSent = true
            }
            this.$emit('sortBy', this.sortBy)
        }
    }
}