import navItems from '@/static/navItems';

import { Wrapper, Ul, Li, MenuLink, Text } from './styles';

const NavBar = () => {
  const activeUrl = '/';

  return (
    <Wrapper>
      <Ul>
        {navItems.map(({ link, Icon, text }) => (
          <Li key={text}>
            <MenuLink href={link} active={link === activeUrl}>
              <Icon size={24} />
              <Text>{text}</Text>
            </MenuLink>
          </Li>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default NavBar;
