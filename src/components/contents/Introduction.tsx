import styled from "styled-components";

const Introduction: React.FC = () => {
  const Div = styled.div`
  flex;
  `;

  return (
    <>
      <Div>
        <img src="logo512.png" />
        <h1>こんにちは</h1>
      </Div>
    </>
  );
};

export default Introduction;
