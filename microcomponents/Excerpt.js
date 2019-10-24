import styled from 'styled-components';

const Excerpt = props => {
  const { data } = props;

  // return excerpt formatted as html
  const htmlExcerpt = () => {
    // approx length of excerpt
    const length = 50;

    // const splitExcerpt = data
    //   .trim()
    //   .split(' ')
    //   .splice(length);

    // // store additional words to reach close tag </p>
    // let index;

    // for (let i = 0; i < splitExcerpt.length; i++) {
    //   if (splitExcerpt[i].includes('</p>')) {
    //     index = i;
    //     break;
    //   }
    // }

    // const finalLength = length + index;

    return data
      .trim()
      .split(' ')
      .slice(0, length)
      .join(' ')
      .concat('...');
  };

  return (
    <ExcerptStyles
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        // __html: htmlExcerpt()
        __html: data
      }}
    />
  );
};

const ExcerptStyles = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;

export default Excerpt;
