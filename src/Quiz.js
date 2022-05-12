import React, {useState} from 'react';
import Final from "./Final";

const Quiz = ( props ) => {

    const alteraTela = props.alteraTela;

    const [etapa, alteraEtapa] = useState (0);

    const [pontos, alteraPontos] = useState (0);

   const perguntas = [

        {
            pergunta: "Você é uma pessoa extremamente organizada?",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você gosta de pipoca?",
            respostas: ["Sim", "Não"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Você é uma pessoa calma?",
            respostas: ["Sim", "Não"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Você gosta de festas?",
            respostas: ["Sim", "Não"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Você é detalhista?",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você gosta de animes?",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você faria faculdade na USP ou na UFSCAR?",
            respostas: ["USP", "UFSCAR"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Você gosta de blusa florida?",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você gosta de café?",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você gosta de assistir e jogar futebol?",
            respostas: ["Sim", "Não"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Se você fosse professor teria um aluno favorito?",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você prefere apontar o erro ou deixa a pessoa descobrir sozinha?",
            respostas: ["Apontar o erro", "Deixar ela se virar"],
            carlao: 0,
            conrado: 1,
        }
    ]

    const verificaResposta = (i) =>{

        const resposta = perguntas [etapa].respostas;

        if ( resposta == perguntas[ etapa ].carlao) {
            {localStorage.setItem("pontos",pontos+5)}
            alteraPontos( pontos + 5);
            alert ("Resposta igual carlão")

        } else if( perguntas [etapa].respostas== perguntas[ etapa ].conrado){
            alteraPontos (pontos + 10);
            alert("Resposta igual conrado")
        }

        if (etapa + 1 < perguntas.length ) {
            alteraEtapa(etapa + 1);
        }else{
            alteraTela( <Final alteraTela={alteraTela} pontos ={pontos}/>);
        }

    }

    return ( 

        <div>

           <p>Você tem <strong>{pontos}</strong> pontos</p>

            <h1> { perguntas[ etapa ].pergunta} </h1>
            <ul>

                {

                    perguntas [etapa].respostas.map( (r, i) => {
                        return <li onClick={()=> verificaResposta (i) }> {r} </li>
                    })
                }
                
                                
            </ul>            

        </div>



    );
}
 
export default Quiz;