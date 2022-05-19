import React, {useState} from 'react';
import Apresentacao from './Apresentacao';
require("./App.css");

function App() {

    const [ tela, alteraTela ] = useState ( null );

    if (tela == null) {
        alteraTela ( <Apresentacao alteraTela = {alteraTela} /> );
    }

    return (
        
        <div>

            { tela }

        </div>

    );
}

export default App;