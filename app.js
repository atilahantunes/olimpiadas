function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Para fins de depuração, mostra a seção no console

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);
    
    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um atleta ou esporte.</p>"
        return
    }
    
    //converte a informação digitada em minusculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
            // então faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado, formatando o HTML
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
        
        
    }

    // Se resultados nao tem nada, nao retornou nada, faça...
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }
    // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados;
}

// console.log(dados);
//console.log(dados[0].descricao);
// comentario

// let section = document.getElementById("resultados-pesquisa")
// console.log(section);

// let resultados = ""

//para cada dado dentro da lista de dados
// for (let dado of dados) {
//     resultados += `
//     <div class="item-resultado" >
//         <h2>
//             <a href="#" target="_blank">${dado.titulo}</a>
//         </h2>
//         <p class="descricao-meta">${dado.descricao}</p>
//         <a href="${dado.link}" target="_blank">Mais informações</a>
//     </div>
// `
// }
// section.innerHTML = resultados


//para cada dado dentro da lista de dados 
// for (let dado of dados) {
//     section.innerHTML += `
//     <div class="item-resultado" >
//         <h2>
//             <a href="#" target="_blank">${dado.titulo}</a>
//         </h2>
//         <p class="descricao-meta">${dado.descricao}</p>
//         <a href="${dado.link}" target="_blank">Mais informações</a>
//     </div>
// `
// }

