import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.625rem;
  border: 1px solid #444;
  margin: 0.5rem 0;
  border-radius: 0.625rem;

  .addtask {
    margin-right: 0.3rem;
    margin-top: -0.15rem;
  }

  input {
    border: none;
    background: transparent;
    color: #ccc;
    outline: none;
    flex: 1;
    font-size: 1.1rem;
  }
`;
