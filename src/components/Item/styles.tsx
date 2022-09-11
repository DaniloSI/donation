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
  font-size: medium;
  font-weight: 400;
  margin: 8px 8px;
  margin-bottom: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const WrapperPricing = styled.div`
  display: flex;
  align-items: center;
  color: green;
  margin: 8px;
  margin-top: 14px;
`;

export const PricingText = styled.span`
  font-size: large;
  font-weight: 400;
  margin-left: 2px;
`;
