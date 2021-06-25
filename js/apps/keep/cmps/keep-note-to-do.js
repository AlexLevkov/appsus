import { keepService } from '../services/keep-service.js'

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
    
>   
<span style="font-weight: bold" >{{note.info.title}}</span> 
<ul v-for="task in note.info.toDoList">
    <li :class="{'keep-task-done': task.isMarked}" @click="clicked">
        <input v-model="task.isMarked" type="checkbox" name="" id="">
        {{task.toDo}}
    </li>
</ul>

<button @click="removeTask">delete</button>


     
    </section>
    `,

    methods: {
        clicked() {
            console.log('clicked')
            // console.log(toDo)

        },
        removeTask() {
            console.log('delete')
            const newTaskList = this.note.info.toDoList.filter((task) => {
                return !task.isMarked
            })
            console.log(newTaskList)
            this.note.info.toDoList = newTaskList;
            keepService.put(this.note).then(() => {
                this.$emit('refresh')
            })
        }

    }


}