import { mailService } from '../services/mail-service.js';

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <div  :class="{ notRead: !mail.isRead }" class="mail-list-line">
                <input v-model="mail.isMarked" type="checkbox" >
                <span @click="mailFav" class="mail-fav-icon" v-html="favIcon()"></span>
                <div class="mail-i-had-it" @click.stop="readMail">
                    <!-- {{favIcon}} -->
                    <div class="mail-line-contetnt"> 
                            <article class="mail-title mail-item">{{mail.author}}</article>
                            <article class="mail-text mail-item">{{mail.title}}</article>
                    </div>
                                        
                    <div class="mail-time mail-item">
                        <span @click.stop="deleteMail" ><i class="fa-regular fa-trash-can"></i></span>
                        <span @click.stop="mailRead" class="" v-html="mailReadStatus()"></span>
                        <article >{{this.timeSent}}</article>
                    </div>
                </div>
            </div>    
                
        </section>
    `,
    computed: {
        timeSent() {
            const fullDate = new Date(this.mail.timeCreated)
            return fullDate.getDate() + '-' + (fullDate.getMonth() + 1) + '-' + fullDate.getFullYear()
        },
        textToShow() {
            const shortTxt = this.mail.mainTxt.split('').slice(0, 99).join('')
            return shortTxt
        },

    },
    methods: {
        readMail() {
            this.$router.push('/mail/' + this.mail.id)
        },
        favIcon() {
            if (this.mail.isFav) return '<i class="fa-solid fa-star fav "></i>'
            return '<i class="fa-regular fa-star"></i>'
        },
        mailReadStatus() {
            if (this.mail.isRead) return '<i class="fa-regular fa-envelope"></i>'
            return '<i class="fa-regular fa-envelope-open"></i>'
        },
        mailFav() {
            this.mail.isFav = !this.mail.isFav
            mailService.updateMail(this.mail.id, this.mail)
        },
        mailRead() {
            this.mail.isRead = !this.mail.isRead
            mailService.updateMail(this.mail.id, this.mail)
        },
        deleteMail() {
            this.$emit('mailDelete', this.mail.id)
        }
    },
    components: {
        mailService

    }
}

