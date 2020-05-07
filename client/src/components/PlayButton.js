import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
border: 1px solid black;
background: ${props => props.bgColor};
width: ${props => props.width || '100px'};
height: ${props => props.height || '40px'};
display: inline-block;
margin-left: 5px;
border-radius: 5px;

`;

export default StyledButton;
