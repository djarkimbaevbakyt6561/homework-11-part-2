import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AddProductContext } from "../../contexts/AddProductContext";
import AddProductItem from "./Add-Product-Item";
const AddProduct = () => {
    const context = useContext(AddProductContext)
    const {  products, addedProductState } = context
    return (
        <Container>
            {products.map((el, index) => {

                return (
                    <AddProductItem
                        addButtonState={!addedProductState[index]}
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