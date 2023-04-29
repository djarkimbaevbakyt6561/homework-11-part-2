import React, { useContext, useState } from "react";
import styled from "styled-components";
import AddProductItem from "./Add-Product-Item";
const AddProduct = ({ addProduct, products, addedProductState, trueAddHandler }) => {
    return (
        <Container>
            {products.map((el, index) => {

                return (
                    <AddProductItem
                        trueAddHandler={trueAddHandler}
                        addButtonState={!addedProductState[index]}
                        addProduct={addProduct}
                        data={el}
                        key={el.id}
                    />
                );
            })}
        </Container>
    )
}
const Container = styled.ul`
   display: flex;
   flex-wrap:wrap;
   margin: 0;
   padding: 0;
   width: 920px;
   justify-content: space-evenly;
`
export default AddProduct