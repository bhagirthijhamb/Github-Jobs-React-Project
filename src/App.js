import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import useFetchJobs from './useFetchJobs';
import Job from './Job';

function App() {
  const [params, setParams ] = useState({ description: "python" });
  const [page, setPage ] = useState(1);
  const { jobs, loading, error} = useFetchJobs(params, page)

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
    )
}

export default App;
