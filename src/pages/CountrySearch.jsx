import {
  Container,
  SearchForm,
  Section,
 CountryList,
} from 'components';
import { useEffect,useState } from 'react';
import { useSearchParams, } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const  [searchParams , setSearchParams ] = useSearchParams()
  const [countries, setCountries] = useState([])
  useEffect(()=>{
  const region = searchParams.get('region')
  if(!region) return;
  fetchByRegion(region).then(setCountries)
  },[searchParams])
  const onSubmit = (region)=>{
   setSearchParams({region})
  }
  return (
    <Section>
      <Container>
       <SearchForm onSubmit={onSubmit} />
       <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
