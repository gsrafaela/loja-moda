import Styled from 'styled-components'
import fim from '../../images/fim.png'

const DivSobre = Styled.div`
    background-color: #858c95ba;
    width: 798px;
    height: 718px;
    margin: 0 auto;
    border-radius: 50px;
    text-align: center;

    .fim {
        width: auto;
        height: 400px;
        padding: 32px;
        margin: 12px 0;
    }

    h1, p {
        color: #000;
    }

    h1 {
        padding-top: 32px;
        text-transform: uppercase;
    }

    p {
        font-size: 18px;
    }
`

const Sobre = () => {
    const eu = 'Rafaela Gomes da Silva - RM 94972';

    return (
        <DivSobre>
            <h1>Sobre</h1>
            <p>
                Segundo checkpoint deste segundo semestre é um site? <br></br>
                Talvez! <br></br> Mas a loja moda está ai para que você sempre esteja no estilo a toda hora.
            </p>
            <p>{eu}</p>

            <div className='box-fim'>
                <img src={fim} className='fim' />
            </div>

        </DivSobre>
    )
}

export default Sobre;