export default {
    props: ["notes"],
    template: `
    <section>
    <div class="keep-txt-note" v-for="note in notes" >{{note.info.txt}}</div>
    </section>
    
    `
}