import homePage from './pages/home-page.js'
import mailApp from './apps/mail/pages/mail-page.js';
import keepApp from './apps/keep/pages/keep-page.js';
import keepEditNote from './apps/keep/cmps/keep-edit-note.js'
import mailCompose from './apps/mail/cmps/mail-compose.js';
import mailDetails from './apps/mail/cmps/mail-details.js';
// import aboutPage from './pages/book-about.js';
// FIX dynamic path

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp,
        children: [
            {
                path: '/mail/compose',
                component: mailCompose
            }
        ]
    },
    {
        path: '/mail/:mailId',
        component: mailDetails
    },
    {
        path: '/keep',
        component: keepApp,
        children: [
            {
                path: '/keep/:noteId', // RVW
                component: keepEditNote
            }

        ]
    },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // }

];

export const router = new VueRouter({ routes });