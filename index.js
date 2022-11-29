function adicionar(){
    const txt1 = (document.querySelector("#txt").value)
    const h4 = document.createElement('h4')
    const txt2 = (document.querySelector("#txt2").value)
    const concluir = document.createElement('button')
    const editar = document.createElement('button')
    const resultado = document.createElement("div")
    const divTxts = document.createElement('div')
    const divBtn = document.createElement('div')
    resultado.className = "resultado"
    resultado.style.display = "flex"
    resultado.style.justifyContent = "space-around"
    concluir.innerHTML= "Concluída"
    editar.innerHTML = "Editar"
    const novaLi = document.createElement('p');
    const excluir = document.createElement('button');
    excluir.innerHTML= "Remover Tarefa";
    novaLi.innerHTML = " <strong>Tarefa:</strong> "+ txt1 + "<br> <strong>Detalhamento:</strong> " + txt2;
    concluir.addEventListener('click', function() {
        if (resultado.style.backgroundColor == "green"){
            resultado.style.backgroundColor = "white";
            
        }else{
        resultado.style.backgroundColor = "green";
        resultado.style.color = "white";
        resultado.style.justifyContent = "center";
        divTxts.appendChild(h4);
        
        h4.innerText = "Tarefa Concluída!"
        novaLi.remove()
        excluir.remove()
        editar.remove()
        concluir.remove()
    }}) 
    excluir.addEventListener('click', function(){
        novaLi.remove()
        excluir.remove()
        editar.remove()
        concluir.remove()
    })
    editar.addEventListener('click', function(){
        const ed = window.prompt('Entre com o Texto que deseja inserir')
        const eddet = window.prompt("Entre com o detalhamento")
        novaLi.innerHTML = " <strong>Tarefa:</strong> "+ ed + "<br> <strong>Detalhamento:</strong> " + eddet;
    })
    divTxts.appendChild(novaLi);
    divBtn.appendChild(excluir)
    divBtn.appendChild(concluir)
    divBtn.appendChild(editar)
    resultado.appendChild(divTxts);
    resultado.appendChild(divBtn)
    //resultado.appendChild(br)
    
    document.getElementById("campo").appendChild(resultado);
    document.querySelector("#txt").value = ""
    document.querySelector("#txt2").value = ""
}
function exibir(){
    document.getElementById("cadastrar").style.display = "none";
    document.getElementById("exibir").style.display = "block";
    document.getElementById("dados").style.display = "none";
}
function cadastrar(){
    document.getElementById("cadastrar").style.display = "block";
    document.getElementById("exibir").style.display = "none";
    document.getElementById("dados").style.display = "none";
}
function exibirdados(){
    document.getElementById("cadastrar").style.display = "none";
    document.getElementById("exibir").style.display = "none";
    document.getElementById("dados").style.display = "block";
}
