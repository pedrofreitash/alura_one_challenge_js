let iName = document.querySelector('#amigo');
let lista = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');
let amigos = [];

function adicionarAmigo(){
    let nome = iName.value.trim();

    if (nome == ''){
        alert('Digite um nome!');
        iName.value = '';
        iName.focus();
        return;
    }

    if (amigos.includes(nome)){
        alert('Este nome ja foi adicionado');
        iName.value = '';
        iName.focus();
        return;
    }
    else{
        amigos.push(nome);

        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);

        iName.value = '';
        iName.focus();
    }

}

function sortearAmigo(){
    if(amigos.length <= 1){
        alert('Adicione no minimo 2 nomes');
        return;
    }
    else{
        let index = Math.floor(Math.random() * amigos.length);
        let li = document.createElement('li');
        li.textContent = `O amigo secreto sorteado é ${amigos[index]}`;
        amigos.splice(index, 1);
        resultado.appendChild(li);
        lista.style.display = 'none';
        resultado.style.display = 'block';
    }
}