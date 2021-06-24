import { mailService } from '../services/mail-service.js'

export default {
    template: `
    <section v-if="mail" class="app-main">
    <h2>{{mail.title}}</h2>
    <p>{{mail.mainTxt}}</p> 
    <button @click="openReply">reply</button>
    <div class="mail-reply-comtainer" v-if="isReply">
        <hr />
        <textarea v-model="replyTxt" cols="50" rows="10" placeholder="reply"></textarea>
        <button @click="reply">Send</button>

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

        }
    },
    created() {
        const { mailId } = this.$route.params;
        mailService.getById(mailId)
            .then((mail) => {
                this.mail = mail
                mail.isRead = true
            });
    }
}