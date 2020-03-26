// Framework
import React from 'react';

// Packages
import moment from 'moment';

const ReadingPlan = () => {
  function calculateChapter(book) {
    const today = new Date();

    if (book === 'psalms') {
      const dayOfTheYear = parseInt(moment(today).format('DDDD'));

      return dayOfTheYear <= 150 ? (
        dayOfTheYear
      ) : (
        dayOfTheYear - (150 * Math.floor(dayOfTheYear / 150)) 
      )
    } 

    if (book === 'proverbs') {
      const dayOfTheMonth = parseInt(moment(today).format('DD'));
      const month = moment(today).format('MMM');

      // if february and on a day where you'll need to read more 
      if (month === 'Feb' && dayOfTheMonth >= 26) {
        const isLeapYear = moment().isLeapYear();
        
        if (isLeapYear && dayOfTheMonth >= 28) {
          return calcluateFeb(29);
        }
        if (!isLeapYear) {
          return calcluateFeb(28); 
        }

        function calcluateFeb(daysInMonth) {
          const difference = 2 * (daysInMonth - dayOfTheMonth);
          return `${31 - (difference)}, ${31 - (difference + 1)}`
        }
      }
    
      // if month has 30 days, isn't feb, and is the 30th
      else if (dayOfTheMonth === 30 && ['Apr', 'Jun', 'Sep', 'Nov'].includes(month)) {
        return '30, 31';
      }

      // if regular month of 31 days or doesn't meet the above conditions
      return dayOfTheMonth;      
    }
  }

  return (
    <div className="ReadingPlan">
      <h1>Reading Plan</h1>
      <p>Psalms {calculateChapter('psalms')}</p>
      <p>Proverbs {calculateChapter('proverbs')}</p>
    </div>
  );
};

export default ReadingPlan;