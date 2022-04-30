import './components.css';

import styled from 'styled-components';

import {CardWrapper} from './styles/CardWrapper.styled.js';
import CardRow from './styles/CardRow.js'



export const MainWrapper = styled.div`
    width: 80vw;
    padding-top: 11vh;
    padding-bottom: 5vh;
    margin: 0 auto;
    background-color: rgb(224, 222, 215);
    height: 95vh;
`




export const Main = (props) => {
    
    const {data} = []

    return (

            <div className="Maindiv">
                <CardWrapper>
                    <CardRow itemList={props.itemList} />
                </CardWrapper>
            </div>

    )
}

export default Main;