
export default {
    template: `
<section>
    <form @submit.prevent>
        <select name="" id="">
            <option value="me">Lonly i am so lonly</option>
        </select>
        <input v-model="title" type="text">
        <input v-model="msgTxt" type="text">
        <button @click="sendMail()">send</button>
        
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

        }
    }
}