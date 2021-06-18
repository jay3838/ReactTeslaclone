import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImage, leftbtntext, rightbtntext}) {
    return (
       <Wrap bgImage={backgroundImage}>
        <Fade top>
        <Item>
            <h1>{title}</h1>
            <p>{description}</p>
        </Item>
        </Fade>

    <Buttons>
        <Fade bottom>
        <Buttongp>
            <LeftButton>
                {leftbtntext}
            </LeftButton>
            {rightbtntext && 

            <RightButton>
                   {rightbtntext}
                </RightButton>
            } 
        </Buttongp>
        <Downar src="/images/down-arrow.svg"/>
    </Fade>
    </Buttons>
       </Wrap>
    );
}

export default Section; 

const Wrap = styled.div`
    width:100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction: column;
`;

const Item = styled.div`    
    padding-top: 15vh;
    text-align:center;
`;




const Buttons = styled.div`
    display: flex;
    flex:1;
    justify-content:flex-end;
    align-items:center;
    flex-direction:column;

    
`;
const Buttongp = styled.div`
    display: flex;
`;

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width:256px;
    display: flex;
    color: white;
    justify-content:center;
    align-items:center;
    border-radius: 100px;
    font-size:12px;
    opacity: 0.85;
    letter-spacing:1px;
    cursor:pointer;
    margin-left:10px;
    
    
    
    `;

const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity: 0.85;
`;

const Downar = styled.img`
    height:40px;
    margin-top:20px;
    animation:animation infinite 1.5s;
`;
