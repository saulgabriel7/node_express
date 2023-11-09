const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.get('/cadastrar',(requisicao, resposta) =>{
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
    const nome = requisicao.body.nome
    console.log(nome)
})

app.post("/salvar", (req, resp)=>{
})

app.post('/cadastrar/salvar', (requisicao, resposta) =>{
    console.log(requisicao.body)
}) 

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Acessando dados do usuario ${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => { 
    console.log("Servidor rodando na porta 3000!")
})