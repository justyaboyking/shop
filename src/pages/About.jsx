import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f5f5f5;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
`;

export default function About() {
  return (
    <AboutContainer>
      <Title>About Drop Zone</Title>
      
      <Section>
        <h2>Our Story</h2>
        <p>
          Drop Zone was founded in 2023 by a group of Dutch licorice enthusiasts who wanted to 
          revolutionize how people experience this traditional treat. Combining our passion for 
          authentic Dutch black licorice with cutting-edge drone technology, we created a 
          delivery experience unlike any other.
        </p>
      </Section>
      
      <Section>
        <h2>The Dutch Licorice Tradition</h2>
        <p>
          Dutch black licorice ("drop") has been a beloved treat in the Netherlands for centuries. 
          Our recipes stay true to traditional methods while incorporating modern quality standards. 
          From sweet to extra salty, we offer the full range of authentic Dutch licorice flavors.
        </p>
      </Section>
      
      <Section>
        <h2>Meet The Team</h2>
        <TeamGrid>
          <TeamMember>
            <MemberImage>CEO</MemberImage>
            <h3>Jan van der Licorice</h3>
            <p>Founder & CEO</p>
          </TeamMember>
          <TeamMember>
            <MemberImage>CTO</MemberImage>
            <h3>Lisa Droneveld</h3>
            <p>Chief Technology Officer</p>
          </TeamMember>
          <TeamMember>
            <MemberImage>CMO</MemberImage>
            <h3>Pieter Drop</h3>
            <p>Chief Marketing Officer</p>
          </TeamMember>
          <TeamMember>
            <MemberImage>Head Chef</MemberImage>
            <h3>Anna Zwart</h3>
            <p>Master Licorice Maker</p>
          </TeamMember>
        </TeamGrid>
      </Section>
      
      <Section>
        <h2>The Drone Concept</h2>
        <p>
          Our innovative drone delivery system was developed to bring you the freshest licorice 
          with minimal environmental impact. Each drone is equipped with advanced navigation 
          systems to ensure precise drops at your chosen location.
        </p>
      </Section>
    </AboutContainer>
  );
}