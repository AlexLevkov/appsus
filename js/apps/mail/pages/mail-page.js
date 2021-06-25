import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.js'
import mailActions from '../cmps/mail-actions.js'
import mailFilter from '../cmps/mail-filter.js';
import mailSort from '../cmps/mail-sort.js'
import { eventBus } from '../services/mail-eventBus.js';


export default {
    template: `
    <section class="app-main mail-main"> 
        <div class="mail-logo">Logo</div>       
        <div class="mail-main-actionbar">
            <router-link class="mail-compose" to="/mail/compose">Compose</router-link>            
            <mail-sort @sortBy="setSortBy" />
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
            filterBy: null,
            sortBy: 'inBox'
        }

    },
    computed: {
        mailsToShow() {
            if (!this.filterBy && this.sortBy === 'inBox') return this.mails
            if (!this.filterBy && this.sortBy === 'sent') {
                return this.mails.filter((mail) => {
                    return mail.isSent
                })
            }
            let sortedMails;
            if (this.sortBy === 'inBox') sortedMails = this.mails
            if (this.sortBy === 'sent') {
                sortedMails = this.mails.filter((mail) => {
                    return mail.isSent
                })
            }
            const searchStr = this.filterBy.mailTitle.toLowerCase()
            let filterdByTitle = sortedMails.filter(mail => {
                return mail.title.toLowerCase().includes(searchStr)
            })
            if (this.filterBy.timeRecived) {
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
            mailService.sendMail(mail).then(() => {
                eventBus.$emit('show-msg', 'Mail Sent')
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
                        eventBus.$emit('show-msg', 'Mail deleted')
                    })
            })
        },
        setfilterBy(filter) {
            console.log(filter)
            this.filterBy = filter
        },

        setSortBy(sortBy) {
            if (sortBy.isInbox) this.sortBy = 'inBox'
            if (!sortBy.isInbox) this.sortBy = 'sent'

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
        mailList,
        mailActions,
        mailFilter,
        mailSort,

    }
}
