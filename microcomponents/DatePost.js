import React from 'react';
import styled from 'styled-components';

const DateStyle = styled.span`
  font-size: 1rem;
`;

export const DatePost = props => {
  const { datesrc } = props;
  const event = new Date(datesrc);
  const options = {
    year: '2-digit',
    month: 'short',
    day: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles'
  };
  const date = new Intl.DateTimeFormat('en-US', options).format(event);

  return <DateStyle>{date}</DateStyle>;
};

export default DatePost;
