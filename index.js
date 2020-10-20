function contador() {
    
    let inicio = window.document.getElementById('ini');
    let fim = window.document.getElementById('fi');
    let passo = window.document.getElementById('pass');
    let res = window.document.getElementById('res');
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] - Insira dados para continuar.')
    } else {
       res.innerHTML = 'Contando: '
       let i = Number(inicio.value);
       let f = Number(fim.value);
       let p = Number(passo.value);

       if(p <=0) {
           window.alert('[ERRO] - Comando invalido.')
           p=1;
       }
       
       if(i < f) {
            
            for(let c = i; c <= f; c += p) {
               res.innerHTML += `${c} \u{1F47E} `
            }
                
       } else {
           
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F47E} `
             }
                 
           }
           res.innerHTML += ''+'\u{1F3C1}'
       }
}
    
