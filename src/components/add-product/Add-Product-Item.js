import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AddProductContext } from "../../contexts/AddProductContext";
import Button from "../UI/Button";
const AddProductItem = ({ data, addButtonState, key }) => {
    const context = useContext(AddProductContext)
    const { trueAddHandler, addNewProductHandler } = context
    console.log(addNewProductHandler);
    return (
        <Container key={key}>
            <Image src={data.image} />
            <div>
                <ProductName>{data.title} - <span>$ {data.price}</span></ProductName>
                {addButtonState ?
                    <Button bgColor={addButtonState} onClick={() => {
                        addNewProductHandler(data);
                        trueAddHandler(data)
                    }}>Add</Button>
                    : <Button bgColor={addButtonState}>Added</Button>}

            </div>
        </Container>
    )
}
const Container = styled.li`
        width: 200px;
        margin-top: 20px;
        height: 280px;
        border-radius: 5px;
        border: 1px solid rgb(226, 226, 226);
        list-style: none;

    `
const Image = styled.img`
        width: 200px;
        height: 150px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    `
const ProductName = styled.p`
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
    `
export default AddProductItem