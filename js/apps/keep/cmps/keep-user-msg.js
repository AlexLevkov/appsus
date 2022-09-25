import { eventBus } from './keep-event-bus.js';

export default {
    template: `
    <section class="keep-user-msg">
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
            console.log(msg)
            this.txt = msg
            setTimeout(() => {
                this.txt = ''
            }, 3000)
        })
    }
}