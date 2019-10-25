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
    justify-content: center;
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
    width: 5rem;
    height: 4.2rem;
    margin-left: -1.4rem;
  }
  .header {
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
  }
  .header-text {
    display: flex;
    flex-direction: column;
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
      padding: 0.5rem 2rem 0.5rem 1.25rem;
      box-sizing: border-box;
    }
    .mobile--title {
      border-bottom: 1px solid #000;
      font-size: 1.5rem;
      padding-top: 1rem;
    }
    .mobile--tagline {
      display: flex;
      justify-content: center;
      color: #000;
      font-size: 0.8rem;
    }
    .logo {
      width: 3rem;
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
      <div className="kaiyros header">
        <Link href="/">
          <a>
            <img
              className="logo"
              src="../static/images/KairosLogoSquare.svg"
              alt=""
            />
          </a>
        </Link>
        <div className="header-text">
          <Link href="/">
            <a>
              <div className="title">
                <h1>Kaiyros Publications</h1>
              </div>
            </a>
          </Link>
          <h4>The Art of Human Experience</h4>
        </div>
      </div>

      <div className="mobile--nav">
        <Link href="/">
          <a className="logo-link">
            <img
              className="logo"
              src="../static/images/KairosLogoSquare.svg"
              alt=""
            />
            <div className="header-text">
              <h1 className="mobile--title">Kaiyros Publications</h1>
              <h4 className="mobile--tagline">The Art of Human Experiences</h4>
            </div>
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
