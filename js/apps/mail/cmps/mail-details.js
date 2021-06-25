import { mailService } from '../services/mail-service.js'
import { eventBus } from '../services/mail-eventBus.js'

export default {
    template: `
    <section v-if="mail" class="app-main">
    <h2>{{mail.title}}</h2>
    <p>{{mail.mainTxt}}</p>
    <article v-if="mail.replies">
        <div v-for="reply in mail.replies" >
            <hr />
            <p>{{reply.txt}}</p>
            <p>{{timeSent}}</p>

        </div>
    </article>    
    <button @click="openReply">reply</button>
    <div class="mail-reply-container" v-if="isReply">
        <hr />
        <textarea v-model="replyTxt" cols="50" rows="10" placeholder="reply"></textarea>
        <button @click="reply">Send</button>

    </div>
    <router-link to="/mail">Back to mail</router-link>

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