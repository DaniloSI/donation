import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #dadada;
  padding: 16px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;

export const Li = styled.li`
  width: fit-content;
`;

interface MenuLinkProps {
  active: boolean;
}

export const MenuLink = styled.a<MenuLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : 'inherit'};
  text-decoration: inherit;
`;

export const Text = styled.span`
  margin-top: 8px;
  font-size: 14px;
`;
