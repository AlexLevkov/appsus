

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <label>
                    <input v-model="mail.isMarked" type="checkbox" >
            </label>
                <div @click.stop="readMail" :class="{ notRead: !mail.isRead }" class="mail-list-line">
                    <article class="mail-time mail-item">{{this.timeSent}}</article>
                    <article class="mail-title mail-item">{{mail.title}}</article>
                    <article class="mail-text mail-item">{{mail.mainTxt}}</article>
                    
                </div>
        </section>
    `,
    computed: {
        timeSent() {
            const fullDate = new Date(this.mail.timeCreated)
            return fullDate.getDate() + '-' + (fullDate.getMonth() + 1) + '-' + fullDate.getFullYear()
        }
    },
    methods:{
        readMail(){            
            this.$router.push('/mail/' + this.mail.id)
        }
    }
}