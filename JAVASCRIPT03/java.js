
let convidados = [];

function adicionar()
{
    let convidado = document.getElementById("festa").value;
    let local = document.getElementById("local");
    
    convidados.push(convidado);
    local.textContent = convidados;
    alert(convidados);
    
}

function mostrar()
{
    let  posicao = document.getElementById("pos").value;
    alert(convidados[posicao-1]);
}

function encontrar()
{
    let nome = document.getElementById("find");
    let resultado = convidados.includes(nome);

    if (resultado==true)
    {
        alert("esta na festa");
        alert(convidados.indexOf(nome) + "é a posicao dele");
    }
    else
    {
        alert("nao esta na festa");
    }
}

function remover()
{
    let posicao = document.getElementById("remove").value;
    convidados.splice(posicao,1);
    alert(convidados);
    let local = document.getElementById("local");
    local.textContent = convidados;

}