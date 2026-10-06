function descperfil(){
    let programador = 0;
    let designer = 0;
    let jogos = 0;
    let ia = 0; 
    const nome = document.getElementById('nomeuser').value;
    const resp1 = document.getElementById('to-do').value;
    const resp2 = document.getElementById('interessante').value;
    const resp3 = document.getElementById('atenção').value;
    const resp4 = document.getElementById('pessoa').value;
    const resp5 = document.getElementById('projeto').value;
    
    //resposta 1
    if (resp1=="programador"){
        programador++;
    }else if (resp1=="designer"){
        designer++;
    }else if (resp1=="jogos"){
        jogos++;
    }else{
        ia++;
    }
    //2
    if (resp2=="programador"){
        programador++;
    }else if (resp2=="designer"){
        designer++;
    }else if (resp2=="jogos"){
        jogos++;
    }else{
        ia++;
    }
    //3
    if (resp3=="programador"){
        programador++;
    }else if (resp3=="designer"){
        designer++;
    }else if (resp3=="jogos"){
        jogos++;
    }else{
        ia++;
    }
    //4
    if (resp4=="programador"){
        programador++;
    }else if (resp4=="designer"){
        designer++;
    }else if (resp4=="jogos"){
        jogos++;
    }else{
        ia++;
    }
    //resposta 5
    if (resp5=="programador"){
        programador++;
    }else if (resp5=="designer"){
        designer++;
    }else if (resp5=="jogos"){
        jogos++;
    }else{
        ia++;
    }
    //teste do perfil vencedor
    let perfil="";
    if ((programador>=designer) && (programador>=ia) && (programador>=jogos)){
        perfil="Programador(a)";
    }else if ((designer>=programador) && (designer>=ia) && (designer>=jogos)){
        perfil="Designer";
    }else if ((jogos>=programador) && (jogos>=ia) && (jogos>=designer)){
        perfil="Criador(a) de jogos";
    }else{
        perfil="Especialista em IA";
    }
    //mensagem final
    let mensagem = nome + ", seu perfil combina com: "+ perfil +"!";
    document.getElementById("resultado").textContent=mensagem;
}