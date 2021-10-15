import styled from "styled-components";

type ContainerProps = {
  itsDone: boolean;
};

export const Container = styled.div(
  ({ itsDone }: ContainerProps) => `
  display: flex;
  background-color: #20212c;
  padding: 0.625rem;
  border-radius: 0.625rem;
  margin-bottom: 0.625rem;
  align-items: center;

  input {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.4rem;
  }

  label {
    color: #ccc;
    text-decoration: ${itsDone ? "line-through" : "initial"};
  }
`
);
