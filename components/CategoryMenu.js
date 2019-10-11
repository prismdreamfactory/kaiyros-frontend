import React, { useState } from 'react';
import styled from 'styled-components';
import HamburgerMenuIcon from '../microcomponents/HamburgerMenuIcon';
import CloseIcon from '../microcomponents/CloseIcon';
import { CategoryNav } from './CategoryNav';
import Footer from './Footer';
import SocialIcons from '../microcomponents/SocialIcons';
import SearchInput from '../microcomponents/SearchInput';

const CategoryMenuDisplay = styled.div`
  max-width: 1100px;

  .hide {
    transform: translate3d(100%, 0, 0);
  }

  .show {
    transform: translate3d(0, 0, 0);

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
  display: flex;
  justify-content: center;
  max-width: 480px;
  padding: 1.5rem;
  box-sizing: border-box;
`;

const CategoryNavStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .search {
    display: flex;
    justify-content: center;
    margin-left: 2rem;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const CategoryMenu = props => {
  const [menuIsOpen, openMenu] = useState(false);

  return (
    <CategoryMenuDisplay>
      <CategoryMenuStyles className={menuIsOpen ? 'show' : 'hide'}>
        <CloseIcon onClick={() => openMenu(false)} />

        <CategoryNavStyles>
          <CategoryNav {...props} displaySubtitle />

          <Footer {...props} isCenter />

          <div className="search">
            <SearchInput />
          </div>

          <div className="social-icons">
            <SocialIcons />
          </div>
        </CategoryNavStyles>
      </CategoryMenuStyles>
      <HamburgerMenuIcon onClick={() => openMenu(true)} />
    </CategoryMenuDisplay>
  );
};

export default CategoryMenu;
