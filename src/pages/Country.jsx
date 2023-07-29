import { Section, Container, CountryInfo} from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
const [country, setCountry]=useState(null)
  const {countryId}=useParams()
useEffect(()=>{
  fetchCountry(countryId).then(setCountry)
},[countryId])
if(!country)return;
  return (
    <Section>
      <Container>
        <CountryInfo {...country}/>
      </Container>
    </Section>
  );
};
  
