import styled from 'styled-components'

export const Canvas = styled.canvas`
   border:1px solid #d3d3d3;
   max-width:90%;
   
`

export const Container = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   margin-top:30px;

`
export const Button = styled.button`
   background:#1da57a;
   width:50%;
   height:50px;
   margin-top:1em;
   color:white;
   border: white;
   outline:none;
   font-size: 17px;
   &:hover{
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}

`
export const Img = styled.img`
   display: none;
`
