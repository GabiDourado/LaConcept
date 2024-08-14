import React from 'react';
import Stile from "../css/Esportes.css"

function Esportes(props) {
    return (
     <>
       <div className="CaixaEsporte">
            <h3 className="Texto">Esportes</h3>
            <img className="DivMaior02" src={"https://assets.adidas.com/images/w_600,f_auto,q_auto/1b5fe3d92d19419ea0907d662adc9bc5_9366/Camisa_2_Real_Madrid_23-24_Azul_IJ5901_HM1.jpg"} />
            <img className="DivMaior" src={"https://assets.adidas.com/images/w_600,f_auto,q_auto/53fe46a7fa2e4b1d9de3aa427aa50b5a_9366/Jaqueta_Malha_Alemanha_1996_Branco_IT7752_HM1.jpg"} />
            <img className="DivMaior" src={"https://assets.adidas.com/images/w_600,f_auto,q_auto/68d2b423945d4dedbdc7ce69f7889524_9366/Camisa_1_Manga_Longa_Real_Madrid_24-25_Branco_IT3442_HM1.jpg"} />
       </div>
     </>
    );
}
export default Esportes;