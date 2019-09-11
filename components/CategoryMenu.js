import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenuIcon from '../microcomponents/HamburgerMenuIcon';
import CloseIcon from '../microcomponents/CloseIcon';
import { CategoryNav } from './CategoryNav';

const CategoryMenuDisplay = styled.div`
  max-width: 1100px;

  .hide {
    transform: translate3d(100%, 0, 0);
  }

  .show {
    transform: translate3d(0, 0, 0);
    overflow: hidden;

    @media (max-width: 1024px) {
      max-width: 100%;
    }
  }
`;

const CategoryMenuStyles = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  display: flex;
  justify-content: center;
  max-width: 500px;
`;

const CategoryMenu = props => {
  const [menuIsOpen, openMenu] = useState(false);

  return (
    <CategoryMenuDisplay>
      <CategoryMenuStyles className={menuIsOpen ? 'show' : 'hide'}>
        <CloseIcon onClick={() => openMenu(false)} />

        <CategoryNav {...props} />
      </CategoryMenuStyles>
      <HamburgerMenuIcon onClick={() => openMenu(true)} />
    </CategoryMenuDisplay>
  );
};

export default CategoryMenu;
