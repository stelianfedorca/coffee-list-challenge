import { ReactNode } from 'react';
import styled from 'styled-components';

type CardGridProps = {
  children: ReactNode;
};

export function CardGrid({ children }: CardGridProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 30px;

  @media ${props => props.theme.queries.tabletAndDown} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.queries.phoneAndDown} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
