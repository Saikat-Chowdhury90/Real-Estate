import React,{useState} from 'react'
import LeftNav from '../LeftNav/LeftNav';
// import './HamBurger.css'
import styled from 'styled-components';

const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 1rem;
left: 1.5rem;
display: flex;
justify-content: space-around;
flex-flow:column  nowrap;
z-index: 20;

div{
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: black;
  transform-origin:32px;
  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }
}
`;
const HamBurger = () => {
 const [open,setOpen] = useState(false);
 
  return (
    <>
   <StyledBurger open={open} onClick = {() => setOpen(!open) }>

        <div></div>
        <div></div>
        <div></div>

   </StyledBurger>
   <LeftNav open={open}/>
   </>
  )
}

export default HamBurger