export default {
    template: `
<section>
    <form class="mail-compose-form" @submit.prevent>
        <div class="mail-toNtitle">

            <select name="" id="">
                <option value="me">Lonely i am so lonely</option>
            </select>
            <input v-model="title" type="text" placeholder="Subject">
        </div>
        <textarea v-model="msgTxt"  cols="60" rows="40" type="text"></textarea>
        <div class="mail-compose-actions">

            <button @click="sendMail()">Send</button>
            <button @click.stop="calcel">Cancel</button>
            
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