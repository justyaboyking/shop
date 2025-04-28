import styled from 'styled-components';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ShopContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#4B0082' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#3a0066' : '#e0e0e0'};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const products = [
  {
    id: 1,
    name: 'Classic Dutch Black',
    price: 8.99,
    category: 'Sweet',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    name: 'Salty Sea Licorice',
    price: 9.99,
    category: 'Salty',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    name: 'Double Salt Explosion',
    price: 10.99,
    category: 'Extra Salty',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    name: 'Dutch Mix',
    price: 12.99,
    category: 'Specialty Mixes',
    image: '/placeholder.jpg'
  }
];

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <ShopContainer>
      <Title>Our Licorice Selection</Title>
      
      <Filters>
        <FilterButton 
          active={activeFilter === 'All'}
          onClick={() => setActiveFilter('All')}
        >
          All
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'Sweet'}
          onClick={() => setActiveFilter('Sweet')}
        >
          Sweet
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'Salty'}
          onClick={() => setActiveFilter('Salty')}
        >
          Salty
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'Extra Salty'}
          onClick={() => setActiveFilter('Extra Salty')}
        >
          Extra Salty
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'Specialty Mixes'}
          onClick={() => setActiveFilter('Specialty Mixes')}
        >
          Specialty Mixes
        </FilterButton>
      </Filters>
      
      <ProductsGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </ShopContainer>
  );
}