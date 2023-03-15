import React from 'react';
// import './LeftNav.css';
import styled from 'styled-components';
const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: -20px;
    left:0;
    height: 100vh;
    width: 250px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    background-color:white;
   

    li
    {
      padding:1.5rem;
      
    }
    
`;
const LeftNav = ({open}) => {
  return (
    <div className='left-nav'>

        <UL open = {open}>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>ESTATE</li>
          <li>BLOG</li>
          <li>HELP</li>
        </UL>
        
    </div>

  )
}

export default LeftNav