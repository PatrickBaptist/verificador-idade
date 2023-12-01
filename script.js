function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('textano')
    let res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
       alert('[ERROR] Verifique os dados e tente novamente') 
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 5) {
                //crianca
                img.src = './imagens/bebem.png'
            } else if (idade < 15) {
                //crianca
                img.setAttribute('src', 'imagens/criancam.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/adolescentem.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultom.png')
            } else if(idade < 70) {
                    //medio idoso
                    img.setAttribute('src', 'imagens/medioidosom.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idosom.png')
            }
            }else if (fsex[1].checked) {
                genero = 'mulher'
                if (idade >= 0 && idade < 5) {
                    //crianca
                    img.setAttribute('src', 'imagens/bebef.png')
                } else if (idade < 15) {
                    //crianca
                    img.setAttribute('src', 'imagens/criancaf.png')
                } else if(idade < 21) {
                    //jovem
                    img.setAttribute('src', 'imagens/adolescentef.png')
                } else if(idade < 50) {
                    //adulto
                    img.setAttribute('src', 'imagens/adultof.png')
                } else if(idade < 70) {
                    //medio idoso
                    img.setAttribute('src', 'imagens/medioidosof.png')
                }else {
                    //idoso
                    img.setAttribute('src', 'imagens/idosof.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
            
    }