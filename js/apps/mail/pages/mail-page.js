import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.js'
export default {
    template: `
    <section class="app-main">
        <router-link to="/mail/compose">compose</router-link>
    <mail-list v-if="mails" :mails="mails" />

    <router-view @sent="sendMail"></router-view>
    <button @click="deleteMail">test</button>
    </section>
    `,
    data() {
        return {
            mails: null
        }

    },
    computed: {

    },
    methods: {
        sendMail(mail) {
            mailService.sendMail(mail).then(() => {
                mailService.query()
                    .then((mails) => {
                        this.mails = mails
                    })
            })

        },
        getMarkedMails() {
            return this.mails.filter((mail) => {                
                return mail.isMarked
            })
        },
        deleteMail() {
            const mailToDelete = this.getMarkedMails()            
            if(!mailToDelete.length || mailToDelete.length > 1) return            
            mailService.deleteMail(mailToDelete[0].id).then(() => {
                mailService.query()
                    .then((mails) => {
                        this.mails = mails
                    })
            })
        }
    },

    created() {
        mailService.query()
            .then((mails) => {
                this.mails = mails
                console.log(this.mails)
            })
    },
    components: {
        mailList
    }
}
