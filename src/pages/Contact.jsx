import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a0066;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Contact() {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      
      <ContactGrid>
        <ContactForm>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="text" placeholder="Subject" />
          <TextArea placeholder="Your Message" />
          <SubmitButton>Send Message</SubmitButton>
        </ContactForm>
        
        <ContactInfo>
          <InfoItem>
            <Icon>📧</Icon>
            <div>
              <h3>Email</h3>
              <p>hello@dropzone.com</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <Icon>📱</Icon>
            <div>
              <h3>Phone</h3>
              <p>+31 123 456 789</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <Icon>📍</Icon>
            <div>
              <h3>Address</h3>
              <p>Licorice Street 42, Amsterdam, Netherlands</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <Icon>🕒</Icon>
            <div>
              <h3>Hours</h3>
              <p>Monday-Friday: 9am-5pm</p>
              <p>Saturday: 10am-4pm</p>
            </div>
          </InfoItem>
        </ContactInfo>
      </ContactGrid>
    </ContactContainer>
  );
}