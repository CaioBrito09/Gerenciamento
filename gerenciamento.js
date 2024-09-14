const turma= []

const aluno = Object.freeze({
    nome:"Carlos",
    idade:18,
    matricula:189560,
    curso:"CC"
})

const novoAluno={...aluno}

function criaAluno(n,i,m,c){
    novoAluno.nome=n
    novoAluno.idade=i
    novoAluno.matricula=m
    novoAluno.curso=c
    const x = {...novoAluno}
    turma.push(x)
}

criaAluno("josé",20,1555,"EC")
criaAluno("Dimitri",19,1777,"CS")
criaAluno("Péricles",19,1789,"CS")



function buscaCurso(curso){
    console.log(turma.filter((elemento)=> elemento.curso== curso))
}



function exclui2(){
    turma.pop()
    turma.pop()
    turma.pop()
}



const novaTurma= [...turma]

function exclui(nome){
    const x =[...novaTurma].filter((elemento)=> elemento.nome != nome)
    return x
    //turma.map(exclui2)
    //turma.push(x)
}










//visualiza
//buscaCurso("CS")
//buscaCurso("EC")

exclui("josé")
exclui("Dimitri")





//const visualiza =console.log(turma)

//visualiza