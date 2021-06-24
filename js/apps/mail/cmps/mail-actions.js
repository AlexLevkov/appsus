
export default {

    template:`
    <section class="mail-actions">
        <button @click="deleteMail">Delete mail</button>
        <!-- <router-view @sent="sendMail()"></router-view> -->
    </section>
    `,

    methods:{
        deleteMail(){
            this.$emit('removeMail')
        },
        // sendMail(mail){
        //     this.$emit('send', mail)
        // }
    }
}