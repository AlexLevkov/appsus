import { router } from './router.js'
import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'

const options = {
    el: '#app',
    router,
    template: `
    <section class="app-main-container">
    <app-header />
    <router-view />
    <app-footer />
    </section>

    `,
    components: {
        appHeader,
        appFooter
    }
}

new Vue(options)