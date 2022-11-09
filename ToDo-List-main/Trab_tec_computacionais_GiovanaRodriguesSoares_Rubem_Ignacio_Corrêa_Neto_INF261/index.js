function adicionar(){
    const txt1 = (document.querySelector("#txt").value)
    const br = document.createElement('br')
    const txt2 = (document.querySelector("#txt2").value)
    const concluir = document.createElement('button')
    const editar = document.createElement('button')
    concluir.innerHTML= "Concluída"
    editar.innerHTML = "Editar"
    const novaLi = document.createElement('h4');
    const excluir = document.createElement('button');
    excluir.innerHTML= "Remover Tarefa";
    novaLi.innerHTML = "TAREFA: "+ txt1 + "<br> DETALHAMENTO: " + txt2;
    concluir.addEventListener('click', function() {
        if (novaLi.style.textDecoration == "line-through"){
            novaLi.style.textDecoration = "none";
        }else{
        novaLi.style.textDecoration = "line-through";
    }}) 
    excluir.addEventListener('click', function(){
        novaLi.remove()
        excluir.remove()
        br.remove()
        editar.remove()
        concluir.remove()
    })
    editar.addEventListener('click', function(){
        const ed = window.prompt('Entre com o Texto que deseja inserir')
        const eddet = window.prompt("Entre com o detalhamento")
        novaLi.innerHTML = "TAREFA: "+ ed + "<br> DETALHAMENTO: " + eddet;
    })
    document.getElementById("resultado").appendChild(novaLi);
    document.getElementById("resultado").appendChild(excluir);
    document.getElementById("resultado").appendChild(concluir);
    document.getElementById("resultado").appendChild(editar);
    document.getElementById('resultado').appendChild(br)
    
    document.querySelector("#txt").value = ""
    document.querySelector("#txt2").value = ""
}
function exibir(){
    document.getElementById("cadastrar").style.display = "none";
    document.getElementById("exibir").style.display = "block";
}
function cadastrar(){
    document.getElementById("cadastrar").style.display = "block";
    document.getElementById("exibir").style.display = "none";
}

function login(email, senha){
    
}