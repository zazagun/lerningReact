import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';

function InfoProcess() {
  const [pid, setPid] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
        fetch('http://localhost:3001/api/pid')
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                console.log("PID from server:", data.pid)
                setPid(data.pid)
            })
            .catch((error) => {
                console.error("Error fetching PID:", error)
            })
        }, 2000)

        return () => clearInterval(intervalId)
    }, [])

  return (
    <Container>
        <div>
            {pid ? <p>Server PID: {pid}</p> : <p>Loading PID...</p>}
        </div>
    </Container>
  )
}

export default InfoProcess;