// Framework
import React, { useState } from 'react';

// Packages
import moment from 'moment';

const CodingChallenge = () => {
  const [currDayOfChallenge, setCurrDayOfChallenge] = useState(null);
  const dayChallengeStarted = moment('January 27, 2020');
  const today = moment(new Date());
  const daysSinceChallengeStarted = today.diff(dayChallengeStarted, 'days');

  return (
    <div className="CodingChallenge">
      <h1>100 Days of Code</h1>
      <p>Challenge info:</p>
      <ul>
        <li className="text-left"><span className="bold">First Day of Challenge:</span> January 27, 2020</li>
        <li className="text-left"><span className="bold">Days since Challenge Started:</span> {daysSinceChallengeStarted}</li>
        <li className="text-left"><span className="bold">Current Day of Challenge:</span> <input onChange={(event) => setCurrDayOfChallenge(event.target.value)}></input></li>
        <li className="text-left"><span className="bold">Days behind:</span> {currDayOfChallenge ? (daysSinceChallengeStarted - currDayOfChallenge + 1) : 'Update the field above to calculate the number of days behind.'}</li>
      </ul>
    </div>
  );
};

export default CodingChallenge;