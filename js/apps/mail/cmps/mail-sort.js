export default {
    props: ['mails'],
    template: `
<section class="mail-sort">
    <div class="mail-sort-item">
        <button @click="setSortBy(1)">Inbox <span>({{unreadMails}})</span></button>
    </div>
    <div class="mail-sort-item">
        <button @click="setSortBy(-1)">Sent</button>
    </div>
    <div class="mail-sort-item">
        <button @click="setSortBy('fav')">Favorites</button>
    </div>
</section>
`,
    data() {
        return {
            sortBy: {
                isInbox: true,
                isSent: false,
                isFav: false
            }
        }
    },
    methods: {
        setSortBy(param) {
            console.log('param:', param)
            if (param === 'fav') {
                this.sortBy.isInbox = false
                this.sortBy.isSent = false
                this.sortBy.isFav = true
            }
            if (param === 1) {
                this.sortBy.isInbox = true
                this.sortBy.isSent = false
                this.sortBy.isFav = false
            }
            if (param === -1) {
                this.sortBy.isInbox = false
                this.sortBy.isSent = true
                this.sortBy.isFav = false
            }
            this.$emit('sortBy', this.sortBy)
        }
    },
    computed: {
        totalMails() {
            return this.mails.length
        },
        unreadMails() {
            let unread = 0
            this.mails.forEach((mail) => {
                if (!mail.isRead) {
                    unread++
                }
            });
            return unread
        },
    }
}