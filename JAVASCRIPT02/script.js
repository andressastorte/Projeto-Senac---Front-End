function senha()
{
    let senha = document.getElementById("senha").value;
    let cor = document.getElementById("cor");

    if (senha ==="1234")
    {
        alert("certo");
    }
    else if (senha ==="admin")
    {
        alert("entrou no usuario");
        cor.style.color = "white";
        cor.style.backgroundColor = "yellow";
        cor.style.fontSize = "200px";
    }
    else
    {
        alert("nao vai entrar");
    }
}


function entrar()
{
    let nome = document.getElementById("nome").value;
    alert("Bem-vindo à Pixel Storte, " + nome + "!");
    
}

function mudar()
{
    document.getElementById("preco1").textContent = "Por apenas R$ 79,90";
    document.getElementById("preco1").style.color = "#fdad6b";
    document.getElementById("card11").style.backgroundColor = "#7020E0";
    document.getElementById("preco2").textContent = "Por apenas R$ 999,90";
    document.getElementById("preco2").style.color = "#fdad6b";
    document.getElementById("card12").style.backgroundColor = "#7020E0";
    document.getElementById("preco3").textContent = "Por apenas R$ 119,90";
    document.getElementById("preco3").style.color = "#fdad6b";
    card13.style.backgroundColor = "#7020E0";
    botao1.style.webkitTextFillColor = "white";
    botao2.style.webkitTextFillColor = "white";
    botao3.style.webkitTextFillColor = "white";
}
function calcularcompra()
{
    let produto = document.getElementById("prod").value;
    let quantidade = Number(document.getElementById("quant").value);

    let preco;

    if (produto === "Mouse Gamer - R$ 120,00")
    {
        preco = 120;
    }
    else if (produto === "Teclado Mecânico - R$ 180,00")
    {
        preco = 180;
    }
    else if (produto === "Headset - R$ 150,00")
    {
        preco = 150;
    }
    else 
    {
        preco = 220;
    }

    let total = preco * quantidade;

    if (quantidade >= 3)
    {
        total = total *0.9;
        document.getElementById("resultado").textContent = "O valor total é R$ " + total + ",00 reais";
        document.getElementById("desconto").textContent = "Desconto de 10% já aplicado";
    }
    else
    {
        total = total*1;
        document.getElementById("resultado").textContent = "O valor total é R$ " + total + ",00 reais";
        document.getElementById("desconto").textContent = "Desconto nâo aplicado. Valor total nâo atingiu o valor mínimo";
    }


    if (total >=500)
    {
        document.getElementById("frete").textContent = "O frete é grátis";
        document.getElementById("frete").style.color = "#00B0F0";
    }
    else{
        document.getElementById("frete").textContent = "O frete é R$ 20,00"
        document.getElementById("frete").style.color = "#E020E0";
    }
    
}

function enviar()
{
    let nome = document.getElementById("nome1").value;
    let mensagem = document.getElementById("mensagem");

    if (nome === "")
    {
        mensagem.textContent = "Digite seu nome antes de continuar";
        mensagem.style.color = "red";
    }
    else
    {
        mensagem.textContent = "Obrigada, " + nome + "sua mensagem foi enviada";
        mensagem.style.color = "#E020E0";
    }
        
}
 
