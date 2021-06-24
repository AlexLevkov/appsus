import mailPreview from "./mail-preview.js"

export default {
    props: ['mails'],
    template: `
    <section class="mail-list" v-if="mails">           
        <ul class="mail-count">
            <li>you have {{totalMails}} mails</li>
            <li>you have {{unreadMails}} unread mails</li>
            <!-- <li>{{readMails}}</li> -->
        </ul>              
        <mail-preview v-for="mail in mails"  :key="mail.id" :mail="mail" />                            
                       
    </section> `,
    components: {
        mailPreview
    },
    data(){

        return{
            // read: null,
            // unread: null,
            // total: null
        }

    },
    computed:{
        totalMails(){
           return this.mails.length
        },
        unreadMails(){
            let unread = 0
            this.mails.forEach((mail) => {
                if (!mail.isRead){
                    unread++
                }
            });
            return unread
        },
        // readMails(){
        //     return this.totalMails - this.readMails
        // }
    },
    methods:{

    }
}


