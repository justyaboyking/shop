import styled from 'styled-components';

const HowItWorksContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const Step = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  margin-top: 2rem;
  border-radius: 8px;
`;

export default function HowItWorks() {
  return (
    <HowItWorksContainer>
      <Title>How It Works</Title>
      
      <Step>
        <StepNumber>1</StepNumber>
        <StepContent>
          <StepTitle>Choose Your Licorice</StepTitle>
          <p>
            Browse our selection of authentic Dutch black licorice in our shop. 
            We offer varieties from sweet to extra salty, plus specialty mixes.
          </p>
        </StepContent>
      </Step>
      
      <Step>
        <StepNumber>2</StepNumber>
        <StepContent>
          <StepTitle>Select Your Drop Zone</StepTitle>
          <p>
            During checkout, you'll mark your exact delivery location on our 
            interactive map. Choose an open, safe area for the drone to drop 
            your package.
          </p>
          <MapPlaceholder>Interactive Map Will Appear Here</MapPlaceholder>
        </StepContent>
      </Step>
      
      <Step>
        <StepNumber>3</StepNumber>
        <StepContent>
          <StepTitle>Drone Delivery</StepTitle>
          <p>
            Our drones are equipped with advanced navigation to precisely 
            deliver your licorice to your chosen Drop Zone. You'll receive 
            real-time tracking updates.
          </p>
        </StepContent>
      </Step>
      
      <Step>
        <StepNumber>4</StepNumber>
        <StepContent>
          <StepTitle>Enjoy Your Licorice</StepTitle>
          <p>
            Watch for the drone's arrival and retrieve your fresh licorice 
            immediately after delivery. The future of candy is here!
          </p>
        </StepContent>
      </Step>
    </HowItWorksContainer>
  );
}