import { Header, Counter, ContainerFlex, ContainerGrid, Title } from "./Components";

export default function App() {
  const counters = [
    { id: 1, limit: 10 },
    { id: 2, initial: 2, limit: 2 },
    { id: 3, initial: -1, limit: 4 },
    { id: 4, initial: 7, limit: 4 },
    { id: 5, initial: 2, limit: 5 },
    { id: 6, initial: 0, limit: 6 },
  ]

  return (
    <>
      <Header />
      <Title text="Flex Container"/>
      <ContainerFlex>
        {
          counters.length > 0 &&
          counters.map(counter => <Counter key={counter.id} initial={counter.initial} limit={counter.limit} />)
        }  
      </ContainerFlex>
      <Title text="Grid Container"/>
      <ContainerGrid>
        {
          counters.length > 0 &&
          counters.map(counter => <Counter key={counter.id} initial={counter.initial} limit={counter.limit} />)
        }  
      </ContainerGrid>
    </>
  );
}

