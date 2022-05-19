import React, { useState } from 'react';

import Apresentacao from "./Apresentacao";

const Final = ( props ) => {

    const pontos = props.pontos;

    const [ conclusao, alteraConclusao] = useState(0);

    const conclusoes = [

        {
            nome: "Carlão",
            imagem:"https://i.imgur.com/plDSRMe.jpg",
            texto: "Paz e Amor! -  você se parece com Carlão. Você é sério mas nem tanto assim né?!, gosta de sempre ajudar e ama quando tiram dúvidas com você. Está sempre disposto a ajudar e faz bastante piada com o conteúdo. Você é quieto e bem na sua, mas adora uma festa universitária. Seu estilo é bem simples, adora compartilhar momentos importantes da sua vida com os alunos, quanto mais pipoca melhor!"
        },
        {
            nome: "Conrado",
            imagem: "https://i.imgur.com/SpWygFx.jpg",
            texto: "Dattebayo! - Você se parece com Conrado, é bem divertido, gosta de séries atuais, se sente jovem. Tem energia de sobra porque ama um cafezinho!, nada de pipoca!, seu anime favorito é Naruto e sempre que falam mal desse anime você fica furioso. Você digita rápido, faz piadas de tiozão e gosta de ver as pessoas surtar se esforçando, você prefere que as pessoas se virem e aprendam com os próprios erros, vai um cafezinho aí?!"
        }
    ]

    const resultado = pontos < 0 ? 0 : 1;

    return(

        <div className='imgResposta'>
           
          <h1> { conclusoes[ resultado ].nome} </h1>
          <img height="500px" width="600px" src= { conclusoes[ resultado] .imagem } />
          <p> { conclusoes[ resultado ].texto} </p>

            <div>
                <button className='botao01' onClick={()=> props.alteraTela ( <Apresentacao alteraTela={props.alteraTela}/> ) }>Recomeçar</button>
            </div>

        </div>

    );
    }
 
export default Final;