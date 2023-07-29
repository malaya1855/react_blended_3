import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';



export const Home = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data)
    })
  }, [])

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
