function selecaoComida(id){
    let opcaoClicada = document.getElementById(`opcao${id}`);
    let imagem = opcaoClicada.querySelector('.img-checkmark');
    if(document.getElementById('opcao1').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao2').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao3').classList.contains('pagina__opcoes__opcao--selecionado')){
        let selecionado = document.querySelectorAll('.pagina__opcoes')[0].querySelector('.pagina__opcoes__opcao--selecionado').children[4]
        console.log(selecionado);
        document.getElementById('opcao1').classList.remove('pagina__opcoes__opcao--selecionado');
        document.getElementById('opcao2').classList.remove('pagina__opcoes__opcao--selecionado');
        document.getElementById('opcao3').classList.remove('pagina__opcoes__opcao--selecionado');
        selecionado.classList.add('img-checkmark--normal')
        opcaoClicada.classList.add('pagina__opcoes__opcao--selecionado');
        imagem.classList.remove('img-checkmark--normal');
    }else{
        if(opcaoClicada.classList.contains('pagina__opcoes__opcao--selecionado')){
            opcaoClicada.classList.remove('pagina__opcoes__opcao--selecionado');
            imagem.classList.add('img-checkmark--normal');
        }else{
            opcaoClicada.classList.add('pagina__opcoes__opcao--selecionado');
            imagem.classList.remove('img-checkmark--normal');
        }
    }
}

function selecaoBebida(id){
    let opcaoClicada = document.getElementById(`opcao${id}`);
    let imagem = opcaoClicada.querySelector('.img-checkmark');
    if(document.getElementById('opcao4').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao5').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao6').classList.contains('pagina__opcoes__opcao--selecionado')){
        let selecionado = document.querySelectorAll('.pagina__opcoes')[1].querySelector('.pagina__opcoes__opcao--selecionado').children[4];
        console.log(selecionado);
        let variavel = document.querySelectorAll('.pagina__opcoes');
        console.log(variavel);
        document.getElementById('opcao4').classList.remove('pagina__opcoes__opcao--selecionado');
        document.getElementById('opcao5').classList.remove('pagina__opcoes__opcao--selecionado');
        document.getElementById('opcao6').classList.remove('pagina__opcoes__opcao--selecionado');
        selecionado.classList.add('img-checkmark--normal')
        opcaoClicada.classList.add('pagina__opcoes__opcao--selecionado');
        imagem.classList.remove('img-checkmark--normal');
    }else{
        if(opcaoClicada.classList.contains('pagina__opcoes__opcao--selecionado')){
            opcaoClicada.classList.remove('pagina__opcoes__opcao--selecionado');
            imagem.classList.add('img-checkmark--normal');
        }else{
            opcaoClicada.classList.add('pagina__opcoes__opcao--selecionado');
            imagem.classList.remove('img-checkmark--normal');
        }
    }
}

function selecaoSobremesa(id){
    let opcaoClicada = document.getElementById(`opcao${id}`);
    let imagem = opcaoClicada.querySelector('.img-checkmark');
    if(document.getElementById('opcao7').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao8').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao9').classList.contains('pagina__opcoes__opcao--selecionado')){
        let selecionado = document.querySelectorAll('.pagina__opcoes')[2].querySelector('.pagina__opcoes__opcao--selecionado').children[4];
        console.log(selecionado);
        document.getElementById('opcao7').classList.remove('pagina__opcoes__opcao--selecionado');
        document.getElementById('opcao8').classList.remove('pagina__opcoes__opcao--selecionado');
        document.getElementById('opcao9').classList.remove('pagina__opcoes__opcao--selecionado');
        selecionado.classList.add('img-checkmark--normal')
        opcaoClicada.classList.add('pagina__opcoes__opcao--selecionado');
        imagem.classList.remove('img-checkmark--normal');
    }else{
        opcaoClicada.classList.add('pagina__opcoes__opcao--selecionado');
        imagem.classList.remove('img-checkmark--normal');
    }
}

function pedidoPronto(){
    if(document.getElementById('opcao1').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao2').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao3').classList.contains('pagina__opcoes__opcao--selecionado')){
        if(document.getElementById('opcao4').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao5').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao6').classList.contains('pagina__opcoes__opcao--selecionado')){
            if(document.getElementById('opcao7').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao8').classList.contains('pagina__opcoes__opcao--selecionado') || document.getElementById('opcao9').classList.contains('pagina__opcoes__opcao--selecionado')){
                document.getElementById('botao').textContent = 'Fechar pedido';
                document.getElementById('botao').classList.add('botao-pedido--pronto');
            }
        }
    }
}

function fecharPedido(){
    document.querySelector('body').classList.add('body--fechar-pedido');
    document.querySelector('.fechar-pedido').classList.remove('fechar-pedido--escondido');
}

function cancelar(){
    document.querySelector('body').classList.remove('body--fechar-pedido');
    document.querySelector('.fechar-pedido').classList.add('fechar-pedido--escondido');
}

function adicionarItem(){
    let opcoesComida = document.querySelectorAll('.pagina__opcoes')[0];
    opcoesComida.innerHTML += ` <div class="pagina__opcoes__opcao" id="opcao1">
    <a onclick="selecaoComida(1)">
        <img src="./imgs/frango_yin_yang-1.png" width="144px" height="87px">
    </a>
    <p class="texto1">Frango Yin Yang</p>
    <p class="texto2">Um pouco de batata, um pouco de salada</p>
    <p class="texto3">R$ 14,90 <div class="img-checkmark img-checkmark--normal"><img src="./imgs/checkmark-circle-1.png"></div></p>
</div>`;
    console.log(opcoesComida);
}