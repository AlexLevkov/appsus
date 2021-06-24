export default {
    props: ["note"],
    template: `
    <section
    :style="{width:'auto',height:'auto','white-space':'pre-wrap', 'text-align': 'left'}" 
                    class="keep-txt-note"
    
    >
    {{note.info.txt}}
    
    </section>
    `,
    methods: {

    }


}