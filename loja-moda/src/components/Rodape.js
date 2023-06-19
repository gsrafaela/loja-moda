import Styled from 'styled-components'

const DivRodape = Styled.div`
color: black;
background: #c3c2cfd1;
width: 40%;
height: 23px;
margin: 57px auto;
padding: 3px 0;
border-radius: 30px;
text-align: center;
text-transform: uppercase;
font-size: 9px;
`

const Rodape = () => {
    return (
        <DivRodape>
            <p>Checkpoint - FIAP 2022</p>
        </DivRodape>
    )
}

export default Rodape;