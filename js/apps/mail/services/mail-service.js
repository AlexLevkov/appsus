import { storageService } from  '../../../services/async-storage-service.js'
export const mailService = {
    query   
};


const storage_key = 'mailDB'

function _creatMails() {
    const mails = [
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            title: 'Welcome new user',
            mainTxt: 'you should get familier with...',
            isRed: false
        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            title: 'Rules and policy',
            mainTxt: 'you read this first',
            isRed: false
        },
        {
            id: storageService.makeId(),
            timeCreated: Date.now(),
            title: 'Welcome to AppSus mail system',
            mainTxt: 'you should try the Keep App aswell',
            isRed: false
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