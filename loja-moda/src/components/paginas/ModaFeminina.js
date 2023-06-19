import Styled from 'styled-components'
import woman from '../../images/feminino.png'
import roupa1 from '../../images/roupas/feminino1.png'
import roupa2 from '../../images/roupas/feminino2.png'
import roupa3 from '../../images/roupas/feminino3.png'

const DivModaFeminina = Styled.div`
    background-color: #c3c2cf87;
    width: 798px;
    height: 772px;
    margin: auto;
    border-radius: 50px;
    text-align: center;

    .banner .woman {
        width: auto;
        height: 232px;
        padding: 28px;

    }

    h1{
        width: 100%;
        height: auto;
        text-transform: uppercase;
    }

    p{
        text-align: center;
        font-size: larger;
        width: 630px;
        display: inline-grid;
        justify-content: center;
    }

    .produto .box {
        height: 220px;
        width: 201px;
        background-color: rgb(160 161 169 / 33%);
        margin: 6px;
        padding: 14px;
        display: inline-block;
        border-radius: 30px;
       
    }

    .produto .box h2 {
        color: #000;
        font-weight: bold;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
    }

    .produto .box p {
        color: #3b49ad;
        text-align: center;
        margin-top: -53px;
        margin-left: -216px;
    }
    
    .produto .box .vest{
        background-image: radial-gradient(gray,#0000001f);
        width: auto;
        height: 150px;
        padding: 5px;
        border-radius: 18px;
    }
        
    }

    .produto .box: hover{
        backgroud-color: #fff;
        transform: scale(1.2, 1.2);

    }
`

const ModaFeminina = () => {
    return (
        <DivModaFeminina>
            <div class="banner">
                <img src={woman} className='woman' />
                <h1>Moda Feminina</h1>
                <p>
                    A leveza e a descontração da estação estão estampadas neste lindo look floral. Os
                    vestidos longos são uma super tendência da moda primavera / verão. O tecido fluído
                    e a cinturinha marcada combinam e valorizam vários estilos.
                </p>
            </div>

            <div class="produto">
                <div class="box">
                    <img src={roupa1} className='vest' />
                    <h2>Roupa Cara</h2>
                    <p>$ 100,00</p>
                </div>
                <div class="box">
                    <img src={roupa2} className='vest' />
                    <h2>Roupa Cara</h2>
                    <p>$ 100,00</p>
                </div>
                <div class="box">
                    <img src={roupa3} className='vest' />
                    <h2>Roupa Cara</h2>
                    <p>$ 100,00</p>
                </div>
            </div>


        </DivModaFeminina>
    )
}

export default ModaFeminina;