export default {
    template: `
<section class="mail-compose-container">
    <form class="mail-compose-form" @submit.prevent>
        <h2>New mail</h2>
        <div class="mail-toNtitle">
            <span class="mail-compose-recipient">To:</span>


            
          <input class="mail-compose-to" type="text">
        </div>
        <div>
            <input class="mail-compose-subject" v-model="title" type="text" placeholder="Subject">
            
        </div>
        
        <div>            
            <textarea class="mail-compose-text" v-model="msgTxt"  cols="60" rows="40" type="text"></textarea>
        </div>
        <div class="mail-compose-actions">

            <button class="mail-compose-link" @click="sendMail()">Send</button>
            <button class="mail-compose-cancel" @click.stop="cancel"></button>
            
        </div>
        
    </form>
</section>
`,
    data() {
        return {
            title: null,
            msgTxt: null
        }
    },
    methods: {
        sendMail() {
            const mail = {
                title: this.title,
                msgTxt: this.msgTxt,
                author: "Alex@AppSus.com"
            }
            this.$emit('sent', mail)
            this.title = null
            this.msgTxt = null
            this.$router.push('/mail')

        },
        cancel() {
            this.$router.push('/mail')
        }
    }
}