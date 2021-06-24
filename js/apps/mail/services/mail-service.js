import { storageService } from '../../../services/async-storage-service.js'
export const mailService = {
    query,
    sendMail,
    deleteMail,
    getById,
    replyToMail,
    markAsRead
};


const storage_key = 'mailDB'

function _creatMails() {
    const mails = [
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            title: 'Welcome new user',
            mainTxt: 'you should get familier with...',
            isRead: false,
            isMarked: false
        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            title: 'Rules and policy',
            mainTxt: 'you read this first',
            isRead: false,
            isMarked: false
        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            title: 'Welcome to AppSus mail system',
            mainTxt: 'you should try the Keep App aswell',
            isRead: false,
            isMarked: false
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
        isRed: false
    }
    return storageService.post(storage_key, mail)
}
function deleteMail(mailId) {
   return storageService.remove(storage_key, mailId)
}

function getById(mailId){
    return storageService.get(storage_key, mailId)
}
function replyToMail(mailId, replyTxt){
    let mail = getById(mailId)
    if(!mail.replies || !mail.replies.length){
        mail.replies = []
    } 
    const reply = {
        txt: replyTxt,
        timeReplied: Date.now()
    }
    mail.replies.push(reply)
    storageService.put(storage_key, mail)

}

function markAsRead(mailId){
    return getById(mailId).then((mail) =>{
        mail.isRead = true        
        storageService.put(storage_key, mail)
    })
        
   
    
}
 