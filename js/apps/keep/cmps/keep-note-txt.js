export default {
    props: ["note"],
    template: `
    <section
    :style="{padding:'5px'
    ,width:'auto'
    ,height:'auto'
    ,'white-space':'pre-line',
     'text-align': 'left',
    'background-color': note.style.backgroundColor,
    }" 
    class="keep-txt-note"
>   {{note.info.txt}}  
     
    </section>
    `,

    methods: {

    }


}