import Quiz from "./Quiz";

const Apresentacao = ( props ) => {

    const alteraTela = props.alteraTela;

    return ( 

        <div>

            <h1>Bem-vindo ao Quiz</h1>
            <p> Está pronto?</p>
            <button onClick={() => alteraTela( <Quiz alteraTela={alteraTela}/> ) }> Começar </button>

        </div>




    );
}
 
export default Apresentacao;