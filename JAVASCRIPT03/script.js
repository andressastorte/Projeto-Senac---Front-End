function verificar()
{
    let idade = Number(document.getElementById("idade").value);
    let filme = Number(document.getElementById("filme").value);
    
    if (idade < 0 || idade > 120)
    {
        verificacao.textContent = "Digite uma idade válida!";
        verificacao.style.color = "yellow";
        verificacao.style.fontWeight = "bold";
    }
    else if (idade>=filme)
    {
        verificacao.textContent = "Você pode assistir ao filme!";
        verificacao.style.color = "green";
        verificacao.style.fontWeight = "bold";
    }
    else 
    {
        verificacao.textContent = "Você não pode assistir ao filme!";
        verificacao.style.color = "red";
        verificacao.style.fontWeight = "bold";
    }


}
