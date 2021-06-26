import { mailService } from '../services/mail-service.js'
import { eventBus } from '../services/mail-eventBus.js'

export default {
    template: `
    <section v-if="mail" class="app-main">
        <div class="mail-details-container">
            <h2 class="mail-details-header">{{mail.title}}</h2>
            <p class="mail-details-text">{{mail.mainTxt}}</p>
            <article class="mail-details-text" v-if="mail.replies">
                <div v-for="reply in mail.replies" >
                    <hr />
                    <p>{{timeSent}}</p>
                    <br />
                    <p>{{reply.txt}}</p>
                    
                </div>
            </article>    
        </div>
        <div class="mail-replay-actions">
            <button class="mail-replay-btn" @click="openReply">Reply</button>
            <router-link class="mail-details-Back" to="/mail">Back to mail</router-link>
        </div>
    <div class="mail-reply-container" v-if="isReply">
        <h3>Your Reply</h3>
        <textarea v-model="replyTxt" cols="50" rows="10" placeholder="reply"></textarea>
        <div class="mail-replay-btns">
            <button class="mail-details-reply-btn" @click="reply"></button>
            <button class="mail-details-cancle-btn" @click="openReply"></button>

        </div>

    </div>

    </section>
    `,
    data() {
        return {
            mail: null,
            isReply: false,
            replyTxt: ''
        }
    },

    methods: {
        openReply() {
            this.isReply = !this.isReply
        },
        reply() {
            if (!this.replyTxt) return
            mailService.replyToMail(this.mail.id, this.replyTxt).then(() => {
                eventBus.$emit('show-msg', 'Reply Sent')
                this.$router.push('/mail')
            })
        }
    },
    computed: {
        timeSent() {
            const fullDate = new Date(this.mail.timeCreated)
            return fullDate.getDate() + '-' +
                (fullDate.getMonth() + 1) + '-' +
                fullDate.getFullYear() + '     ' +
                fullDate.getHours() + ':' + fullDate.getMinutes()
        }
    },
    created() {
        const { mailId } = this.$route.params;
        mailService.getById(mailId)
            .then((mail) => {
                this.mail = mail
                mailService.markAsRead(mail.id)

            })




    }
}