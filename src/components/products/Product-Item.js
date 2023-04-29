import React, { useContext, useEffect, useReducer } from "react";
import styled from "styled-components";
import { CountContext } from "../../contexts/CountContext";

const ProductItem = ({ onClick, id, image, title, number, falseAddHandler, el }) => {
   const context = useContext(CountContext)
   return (
      <ProductContainer>
         <Container>
            <Number>{number}</Number>
            <ImageProduct src={image} alt={title} />
            <ProductName>{title}</ProductName>
         </Container>
         <Price>{context.price}</Price>
         <QuantityContainer>
            <QuantityButton onClick={context.minusHandler}>-</QuantityButton>
            <QuantityNumber>{context.count}</QuantityNumber>
            <QuantityButton onClick={context.plusHandler}>+</QuantityButton>
         </QuantityContainer>
         <RemoveButton onClick={() => {
            onClick(id, context.price)
            falseAddHandler(el)
         }}>Remove</RemoveButton>
      </ProductContainer>
   )
}
export default ProductItem
const Container = styled.div`
   display: flex;
   justify-content: space-around;
   width: 450px;
   margin-top: 10px;
   margin-bottom: 10px;
   align-items: center;
`
const ProductContainer = styled.li`
   width: 920px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-top: 2px solid rgb(226, 226, 226);
`
const Number = styled.p`
   margin: 0;
   font-weight: 600;
`
const ProductName = styled.p`
   margin: 0;
   font-weight: 600;
`
const Price = styled.p`
   margin: 0;
   font-weight: 600;
   position: relative;
   right: 12px;
`
const QuantityContainer = styled.div`
   display: flex;
   position: relative;
   left: 6px;
`
const QuantityNumber = styled.p`
   margin: 0;
   font-weight: 600;
   margin-left: 5px;
   margin-right: 5px;

`
const QuantityButton = styled.button`
   font-weight: 600;
   background-color: #28E7EE;
   border-radius: 5px;
   border: none;
   width: 25px;
   height: 25px;
`
const RemoveButton = styled.button`
   font-weight: 600;
   border: none;
   border-radius:5px ;
   width: 80px;
   height: 40px;
   background-color: #FF3333;
   color: white;
   margin-right: 38px;
`
const ImageProduct = styled.img`
   width: 55px;
   height: 55px;
   margin-right: 15px;
`