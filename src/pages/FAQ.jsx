import styled from 'styled-components';

const FAQContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const Question = styled.div`
  margin-bottom: 2rem;
`;

const QuestionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export default function FAQ() {
  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      
      <Question>
        <QuestionTitle>How does drone delivery work?</QuestionTitle>
        <p>
          Our drones are equipped with GPS and advanced navigation systems to precisely deliver your package to your chosen Drop Zone. You'll receive real-time tracking updates and a notification when your package is about to be dropped.
        </p>
      </Question>
      
      <Question>
        <QuestionTitle>What areas do you deliver to?</QuestionTitle>
        <p>
          We currently deliver within a 20km radius of our distribution centers. During checkout, our system will verify if your selected Drop Zone is within our delivery range.
        </p>
      </Question>
      
      <Question>
        <QuestionTitle>How do I choose a safe Drop Zone?</QuestionTitle>
        <p>
          Select an open area free of obstacles like trees or power lines. Our system will warn you if your chosen spot appears unsafe. Backyards, parks, and open driveways typically work well.
        </p>
      </Question>
      
      <Question>
        <QuestionTitle>What if it's raining or windy?</QuestionTitle>
        <p>
          Our drones can operate in light rain and moderate winds. If conditions are unsafe, we'll notify you to reschedule your delivery.
        </p>
      </Question>
      
      <Question>
        <QuestionTitle>Are your licorice products vegan?</QuestionTitle>
        <p>
          Most of our products are vegan, but some specialty mixes may contain honey or other animal products. Each product page lists all ingredients.
        </p>
      </Question>
      
      <Question>
        <QuestionTitle>How fresh is the licorice when delivered?</QuestionTitle>
        <p>
          Our drone delivery means your licorice arrives within hours of being packaged, ensuring maximum freshness. Traditional shipping methods can't match this speed!
        </p>
      </Question>
      
      <Question>
        <QuestionTitle>Can I subscribe for regular deliveries?</QuestionTitle>
        <p>
          Yes! We offer monthly subscription boxes where you can customize your licorice selection and have it automatically delivered to your Drop Zone each month.
        </p>
      </Question>
    </FAQContainer>
  );
}