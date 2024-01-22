import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { CardGrid } from '../CardGrid';

// import data from '../../data.json';
import { Card } from '../Card';
import { useCoffeeData } from '../../hooks';
import { CardProps } from '../Card/Card';

type CoffeeModalProps = {
  children: ReactNode;
};

type InlineStyleProps = {
  '--color'?: string;
};

enum ButtonNames {
  AllProducts = 'All Products',
  AvailableNow = 'Available now',
}

export function CoffeeModal() {
  const { data, isLoading } = useCoffeeData<CardProps>();
  console.log('data: ', data);
  const [selectedButton, setSelectedButton] = useState<ButtonNames>(
    ButtonNames.AllProducts
  );

  const filteredData =
    selectedButton === ButtonNames.AvailableNow
      ? data?.filter(coffeeData => coffeeData.available === false)
      : data;
  return (
    <Wrapper>
      <>
        <Header>
          <Title>Our Collection</Title>
          <Subtitle>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </Subtitle>
        </Header>
        <Main>
          <>
            <RowButtons>
              <DefaultButton
                color={
                  selectedButton === ButtonNames.AllProducts
                    ? '#6F757C'
                    : 'transparent'
                }
                onClick={() => {
                  setSelectedButton(ButtonNames.AllProducts);
                }}
              >
                All Products
              </DefaultButton>
              <DefaultButton
                color={
                  selectedButton === ButtonNames.AvailableNow
                    ? '#6F757C'
                    : 'transparent'
                }
                onClick={() => {
                  setSelectedButton(ButtonNames.AvailableNow);
                }}
              >
                Available now
              </DefaultButton>
            </RowButtons>
            <CardGrid>
              {filteredData &&
                filteredData.map(coffee => (
                  <Card {...coffee} key={coffee.id} />
                ))}
            </CardGrid>
          </>
        </Main>
      </>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  background-color: #1b1d1f;
  gap: 20px;
  padding: 70px 100px;
  border-radius: 16px;
  margin-top: 100px;
`;

const Header = styled.header`
  max-width: 500px;
  text-align: center;
  gap: 20px;
`;

const RowButtons = styled.div`
  display: flex;
  align-self: center;
  gap: 20px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h1`
  color: var(--primary);
  align-self: center;
`;

const Subtitle = styled.h2`
  color: var(--secondary);
`;

const DefaultButton = styled.button`
  color: var(--primary);
  border-radius: 8px;
  padding: 10px;
  border: none;
  background-color: ${props => props.color};
  cursor: pointer;

  transition: background-color 0.5s ease-in-out;
`;

const SelectedButton = styled(DefaultButton)``;
