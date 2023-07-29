import { Section, Container, CountryInfo, Loader} from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
const [isLoading, setIsLoading] = useState(false);
const [countryInfo, setCountryInfo]=useState(null)

const location = useLocation();
const goBackLink = location?.state?.from || '/';
  const {countryId}=useParams()
useEffect(()=>{
  setIsLoading(true);
  fetchCountry(countryId)
    .then(data => setCountryInfo(data))
    .finally(setIsLoading(false));
  // fetchCountry(countryId).then(setCountry)
},[countryId])
if(!countryInfo)return;
  return (
    <Section>
      <Container>
      <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>
        <CountryInfo {...countryInfo} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
  
