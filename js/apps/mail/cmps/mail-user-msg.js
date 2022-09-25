import { eventBus } from '../services/mail-eventBus.js';

export default {
    template: `
    <section class="mail-user-msg">
        <h2>{{txt}}</h2>
    </section>
    `,
    data() {
        return {
            txt: ''
        }
    },
    created() {
        eventBus.$on('show-msg', (msg) => {
            this.txt = msg
            setTimeout(() => {
                this.txt = ''
            }, 3000)
        })
    }
}