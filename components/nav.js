import React from 'react';
import styled from 'styled-components';
import SocialIcons from '../microcomponents/SocialIcons';
import CategoryMenu from './CategoryMenu';

const NavStyles = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
  h1 {
    text-transform: uppercase;
    margin-bottom: 0.3rem;
  }
  h1:hover {
    color: #2b9985;
  }
  h4 {
    text-transform: uppercase;
    margin-left: 8rem;
  }
  .title {
    display: flex;
    border-bottom: 2px solid #000;
    align-items: flex-end;
  }
  .logo {
    width: 4rem;
    border: 1px solid #000;
    margin: 0.7rem;
    padding: 0.3rem;
  }
  .icons {
    display: flex;
    align-items: center;
    padding: 1.5rem;
  }

  .mobile {
    display: none;
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    h1 {
      font-size: 1.5rem;
      margin: 0;
    }

    .kaiyros {
      display: none;
    }
    .alignCenter {
      display: flex;
      align-items: center;
    }
    .mobile {
      position: fixed;
      display: flex;
      align-items: center;
      width: 100%;
      background: #fff;
      top: 0;
    }
    .logo {
      width: 2rem;
    }
    .menu {
      position: fixed;
      top: 1.5rem;
      right: 1rem;
    }
  }
`;

export const Nav = props => {
  return (
    <NavStyles>
      <div className="kaiyros">
        <a href="/">
          <div className="title">
            <img
              className="logo"
              src="../static/images/KairosLogoSquare.svg"
              alt=""
            />
            <h1>Kaiyros.net</h1>
          </div>
        </a>
        <h4>Connecting the :Dots: of Human Potential</h4>
      </div>

      {/* mobile banner */}
      <div className="mobile">
        <a className="alignCenter" href="/">
          <img
            className="logo"
            src="../static/images/KairosLogoSquare.svg"
            alt=""
          />
          <h1>Kaiyros.net</h1>
        </a>
        <div className="menu">
          <CategoryMenu {...props} />
        </div>
      </div>

      {/* general icons */}
      <div className="icons">
        <SocialIcons />
        <CategoryMenu {...props} />
      </div>
    </NavStyles>
  );
};

export default Nav;
