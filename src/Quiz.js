import React, {useState} from 'react';
import Final from "./Final";

const Quiz = ( props ) => {

    const alteraTela = props.alteraTela;

    const [etapa, alteraEtapa] = useState (0);

    const [pontos, alteraPontos] = useState (0);

   const perguntas = [

        {
            pergunta: "Você é uma pessoa extremamente organizada?",
            imagem: "https://media1.tenor.com/images/85ba7afe92f9d4a17f1dfdc01f2ed45e/tenor.gif?itemid=4552991",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você gosta de pipoca?",
            imagem: "https://thumbs.gfycat.com/FlawedAgreeableFly-size_restricted.gif",
            respostas: ["Sim", "Não"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Você é uma pessoa calma?",
            imagem:"https://c.tenor.com/Jdm1hN5rbDwAAAAd/jo%C3%A3o-frango.gif",
            respostas: ["Sim", "Não"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Você gosta de festas?",
            imagem: "https://i.pinimg.com/originals/f4/97/d5/f497d55088aba26d78c26958a636b97a.gif",
            respostas: ["Sim", "Não"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Você é detalhista?",
            imagem: "https://media2.giphy.com/media/5QKnOASbDsHshTqhz4/giphy.gif",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você gosta de animes?",
            imagem: "https://www.icegif.com/wp-content/uploads/icegif-4777.gif",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você faria faculdade na USP ou na UFSCAR?",
            imagem: "https://media.giphy.com/media/jNdw5Qmy5MOpq/giphy.gif",
            respostas: ["USP", "UFSCAR"],
            carlao: 0,
            conrado: 1,
        },
        {
            pergunta: "Você gosta de blusa florida?",
            imagem: "https://acegif.com/wp-content/uploads/flowers-40.gif",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você gosta de café?",
            imagem: "https://travelpedia.com.br/wp-content/uploads/2020/09/cafe-1-GIF.gif",
            respostas: ["Sim", "Não"],
            carlao: 1,
            conrado: 0,
        },
        {
            pergunta: "Você gosta de assistir e jogar futebol?",
            imagem: "https://gifs.eco.br/wp-content/uploads/2021/10/imagens-e-gifs-de-futebol-0.gif",
            respostas: ["Sim", "Não"],
            carlao: 0,
            conrado: 1,
        },
      
        {
            pergunta: "Você prefere apontar o erro ou deixa a pessoa descobrir sozinha?",
            imagem:"https://c.tenor.com/2kAO6lk_cbIAAAAd/pointing-leonardo-di-caprio.gif",
            respostas: ["Apontar o erro", "Deixar ela se virar"],
            carlao: 0,
            conrado: 1,
        }
    ]

    const verificaResposta = (i) =>{

        const resposta = perguntas [etapa].carlao;

        if ( resposta == i) {
            {localStorage.setItem("pontos",pontos)}
            alteraPontos( pontos - 5);
            
        } else {
            alteraPontos (pontos + 5);
            
        }

        


        if (etapa + 1 < perguntas.length ) {
            alteraEtapa(etapa + 1);
        }else{
            alteraTela( <Final alteraTela={alteraTela} alteraPontos = {alteraPontos} pontos ={pontos}/>);
        }

    
    }

    return ( 

        <div className='perguntas'>

        
            
           

            <h1> { perguntas[ etapa ].pergunta} </h1>

            <div className='perguntasImg'>
            <img height="600px" width="700px" src={perguntas[etapa].imagem}/>
            </div>

            <div className='perguntas'>
            
                {

                    perguntas [etapa].respostas.map( (r, i) => {
                        return < button key={i} className='botaoResposta' onClick={()=> verificaResposta (i) }> {r} </button>
                    })
                }
            </div>
                                    
        </div>




    );
}
 
export default Quiz;