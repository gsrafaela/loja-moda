import Styled from 'styled-components'
import kids from '../../images/infantil.png'
import roupa1 from '../../images/roupas/infantil1.png'
import roupa2 from '../../images/roupas/infantil2.png'
import roupa3 from '../../images/roupas/infantil3.png'

const DivModaInfantil = Styled.div`
    background-color: #c3c2cf87;
    width: 798px;
    height: 772px;
    margin: auto;
    border-radius: 50px;
    text-align: center;

.banner .kids {
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

const ModaInfantil = () => {
    return (
        <DivModaInfantil>
            <div class="banner">
                <img src={kids} className='kids' />
                <h1>Moda Infantil</h1>
                <p>
                    É verdade. Vestir uma roupa nova é sempre muito bom. O astral se renova.
                    A gente se sente bem, parece que tudo fica mais bonito.
                    Sinta-se bem comprando roupas para você e toda a sua família
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


        </DivModaInfantil>
    )
}

export default ModaInfantil;