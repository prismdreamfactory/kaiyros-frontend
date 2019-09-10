import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import SocialIcons from '../microcomponents/SocialIcons';
import HamburgerMenuIcon from '../microcomponents/HamburgerMenuIcon';
import CloseIcon from '../microcomponents/CloseIcon';

const CategoryList = styled.div`
  .hide {
    transform: translate3d(100vw, 0, 0);
  }

  .show {
    transform: translate3d(70vw, 0, 0);
    overflow: hidden;
    justify-content: center;
    max-width: 30%;

    @media (min-width: 0px) and (max-width: 1024px) {
      transform: translate3d(0vw, 0, 0);
      max-width: none;
    }
  }
`;

const CategoryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
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
    margin-left: 2rem;
  }

  .social-icons {
    display: none;
    justify-content: center;
    @media (min-width: 0px) and (max-width: 1024px) {
      display: flex;
      justify-content: center;
    }
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
          <CloseIcon handleClick={this.handleCloseMenu} />

          <CategoryItem>
            <div>
              {categories.map(category => (
                <div className="categoryEntry" key={category.id}>
                  <img
                    src={category.acf.image.sizes.thumbnail}
                    alt="placeholder"
                  />
                  <Link
                    as={`/category/${category.slug}`}
                    href={`/category/${category.slug}`}
                  >
                    <a>{category.name}</a>
                  </Link>
                </div>
              ))}

              <div className="social-icons">
                <SocialIcons />
              </div>
            </div>
          </CategoryItem>
        </CategoryContainer>
        <HamburgerMenuIcon handleClick={this.handleOpenMenu} />
      </CategoryList>
    );
  }
}

export default CategoryMenu;
