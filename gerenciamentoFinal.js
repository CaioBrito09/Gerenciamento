// 1) O Registro pedido está lá na 3)
const aluno1 = Object.freeze({
    nome:"Carlos Vinícius",
    idade:22,
    matricula:202400054632,
    curso:"EC"
})

const aluno2 = Object.freeze({
    nome:"Carlos Eduardo",
    idade:19,
    matricula:202200036728,
    curso:"CC"
})

const aluno3 = Object.freeze({
    nome:"Pedro",
    idade:20,
    matricula:202300067421,
    curso:"SI"
})

// 2)
const turma= Object.freeze([aluno1,aluno2,aluno3])

// 3)
function novoAluno(nome,idade,matricula,curso) {
    this.nome = String(nome)
    this.idade = parseInt(Number(idade))
    this.matricula= parseInt(Number(matricula))
    this.curso= String(curso)
}

function adicionarAluno(nome,idade,matricula,curso){
    console.log("Aqui começa o adicionar Aluno")
    const novo = new novoAluno(nome,idade,matricula,curso)
    console.log([...turma,novo])
    console.log("Aqui acaba o adicionar Aluno")
}
//Teste o adicionarAluno
//adicionarAluno("Caio",19,2024000,"CC")

// 4)
function listarAlunos(){
    console.log("Aqui começa o listar Alunos")
    console.log(turma)
    console.log("Aqui acaba o listar Alunos")
}
//Teste o listarAlunos
//listarAlunos()
 
// 5)
function buscaCurso(curso){
    console.log("Aqui começa o busca Curso")
    console.log(turma.filter((elemento)=> elemento.curso== curso))
    console.log("Aqui acaba o busca Curso")
}
//Teste o buscaCurso
//buscaCurso("CC")

// 6)
function remove(nome){
    console.log("Aqui começa o remove")
    const x =turma.filter((elemento)=> elemento.nome != nome)
    console.log(x)
    console.log("Aqui acaba o remove")
}
//Teste o remove
//remove("Carlos Eduardo")

// 7)
function ordena(){
    console.log("Aqui começa o ordena")
    const novaTurma= [...turma].sort((a, b) => a.matricula-b.matricula)
     console.log(novaTurma)
     console.log("Aqui acaba o ordena")
 }
//Teste o ordena
//ordena()

// 8)
function contagem(){
    console.log("Aqui começa a contagem de pessoas por curso")
    const tam1= ([...turma].filter((x)=> x.curso== "CC")).length
    console.log(`CC:${tam1}`)
    const tam2 =([...turma].filter((x)=>x.curso== "EC")).length
    console.log(`EC:${tam2} `)
    const tam3 =([...turma].filter((x)=>x.curso== "SI")).length
    console.log(`SI:${tam3}`)
    console.log("Aqui acaba a contagem de pessoas por curso")
 }
 //Teste o contagem
//contagem()

// 9)
function alunoEditado(nome,idade,matricula,curso) {
    this.nome = String(nome)
    this.idade = parseInt(Number(idade))
    this.matricula= parseInt(Number(matricula))
    this.curso= String(curso)
}

function editar(aluno,nome=aluno.nome,idade=aluno.idade,matricula=aluno.matricula,curso=aluno.curso){
    console.log("Aqui começa o editado")
    const editado = new alunoEditado(nome,idade,matricula,curso)
    const novaTurma=[[...turma].filter((x)=> x != aluno),editado]
    console.log(novaTurma)
    console.log("Aqui acaba o editado")
}
//Teste o editar
//editar(aluno2,"Dimitri",22,19873)