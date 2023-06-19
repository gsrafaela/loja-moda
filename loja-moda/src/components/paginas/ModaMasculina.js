import Styled from 'styled-components'
import man from '../../images/masculino.png'
import roupa1 from '../../images/roupas/masculino1.png'
import roupa2 from '../../images/roupas/masculino2.png'
import roupa3 from '../../images/roupas/masculino3.png'


const DivModaMasculina = Styled.div`
    background-color: #c3c2cf87;
    width: 798px;
    height: 838px;
    margin: auto;
    border-radius: 50px;
    text-align: center;

    .banner .man {
        width: auto;
        height: 274px;
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

const ModaMasculina = () => {
    return (
        <DivModaMasculina>
            <div className='banner'>
                <img src={man} className='man' />
                <h1>Moda Masculina</h1>
                <p>
                    Existem três coisas muito importantes na hora de escolher uma roupa: ajuste, tecido e estilo.
                    Compre roupas do seu tamanho, que lhe cabe hoje, não conte com uma mudança corporal.
                    Verifique a qualidade do tecido, nem sempre vale a pena comprar o mais barato. E o mais importante, compre de acordo com seu estilo.
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



        </DivModaMasculina>
    )
}

export default ModaMasculina;