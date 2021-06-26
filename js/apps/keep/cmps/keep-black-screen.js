import { eventBus } from "./keep-event-bus.js"

export default {
    template: `
    <section >
      <div  :class="{hidden: !isEditOpen}" class="keep-black-screen" ></div>
    </section>
    `,
    created() {
        eventBus.$on('toggleBlackScreen', () => {
            this.toggleScreen()
        })
        this.isEditOpen = false
    },
    methods: {
        toggleScreen() {
            console.log('toogle black scrren');
            this.isEditOpen = !this.isEditOpen;
            console.log('this.isEditOpen', this.isEditOpen);
        }
    },
    Data() {
        return {
            isEditOpen: false
        }
    }

}