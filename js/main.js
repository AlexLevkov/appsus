import { router } from './router.js'
import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'
import mailUserMgs from './apps/mail/cmps/mail-user-msg.js'

const options = {
    el: '#app',
    router,
    template: `
    <section class="app-main-container">
    <app-header />
    <mail-user-mgs />
    <router-view />
    <app-footer />
    </section>

    `,
    components: {
        appHeader,
        appFooter,
        mailUserMgs
    }
    
}

new Vue(options)