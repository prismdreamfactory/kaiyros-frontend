const Excerpt = props => {
  const { data } = props;

  // return excerpt formatted as html
  const htmlExcerpt = () => {
    // approx length of excerpt
    const length = 80;

    const splitExcerpt = data
      .trim()
      .split(' ')
      .splice(length);

    // store additional words to reach close tag </p>
    let index;

    for (let i = 0; i < splitExcerpt.length; i++) {
      if (splitExcerpt[i].includes('</p>')) {
        index = i;
        break;
      }
    }

    const finalLength = length + index > 200 ? length : length + index;

    return data
      .trim()
      .split(' ')
      .slice(0, finalLength)
      .join(' ')
      .concat('...');
  };

  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: htmlExcerpt()
      }}
    />
  );
};

export default Excerpt;
