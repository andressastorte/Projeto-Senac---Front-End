


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
    document.getElementById("preco2").textContent = "Por apenas R$ 159,90";
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
    let idade = document.getElementById("idade1").value;
    let mensagem1 = document.getElementById("mensagem1");

    if (nome == "")
    {
        mensagem.textContent = "Digite seu nome antes de continuar";
        mensagem.style.color = "red";
    }
    else
    {
        
        mensagem.textContent = "Obrigada, " + nome + " sua mensagem foi enviada";
        mensagem.style.color = "#E020E0";
    }
    if (idade >= 18)
    {
        mensagem1.textContent = "Você pode participar das promoções para maiores de 18 anos";
        mensagem1.style.color = "green";
    }
    else 
    {
        mensagem1.textContent = "As promoções gerais continuam disponíveis para você";
        mensagem1.style.color = "yellow";
    }
        
}

function alterar()
{
    let formulario = document.getElementById("form");
    formulario.style.border = "2px solid #00B0F0";
    let botaoenviar = document.getElementById("label1");
    botaoenviar.style.color = "#00B0F0";
    let botaoenviar1 = document.getElementById("label2");
    botaoenviar1.style.color = "#00B0F0";
    let botaoenviar2 = document.getElementById("label3");
    botaoenviar2.style.color = "#00B0F0";
    let botaoenviar3 = document.getElementById("label4");
    botaoenviar3.style.color = "#00B0F0";
    let botaoenviar4 = document.getElementById("label5");
    botaoenviar4.style.color = "#00B0F0";
}

 
