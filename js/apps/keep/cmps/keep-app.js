import keepCreateNote from "./keep-create-note.js"
import keepNotesArea from "./keep-notes-area.js"

export default {
    template: `
    <section class="keep-app">
    <keep-create-note></keep-create-note>
    <keep-notes-area></keep-notes-area>
    </section>
    `,
    components: {
        keepCreateNote,
        keepNotesArea
    }
}