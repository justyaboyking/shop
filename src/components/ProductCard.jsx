import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const Image = styled.div`
  height: 200px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Name = styled.h3`
  margin: 0 0 0.5rem 0;
  color: var(--primary);
`;

const Price = styled.p`
  font-weight: bold;
  color: var(--accent);
  margin: 0 0 1rem 0;
`;

const Category = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
`;

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  
  return (
    <Card onClick={() => navigate(`/product/${product.id}`)}>
      <Image>{product.name}</Image>
      <Content>
        <Name>{product.name}</Name>
        <Price>€{product.price.toFixed(2)}</Price>
        <Category>{product.category}</Category>
      </Content>
    </Card>
  );
}