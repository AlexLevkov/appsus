import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.js'
import mailActions from '../cmps/mail-actions.js'
import mailFilter from '../cmps/mail-filter.js';
export default {
    template: `
    <section class="app-main mail-main"> 
        <div class="mail-logo">Logo</div>       
        <div class="mail-main-actionbar">
            <router-link class="mail-compose" to="/mail/compose">compose</router-link>            
            <mail-actions @removeMail="deleteMail" @sent="sendMail"  />
        </div>
        <mail-filter @filtered="setfilterBy"/>
        <mail-list  v-if="mails" :mails="mailsToShow" />

        <router-view @sent="sendMail"></router-view>
        <!-- <button @click="deleteMail">test</button> -->
    </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: null
        }

    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails

            const searchStr = this.filterBy.mailTitle.toLowerCase()
            let filterdByTitle = this.mails.filter(mail => {
                return mail.title.toLowerCase().includes(searchStr)
            })
            if (this.filterBy.timeRecived) {
                console.log('sorting')
                filterdByTitle.sort((a, b) => {
                    return (a.timeCreated < b.timeCreated) ? 1 : -1
                })
            }
            if (!this.filterBy.isRead) return filterdByTitle
            let filterdByRead = filterdByTitle.filter(mail => {
                return !mail.isRead
            })

            return filterdByRead
        }

    },

    methods: {
        sendMail(mail) {
            console.log(mail)
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
            if (!mailToDelete.length || mailToDelete.length > 1) return
            mailService.deleteMail(mailToDelete[0].id).then(() => {
                mailService.query()
                    .then((mails) => {
                        this.mails = mails
                    })
            })
        },
        setfilterBy(filter) {
            console.log(filter)
            this.filterBy = filter
        },

    },

    created() {
        mailService.query()
            .then((mails) => {
                this.mails = mails
                console.log(this.mails)
            })
    },
    components: {
        mailList,
        mailActions,
        mailFilter
    }
}
