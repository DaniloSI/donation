import styled from 'styled-components';

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: fit-content;
  border-radius: 8px;
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
`;

export const TitleItem = styled.h1`
  font-size: large;
  font-weight: 400;
  margin: 8px 8px;
  margin-bottom: 0px;
`;

export const WrapperPricing = styled.div`
  display: flex;
  align-items: center;
  color: green;
  margin: 8px;
`;

export const PricingText = styled.span`
  font-size: x-large;
  font-weight: 400;
  margin-left: 6px;
`;
