import { useEffect, useState } from 'react';
import styled from 'styled-components';

export type CardProps = {
  id?: number;
  name: string;
  image: string;
  price: string;
  votes: number;
  rating: number | string | null;
  popular: boolean;
  available: boolean;
};

export function Card({
  name,
  image,
  price,
  votes,
  rating,
  popular,
  available,
}: CardProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        {popular && <PopularLabel>Popular</PopularLabel>}
        <Image src={`${image}`} />{' '}
      </ImageWrapper>

      <Row>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Row>

      <Row>
        {rating ? <Rating>{rating}</Rating> : <NoRating>No ratings</NoRating>}

        {!available && <SoldOut>Sold out</SoldOut>}
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* border: 1px solid deeppink; */

  color: var(--primary);
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  border-radius: 8px;
`;

const Name = styled.h4``;

const Price = styled.label`
  padding: 6px 10px;
  color: var(--black);
  background-color: var(--price);
  border-radius: 4px;
  font-weight: 600;
`;

const Rating = styled.span``;

const NoRating = styled.span``;

const SoldOut = styled.p`
  font-weight: 500;
  color: var(--sold-out-text);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const PopularLabel = styled.label`
  background-color: #f6c768;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--black);
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 0px 10px;
  height: 24;
  line-height: 24px;
  border-radius: 8px;
`;
