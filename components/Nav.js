import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import SocialIcons from '../microcomponents/SocialIcons';
import CategoryMenu from './CategoryMenu';
import SearchInput from '../microcomponents/SearchInput';

const NavStyles = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
  }
  h1 {
    text-transform: capitalize;
    margin: 0;
    margin-bottom: 0.3rem;
    margin-left: 0.5rem;
    color: #000;
  }

  h4 {
    display: flex;
    justify-content: flex-end;
    font-size: 1.1rem;
    margin: 0.5rem 0;
    font-weight: 400;
  }
  .title {
    display: flex;
    border-bottom: 1px solid #000;
    align-items: flex-end;
  }
  .logo {
    width: 2.5rem;
    padding: 0.3rem;
  }
  .icons {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile--nav {
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    h1 {
      font-size: 1.5rem;
      margin: 0;
    }

    .kaiyros {
      display: none;
    }
    .logo-link {
      display: flex;
      align-items: center;
    }
    .mobile--nav {
      position: fixed;
      display: flex;
      align-items: center;
      width: 100%;
      background: #fff;
      top: 0;
      left: 0;
      justify-content: space-between;
      padding: 1rem 2rem 1rem 1.25rem;
      box-sizing: border-box;
    }
    .logo {
      width: 2rem;
      left: 1rem;
    }
    .menu {
      top: 1.5rem;
      right: 1rem;
      z-index: 100;
    }
  }
`;

export const Nav = props => {
  return (
    <NavStyles>
      <div className="kaiyros">
        <Link href="/">
          <a>
            <div className="title">
              <img
                className="logo"
                src="../static/images/KairosLogoSquare.svg"
                alt=""
              />
              <h1>Kaiyros Publications</h1>
            </div>
          </a>
        </Link>
        <h4>the Art of Human Experience</h4>
      </div>

      <div className="mobile--nav">
        <Link href="/">
          <a className="logo-link">
            <img
              className="logo"
              src="../static/images/KairosLogoSquare.svg"
              alt=""
            />
            <h1>Kaiyros</h1>
          </a>
        </Link>
        <div className="menu">
          <CategoryMenu {...props} />
        </div>
      </div>

      <div className="icons">
        <SearchInput />
        <SocialIcons />
        <CategoryMenu {...props} />
      </div>
    </NavStyles>
  );
};

export default Nav;
