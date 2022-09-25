import { storageService } from '../../../services/async-storage-service.js'
export const mailService = {
    query,
    sendMail,
    deleteMail,
    getById,
    replyToMail,
    markAsRead,
    updateMail
};


const storage_key = 'mailDB'

function _creatMails() {
    const mails = [
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            author: 'Jobs@google.com',
            title: 'Come work with us!',
            mainTxt: 'We love your resume!',
            isRead: true,
            isMarked: false,
            isSent: false,
            isFav: true
        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            author: 'Yosi@gmail.com',
            title: 'New Startup idea',
            mainTxt: 'Would you like to join?',
            isRead: true,
            isMarked: false,
            isSent: false,
            isFav: true
        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            author: 'Sales@tours.com',
            title: 'A trip to the Caribbean',
            mainTxt: 'One life opportunity, don\'t miss it!',
            isRead: false,
            isMarked: false,
            isSent: false,
            isFav: false
        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            author: 'Admin@AppSus.com',
            title: 'Welcome new user',
            mainTxt: 'you should get familier with...',
            isRead: true,
            isMarked: false,
            isSent: false,
            isFav: false
        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            author: 'Admin@AppSus.com',
            title: 'Rules and policy',
            mainTxt: 'you read this first',
            isRead: false,
            isMarked: false,
            isSent: false,
            isFav: true

        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            author: 'Admin@AppSus.com',
            title: 'Welcome to AppSus mail system',
            mainTxt: 'you should try the Keep App aswell',
            isRead: true,
            isMarked: false,
            isSent: false,
            isFav: false
        },

    ]
    return mails
}

function query() {
    return storageService.query(storage_key)
        .then((mails) => {
            if (!mails.length) {
                mails = _creatMails()
                storageService.postMany(storage_key, mails)
                return Promise.resolve(mails)
            } else {
                return Promise.resolve(mails)
            }
        })

}

function sendMail(txts) {
    const mail = {
        id: storageService.makeId(),
        timeCreated: Date.now(),
        title: txts.title,
        mainTxt: txts.msgTxt,
        author: txts.author,
        isRead: false,
        isMarked: false,
        isSent: true
    }
    return storageService.post(storage_key, mail)
}


function deleteMail(mailId) {
    console.log('mailId:', mailId)
    return storageService.remove(storage_key, mailId)
}

function getById(mailId) {
    return storageService.get(storage_key, mailId)
}
function replyToMail(mailId, replyTxt) {
    return getById(mailId).then((mail) => {
        mail.isRead = false
        if (!mail.replies || !mail.replies.length) {
            mail.replies = []
        }
        const reply = {
            txt: replyTxt,
            timeReplied: Date.now()
        }
        mail.replies.push(reply)
        storageService.put(storage_key, mail)
    })

}

function markAsRead(mailId) {
    return getById(mailId).then((mail) => {
        mail.isRead = true
        storageService.put(storage_key, mail)
    })
}

function updateMail(mailId, newMail) {
    return getById(mailId).then((mail) => {
        mail = newMail
        storageService.put(storage_key, mail)
    })
}