import React, { useState, useEffect, useReducer, useContext } from "react";
import styled from "styled-components";
import CountProvider from "../../contexts/CountContext";
import { TotalPriceContext } from "../../contexts/TotalPriceContext";
import ProductItem from "./Product-Item";


const Products = ({ onClick, products, falseAddHandler }) => {
    const context = useContext(TotalPriceContext)
    return (
        <Container>
            <ProductContainer>
                <p>#</p>
                <p>Product</p>
                <p>Product Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </ProductContainer>
            <OrderedList>
                {products.map((el, index) => {
                    return (
                        <CountProvider onPriceChange={context.calculateTotalHandler} price={el.price}>
                            <ProductItem
                                falseAddHandler={falseAddHandler}
                                el={el}
                                onClick={onClick}
                                id={el.id}
                                key={el.id}
                                number={index + 1}
                                image={el.image}
                                title={el.title}
                            />
                        </CountProvider>

                    );
                })}
            </OrderedList>
            <p>TOTAL:{context.totalPrice.totalPrice}</p>
        </Container>
    );
};
export default Products
const ProductContainer = styled.div`
   display: flex;
   justify-content: space-around;
   font-weight: 600;
   border-top: 2px solid #E2E2E2;
   font-size: 16px;


`
const Container = styled.div`
   display: flex;
   width: 920px;
   flex-direction: column;
   margin-top: 10px;
`
const OrderedList = styled.ol`
    padding: 0;
    margin: 0;
`