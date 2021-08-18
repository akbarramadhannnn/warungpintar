import React from 'react';
import { Link } from 'react-router-dom';
import HeadingWrapper, { TitleArea, LinkArea } from './HeadingStyle';

const Index = ({ title, link }) => {
  return (
    <HeadingWrapper>
      <TitleArea>
        <h1>{title}</h1>
      </TitleArea>

      {link && (
        <LinkArea>
          <Link to={link}>Lihat Semua</Link>
        </LinkArea>
      )}
    </HeadingWrapper>
  );
};

export default Index;
