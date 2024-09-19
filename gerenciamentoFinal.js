// Equipe: Caio Mendonça Barreto de Brito
// Gustavo César Barreto Santana
//Artur Vinícius Lima dos Santos
// 1) 
const aluno =Object.freeze(function(nome,idade,matricula,curso) {
    this.nome = String(nome)
    this.idade = parseInt(Number(idade))
    this.matricula= parseInt(Number(matricula))
    this.curso= String(curso)
})

// 2)
const turma= Object.freeze([])

// 3)
const adicionarAluno =Object.freeze(function(turma){
    return function(nome,idade,matricula,curso){
    const novo = new aluno(nome,idade,matricula,curso)
    const novaTurma =[...turma,novo]
    return novaTurma
    }
})
// deixando a turma com pessoas para teste
const Turma1 = adicionarAluno(turma)
const T1New =Object.freeze(Turma1("Caio",19,202400054671,"CC"))
const Turma2 = adicionarAluno(T1New)
const T2New = Object.freeze(Turma2("Carlos Vinícius",22,202200036728,"EC"))
const Turma3 =adicionarAluno(T2New)
const T3New= Object.freeze(Turma3("Carlos Eduardo", 25,202300067421,"SI"))
const addAluno= adicionarAluno(T3New)
//Teste o o TurmaNova
const TurmaNew = Object.freeze(addAluno("Dimitri",19,202400013453,"CC"))
// 4)
function listarAlunos(turma=TurmaNew){
    console.log("Aqui começa o listar Alunos")
    console.log(turma)
    console.log("Aqui acaba o listar Alunos")
}
//Teste o listarAlunos
listarAlunos()
 
// 5)
function buscaCurso(curso,turma=TurmaNew){
    console.log("Aqui começa o busca Curso")
    const buscados =turma.filter((elemento)=> elemento.curso== curso)
    if(buscados.length==0){
        return console.log("Não há ninguém ingressado nesse curso")
    }
    else{
        console.log(buscados)
    }
    console.log("Aqui acaba o busca Curso")
}
//Teste o buscaCurso
buscaCurso("CC")

// 6)
function remove(nome,turma=TurmaNew){
    const x =turma.filter((elemento)=> elemento.nome != nome)
    return x
}
//Teste o remove
const turmaRemovida=(remove("Carlos Eduardo"))
//listarAlunos(turmaRemovida)

// 7)
function ordena(turma=turmaRemovida){
    const novaTurma= [...turma].sort((a, b) => a.matricula-b.matricula)
    return novaTurma
 }
 //Teste o ordena
 const turmaOrdenada = ordena()
//listarAlunos(turmaOrdenada)
// 8)
function contagem(turma=turmaOrdenada){
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

function editar(edit,turma=turmaOrdenada){
    console.log("Aqui começa o editado")
    const filtrado =[...turma].filter((x)=> x.nome == edit || x.matricula==edit)
    if(filtrado.length==0){
        return console.log(`Não foi encontrado nenhum ${edit}`)
    }
    else{
        const n = filtrado[0].nome
        const i = filtrado[0].idade
        const m = filtrado[0].matricula
        const c = filtrado[0].curso
       return function(nome=n,idade=i,matricula=m,curso=c){
    if(typeof edit=="string"){
        const editado = new aluno(nome,idade,matricula,curso)
    const novaTurma=[...turma.filter((x)=> x.nome !== edit),editado]
    console.log(novaTurma)
    return novaTurma
    }
    else{
        const editado = new aluno(nome,idade,matricula,curso)
        const novaTurma=[...turma.filter((x)=> x.matricula !== edit),editado]
        console.log(novaTurma)
        return novaTurma
    }
        }
    }
}
const TurmaEditada = editar("Dimitri")("Dimitri",22,202300014155)
listarAlunos(TurmaEditada)
//Teste o editar
//Para editar passe o nome do aluno ou a matricula do aluno que quer editar.