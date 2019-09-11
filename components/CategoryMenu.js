import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import SocialIcons from '../microcomponents/SocialIcons';
import HamburgerMenuIcon from '../microcomponents/HamburgerMenuIcon';
import CloseIcon from '../microcomponents/CloseIcon';
import Footer from '../components/Footer';

const CategoryList = styled.div`
  max-width: 1100px;

  .hide {
    transform: translate3d(100%, 0, 0);
  }

  .show {
    transform: translate3d(0, 0, 0);
    overflow: hidden;
    justify-content: center;
    max-width: 500px;

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
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1.5rem;

  a {
    text-decoration: none;
    cursor: pointer;
    color: #000;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  img {
    width: 15%;
    padding: 0;
  }

  .category-title {
    margin-left: 1rem;
  }

  .social-icons {
    display: flex;
    justify-content: center;
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
              {categories.map(category => this.renderCategoryLinks(category))}
              <div>
                <Footer {...this.props} />
              </div>

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

  renderCategoryLinks = category => {
    return (
      <Link href={`/category/${category.slug}`} key={category.id}>
        <a>
          <img src={category.acf.image.sizes.thumbnail} alt="placeholder" />
          <span className="category-title">{category.name}</span>
        </a>
      </Link>
    );
  };
}

export default CategoryMenu;
