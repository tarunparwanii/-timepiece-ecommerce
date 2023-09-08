import styled from 'styled-components';
import { Link } from 'react-router-dom';




export const HeaderContainer = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;

@media screen and (max-width: 800px) {
    height : 60px;
    padding : 10px;
    margin-bottom : 20px;
}


`

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;

@media screen and (max-width: 800px) {
    width : 50px;
    padding : 0;
}

`

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

@media screen and (max-width: 800px) {
    width : 80%;
}

`

//We use custom components like this!
export const OptionLink = styled(Link)`
padding: 10px 15px;
font-size: 1.2rem;
cursor: pointer;
`
export const OptionLink2 = styled.div`
padding: 4px 20px;
font-size: 1rem;
cursor: pointer;
color : white;
background : black;
`
