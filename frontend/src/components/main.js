
import styled from 'styled-components';

import {CardWrapper} from './styles/CardWrapper.styled.js';
import CardRow from './styles/CardRow.js'


 const Main = (props) => {


    return (

            <div className="Maindiv">
                <CardWrapper>
                    <CardRow itemList={props.itemList} />
                </CardWrapper>
            </div>

    )
}

export default Main;