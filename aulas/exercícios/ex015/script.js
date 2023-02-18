function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'O homem'
            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        }
        else{
            genero = 'A mulher'
            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos: ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}