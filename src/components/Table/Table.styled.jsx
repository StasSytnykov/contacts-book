import styled from "styled-components";

export const DivThumb = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TableStyled = styled.table`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid gray;
`;

export const TrHead = styled.tr`
  display: flex;
  border: 1px solid gray;
`;

export const TableBodyTh = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 10px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

export const TableBodyTd = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 10px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

export const Span = styled.span`
  background: ${(props) => (props.isOnline ? "green" : "red")};
`;
