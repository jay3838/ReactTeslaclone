import React,{useState} from 'react';
import styled from 'styled-components';
import Custom from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";



function Header() {
    const [jp,setjp] = useState(false);
    const cars = useSelector(selectUser);
    return (
        <Container>
            <a><img src="/images/logo.svg" alt="jp"/></a>
            <Menu>
                {/* <p><a href="#">Model S</a></p>
                <p><a href="#">Model X</a></p>
            <p><a href="#">Model Y</a></p> */}
                {cars && cars.map((cp,index)=>(
                   <p key={index}><a href="#" >{cp}</a></p> 
                ))}
            </Menu>
            <RightmMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <MenuIcon onClick={()=>setjp(true)}/>
            </RightmMenu>
            <Nav show={jp}>
                <Close>
                    <Custom onClick={()=>setjp(false)} />
                </Close>
                {cars && cars.map((cp,index)=>(
                   <li key={index}><a href="#">{cp}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-10</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roaded Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Roaded Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Roaded Inventory</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Roaded Inventory</a></li>
            </Nav>
        </Container>
       
    );
}

export default Header;

const Container = styled.div` 
    display: flex;
    align-items:center;
    position:fixed; 
    min-height:60px;
    width: 97vw;
    padding:0 20px;
    z-index: 20;
    box-shadow:1px 2px 4px grey;
    justify-content: space-between;
    a{
        text-decoration: none;
    }
    `;
const Menu = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    p{
        font-weight: 600;
        text-decoration: uppercase;
        padding:0 20px;
    }
    `;
const RightmMenu = styled.div` 
    display:flex;
    align-items:center;
    cursor: pointer;
    /* border: 1px solisd black; */
    a{
        margin-left: 10px;
        margin-right: 10px;
    }
    `;


const Nav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    border-radius:10px;
    background-color:white;
    width:250px;
    list-style: none;
    z-index:16;
    transform: ${props => props.show ? 'translateX(0)' : 'translate(100%)'};
    transition:transform 0.2s ease-in;
    li{
        
        padding: 15px 10px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        
        a{
            font-weight: 600;
        }
        :hover{
            background-color:lightgray;
            border-radius:10px;
        
        }
    }

`;



const Close = styled.div`
    display:flex;
    justify-content: flex-end;
    cursor:pointer;
`;