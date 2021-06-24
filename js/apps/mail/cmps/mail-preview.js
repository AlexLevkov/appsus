

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
                <div @click="func">
                    <label>
                            <input v-model="mail.isMarked" type="checkbox" >
                    </label>
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
        func(){
            this.$router.push('/mail/' + this.mail.id)
        }
    }
}