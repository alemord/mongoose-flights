const React = require('react');

function Index({ flights }) {
  return (
    <div>
      <h1>All Flights Website</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight._id}>
            {flight.airline} Flight {flight.flightNo} - Departs: {flight.departs.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = Index;
