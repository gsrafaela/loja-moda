import React from 'react'
import Styled from 'styled-components'
import video from '../video/abertura.mp4'

const DivHome = Styled.div`
    background-color: #c3c2cf87;
    width: 900px;
    height: 530px;
    margin: 0 auto;
    border-radius: 57px;
    text-align: center;


    h1, p {
        color: #000;
    }

    h1 {
        padding-top: 32px;
        font-size: 16px;
        text-transform: uppercase
    }

    p {
        font-size: 18px;
        text-transform: uppercase
        
    }

    hr {
        background-color: #000;
        width: 90%;
        height: 4px;
        border-radius: 6px;
    }
    
    .box video {
        width: 61%;
        height: 360px
    }
`

const Home = () => {
    return (
        <DivHome>
            <h1>Bem-vindos</h1>
            <p>Dica de verão é provar a liberdade dada pelos longos dias e pelos feriados!</p>
            <hr />

            <div class="media">
                <div className="box">
                    <video controls>
                        <source src={video} />
                        <p>
                            Este navegador não suporta.
                        </p>
                    </video>
                </div>
            </div>

        </DivHome>
    )
}

export default Home;