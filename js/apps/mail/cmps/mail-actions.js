
export default {

    template:`
    <section class="mail-actions">
        <button @click="deleteMail">Delete mail</button>

    </section>
    `,

    methods:{
        deleteMail(){
            this.$emit('removeMail')
        },
       
    }
}