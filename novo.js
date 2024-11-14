let form = document.querySelector("#formulario")

form.addEventListener("submit", async (ev) => {
    ev.preventDefault()

    let nome = document.querySelector("#txtNome").value
    let preco = document.querySelector("#txtPreco").value

    let dados = {
        "nome": nome,
        "preco": preco
    }

    dados = JSON.stringify(dados)

    await fetch("http://127.0.0.1:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: dados
    })

    alert("Produto cadastrado com sucesso!")
})