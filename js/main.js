import { router } from './router.js'
import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'
import mailUserMgs from './apps/mail/cmps/mail-user-msg.js'
import keepBlackScreen from './apps/keep/cmps/keep-black-screen.js'

const options = {
    el: '#app',
    router,
    template: `
    <section class="app-main-container">
    <keep-black-screen></keep-black-screen>
    <app-header />
    <mail-user-mgs />
    <router-view />
    <app-footer />
    </section>

    `,
    components: {
        appHeader,
        appFooter,
        mailUserMgs,
        keepBlackScreen
    }

}

new Vue(options)