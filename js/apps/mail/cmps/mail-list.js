import mailPreview from "./mail-preview.js"

export default {
    props: ['mails'],
    template: `
    <section class="mail-list" v-if="mails">           
        <mail-preview @mailDelete="mailDelete" v-for="mail in mails"  :key="mail.id" :mail="mail" />                            
    </section> `,
    components: {
        mailPreview
    },
    data() {

        return {
            // read: null,
            // unread: null,
            // total: null
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
        // readMails(){
        //     return this.totalMails - this.readMails
        // }
    },
    methods: {
        mailDelete(mailId) {
            // console.log('mailId:', mailId)
            this.$emit('mailDelete', mailId)
        }
    }
}


