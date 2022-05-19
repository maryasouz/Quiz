import Quiz from "./Quiz";
require("./Quiz.css");


const Apresentacao = ( props ) => {

    const alteraTela = props.alteraTela;

    return ( 

        <div className="">

        <div className="menu">

            <h1>Você é Conrado ou Carlão?</h1>
            <p> Está pronto?</p>

            <div className="img">  

            <img width={650} src="https://i.imgur.com/oiuhcYd.jpg"/>
 
            </div>


            <div>
            <button className="botao01" onClick={() => alteraTela( <Quiz alteraTela={alteraTela}/> ) }> Começar </button>
            </div>

        </div>

        </div>

   
    );
}
 
export default Apresentacao;