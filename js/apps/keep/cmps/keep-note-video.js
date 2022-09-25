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
    class="keep-txt-note">
    <div class="keep-video-note" > <span style="font-weight: bold" >{{note.info.title}}</span>   
    <iframe width="180" height="100" :src="note.info.videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </section>
    
   
    `,

    methods: {

    }


}