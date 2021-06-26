export default {
    template: `
<section class="mail-compose-container">
    <form class="mail-compose-form" @submit.prevent>
        <h2>New mail</h2>
        <div class="mail-toNtitle">
          <input class="mail-compose-to" type="text" placeholder="To:">
        </div>
        <div>
            <input class="mail-compose-subject" v-model="title" type="text" placeholder="Subject">
            
        </div>
        
        <div>            
            <textarea class="mail-compose-text" v-model="msgTxt"  cols="60" rows="40" type="text"></textarea>
        </div>
        <div class="mail-compose-actions">

            <button class="mail-compose-send" @click="sendMail()"></button>
            <button class="mail-compose-cancel" @click.stop="calcel"></button>
            
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
                msgTxt: this.msgTxt
            }
            this.$emit('sent', mail)
            this.title = null
            this.msgTxt = null            
            this.$router.push('/mail')

        },
        calcel(){
            this.$router.push('/mail')
        }
    }
}