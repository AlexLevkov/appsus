import mailPreview from "./mail-preview.js"

export default {
    props: ['mails'],
    template: `
    <section class="mail-list" v-if="mails">           
                       
        <mail-preview v-for="mail in mails"  :key="mail.id" :mail="mail" />                            
                       
    </section> `,
    components: {
        mailPreview
    }
}


