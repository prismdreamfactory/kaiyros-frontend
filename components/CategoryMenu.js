import React, { Component } from 'react';
import styled from 'styled-components';
import HamburgerMenuIcon from '../microcomponents/HamburgerMenuIcon';
import CloseIcon from '../microcomponents/CloseIcon';
import { CategoryNav } from './CategoryNav';

const CategoryList = styled.div`
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

const CategoryContainer = styled.div`
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

class CategoryMenu extends Component {
  state = {
    menuIsOpen: false
  };

  handleOpenMenu = () => {
    this.setState(prevState => ({
      menuIsOpen: !prevState.menuIsOpen
    }));
  };

  handleCloseMenu = () => {
    this.setState(prevState => ({
      menuIsOpen: !prevState.menuIsOpen
    }));
  };

  render() {
    const { menuIsOpen } = this.state;
    const { categories } = this.props;

    let visibility = 'hide';

    if (menuIsOpen) {
      visibility = 'show';
    }

    return (
      <CategoryList>
        <CategoryContainer className={visibility}>
          <CloseIcon handleClick={this.handleCloseMenu} />

          <CategoryNav categories={categories} {...this.props} />
        </CategoryContainer>
        <HamburgerMenuIcon handleClick={this.handleOpenMenu} />
      </CategoryList>
    );
  }
}

export default CategoryMenu;
