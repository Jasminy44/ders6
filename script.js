let prObje = new Promise(
    (a, b) => {
    for( let i =0; i<50000; i++ ){
        console.log(i)
    }
    a({ gidenSms:12 ,gitmeyenSms:1})
    }
)
prObje.then( (deger)=>{ console.log("SMS gönderimi tamamlandi." + deger.gidenSms)})
prObje.catch( (hata) => { console.log(hata)})