import { Header, Container, Counter } from "./Components";

export default function App() {
  const counters = [
    { id: 1, limit: 10 },
    { id: 2, initial: 2, limit: 2 },
    { id: 3, initial: -1, limit: 4 }
  ]

  return (
    <>
      <Header />
      <Container>
        {
          counters.length > 0 &&
          counters.map(counter => <Counter key={counter.id} initial={counter.initial} limit={counter.limit} />)
        }  
      </Container>
    </>
  );
}

