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
  max-width: 1200px;
  margin: 72px;
  /* margin: 0; */
  background-color: #1b1d1f;
  gap: 20px;
  padding: 70px 100px;
  border-radius: 16px;
  margin-top: 100px;

  @media ${props => props.theme.queries.phoneAndDown} {
    /* padding: 70px 0px; */
  }
`;

const Header = styled.header`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* text-align: center;
  width: 50%; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex: 1; */
`;

const RowButtons = styled.div`
  display: flex;
  align-self: center;
  gap: 20px;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h1`
  color: var(--primary);
  align-self: center;
  flex-wrap: wrap;
`;

const Subtitle = styled.h4`
  color: var(--secondary);
  text-align: center;
  font-weight: 700;
  /* font-weight: light; */
`;

const DefaultButton = styled.button`
  color: var(--primary);
  border-radius: 8px;
  padding: 10px;
  border: none;
  background-color: ${props => props.color};
  cursor: pointer;

  transition: background-color 0.3s ease;
`;

const SelectedButton = styled(DefaultButton)``;
