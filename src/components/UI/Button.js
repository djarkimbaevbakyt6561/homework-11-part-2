import styled from "styled-components"
const Button = ({ onClick, children, bgColor }) => {
    return (
        <AddButton bgColor={bgColor} onClick={onClick}>{children}</AddButton>
    )
}
export default Button
const AddButton = styled.button`
  padding: 12px 26px;
  color: aliceblue;
  background:${props => props.bgColor ? "#00C914" : "gray"} ;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  `