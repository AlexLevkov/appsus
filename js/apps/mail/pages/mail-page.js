import { mailService } from '../services/mail-service.js';

export default {
    template: `
    <section class="app-main">
        <table class="mail-main-table" v-if="mails">
            <thead>
                <tr>
                    <th>timeSent</th>
                    <th>title</th>
                    <th>messege</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mail in mails" :key="mail.id">
                    <td>{{mail.timeCreated}}</td>
                    <td>{{mail.title}}</td>
                    <td>{{mail.mainTxt}}</td>
                </tr>
            </tbody>

        </table>

    </section>
    `,
    data() {
        return {
            mails: null
        }

    },
    computed:{
        timeSent(timeStamp){
            console.log(timeStamp)
            return timeStamp.toLocaleDateString()
        }
    },

    created() {
        mailService.query()
            .then((mails) => {
                this.mails = mails
                console.log(this.mails)
            })
    }
}
