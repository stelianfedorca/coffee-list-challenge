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
  transition: all 1500ms;
`;
