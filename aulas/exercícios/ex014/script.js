function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 4 && hora < 12){
        //dia
        img.src = 'imagens/Manha.png'
        document.body.style.background = '#FFE6AE'
    }
    else if ( hora >= 12 && hora <= 18){
        //tarde
        img.src = 'imagens/Tarde.png'
        document.body.style.background = '#F29C50'
    }
    else{
        //noite
        img.src = 'imagens/Noite.png'
        document.body.style.background = '#010F11'
    }
}