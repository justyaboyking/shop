import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CtaButton = styled.button`
  background-color: #4B0082;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a0066;
  }
`;

const StorySection = styled.section`
  margin-bottom: 3rem;
`;

const DroneSection = styled.section`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HeroSection>
        <Title>Authentic Dutch Black Licorice</Title>
        <Subtitle>Delivered by drone to your Drop Zone</Subtitle>
        <CtaButton onClick={() => navigate('/shop')}>Shop Now</CtaButton>
      </HeroSection>

      <StorySection>
        <h2>The Drop Zone Story</h2>
        <p>
          Born from a love of authentic Dutch black licorice and cutting-edge technology,
          Drop Zone brings you the future of candy delivery. Our drones will drop your
          favorite licorice right to your chosen location.
        </p>
      </StorySection>

      <DroneSection>
        <h2>How Drone Delivery Works</h2>
        <p>
          Simply select your Drop Zone on our interactive map when ordering,
          and our drones will deliver your package with precision and speed.
          No more waiting for traditional delivery!
        </p>
      </DroneSection>
    </HomeContainer>
  );
}