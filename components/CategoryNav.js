import Link from 'next/link';
import styled from 'styled-components';
import SocialIcons from '../microcomponents/SocialIcons';
import Footer from '../components/Footer';

export const CategoryNav = props => {
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

  const renderCategoryLinks = category => {
    return (
      <Link href={`/category/${category.slug}`} key={category.id}>
        <a>
          <img src={category.acf.image.sizes.thumbnail} alt="placeholder" />
          <span className="category-title">{category.name}</span>
        </a>
      </Link>
    );
  };

  return (
    <CategoryItem>
      <div>
        {props.categories.map(category => renderCategoryLinks(category))}
        <div>
          <Footer {...props} />
        </div>

        <div className="social-icons">
          <SocialIcons />
        </div>
      </div>
    </CategoryItem>
  );
};
