import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "../css/home.css"
import Casual from '../components/casual';
import Esportes from '../components/Esportes';
function Home() {
    return (
        <>
            <div className='voltacarro'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className='carrossel'
                            src="https://jpimg.com.br/uploads/2021/08/f7cbfa2ca0419479d8bcb94ccbd20a3aa6566e5aw.jpg"
                            alt="Image One"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='carrossel'
                            src="https://backoffice.meiosepublicidade.pt/app/uploads/2024/04/Rafael-Leao_Adidas.jpg"
                            alt="Image Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='carrossel'
                            src="https://marcaspelomundo.com.br/wp-content/uploads/2023/03/223_GBL_HBCAMP_PR_1000x667_1.jpg"
                            alt="Image Two"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Esportes/>
            <Casual/>
            
        </>
    )
}

export default Home;