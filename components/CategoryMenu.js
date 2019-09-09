import React, { Component } from 'react';
import styled from 'styled-components';
import SocialIcons from '../microcomponents/SocialIcons';

const CategoryList = styled.div`
  .hide {
    transform: translate3d(100vw, 0, 0);
  }

  .show {
    transform: translate3d(62vw, 0, 0);
    overflow: hidden;
    justify-content: center;
    max-width: 500px;

    @media (min-width: 0px) and (max-width: 1024px) {
      transform: translate3d(0vw, 0, 0);
      max-width: none;
    }
  }
`;

const CategoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 1000;
  display: flex;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #000;
  }
  img {
    width: 15%;
    padding: 0 1rem;
  }
  .categoryEntry {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .stuff {
    display: none;
    justify-content: center;
    @media (min-width: 0px) and (max-width: 1024px) {
      display: flex;
      justify-content: center;
    }
  }
`;

const Open = styled.a`
  /* position: fixed;
  top: 2rem;
  right: 2rem; */
  cursor: pointer;

  div {
    width: 35px;
    height: 3px;
    background-color: black;
    margin: 6px 0;
  }
`;

const Close = styled.a`
  display: flex;
  justify-content: flex-end;

  .close {
    padding: 0 1rem;
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;
  }

  .close:before {
    content: '';
    height: 40px;
    border-left: 2px solid #000;
    position: absolute;
    transform: rotate(-45deg);
    left: 28px;
  }
  .close:after {
    content: '';
    height: 40px;
    border-left: 2px solid #000;
    position: absolute;
    transform: rotate(45deg);
    left: 28px;
  }
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
          <CategoryItem>
            <div>
              <Close onClick={this.handleCloseMenu}>
                <div className="close" />
              </Close>

              {categories.map(category => (
                <div className="categoryEntry" key={category.id}>
                  <img
                    src={category.acf.image.sizes.thumbnail}
                    alt="placeholder"
                  />
                  <a href={category.link} alt="">
                    {category.name}
                  </a>
                </div>
              ))}

              <div className="stuff">
                <SocialIcons />
              </div>
            </div>
          </CategoryItem>
        </CategoryContainer>
        <Open onClick={this.handleOpenMenu}>
          <div />
          <div />
          <div />
        </Open>
      </CategoryList>
    );
  }
}

export default CategoryMenu;
