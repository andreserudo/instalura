import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

HeaderWrapper.Left = styled.div``;

HeaderWrapper.Right = styled.div`
  display: flex;
  align-items: center;

  li {
    list-style: none;
  }
`;

export default HeaderWrapper;
