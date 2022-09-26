import { mailService } from '../services/mail-service.js';
import mailList from '../cmps/mail-list.js'

import mailFilter from '../cmps/mail-filter.js';
import mailSort from '../cmps/mail-sort.js'
import { eventBus } from '../services/mail-eventBus.js';


export default {
    template: `
    <section class="app-main mail-main">
        <div class="mail-main-side-bar">
            <div class="mail-logo"><img src="./icons/user.png" alt=""></div>       
            <div class="mail-main-actionbar">
                <router-link class="mail-compose-link" to="/mail/compose">Compose</router-link>            
                <mail-sort v-if="mails" :mails="mails" @sortBy="setSortBy" />
            </div>
        </div>
        <div class="mail-main-container">
            <mail-filter @deleteMails="deleteMails" @filtered="setfilterBy"/>
            <mail-list @mailDelete="mailDelete"  v-if="mails" :mails="mailsToShow" />
        </div> 
        <router-view @sent="sendMail"></router-view>    

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
            if (!this.filterBy && this.sortBy === 'inBox')
                return this.mails.filter((mail) => {
                    return !mail.isSent
                })
            if (!this.filterBy && this.sortBy === 'sent') {
                return this.mails.filter((mail) => {
                    return mail.isSent
                })
            }
            if (!this.filterBy && this.sortBy === 'fav') {
                return this.mails.filter((mail) => {
                    return mail.isFav
                })
            }
            let sortedMails;
            if (this.sortBy === 'inBox') sortedMails = this.mails.filter((mail) => {
                return !mail.isSent
            })
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
                return !mail.isRead && !mail.isSent
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
        mailDelete(mailId) {
            console.log('mailId:', mailId)
            mailService.deleteMail(mailId)
                .then(() => mailService.query())
                .then(mails => this.mails = mails
                )

        },
        getMarkedMails() {
            return this.mails.filter((mail) => {
                return mail.isMarked
            })
        },
        deleteMails() {
            console.log('deleteMails')
            const mailsToDelete = this.getMarkedMails()
            console.log('mailsToDelete:', mailsToDelete)
            if (!mailsToDelete.length) return

            mailsToDelete.forEach((mail) => {
                setTimeout(() => {
                    mailService.deleteMail(mail.id)
                        .then(() => mailService.query())
                        .then(mails => this.mails = mails
                        )
                }, 10)
            })



            // mailService.deleteMail(mailToDelete[0].id).then(() => {
            //     mailService.query()
            //         .then((mails) => {
            //             this.mails = mails
            //             eventBus.$emit('show-msg', 'Mail deleted')
            //         })
            // })
        },

        setfilterBy(filter) {
            this.filterBy = filter
        },

        setSortBy(sortBy) {
            console.log('sortBy:', sortBy)
            if (sortBy.isInbox) this.sortBy = 'inBox'
            if (sortBy.isSent) this.sortBy = 'sent'
            if (sortBy.isFav) this.sortBy = 'fav'

        }

    },

    created() {
        mailService.query()
            .then((mails) => {
                this.mails = mails
            })
    },
    components: {
        mailList,
        mailFilter,
        mailSort,

    }
}
