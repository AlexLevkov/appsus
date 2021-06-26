

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <div  :class="{ notRead: !mail.isRead }" class="mail-list-line">
                <div>
                    <label>
                        <input v-model="mail.isMarked" type="checkbox" >
                    </label>
                </div>
                <div class="mail-i-had-it" @click.stop="readMail">
                    <div class="mail-line-contetnt"> 
                        <div class="mail-title mail-item" >
                            <article>{{mail.title}}</article>
                        </div>
                        <div class="mail-text mail-item">
                            <article>{{textToShow}}</article>
                        </div>
                    </div>
                    
                    
                    <div class="mail-time mail-item">
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
        textToShow(){
            const shortTxt = this.mail. mainTxt.split('').slice(0, 99).join('')
            return shortTxt
        }
    },
    methods:{
        readMail(){            
            this.$router.push('/mail/' + this.mail.id)
        }
    }
}