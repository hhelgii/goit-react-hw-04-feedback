import React, { useState } from 'react';
import { Section } from './section/Section';
import { Notification } from './notitfication/Notification';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import css from './app.module.css';
// // delete addidtional "p"
// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const onClickRate = (option) => {
//     switch (option) {
//       case 'good':
//         setGood(prevGood => prevGood + 1);
//         break;
//       case 'neutral':
//         setNeutral(prevNeutral => prevNeutral + 1);
//         break;
//       case 'bad':
//         setBad(prevBad => prevBad + 1);
//         break;
//       default:
//         break;
//     }
//   };

//   const countTotalFeedback = () => {
//     return good + neutral + bad;
//   };

//   const countPositiveFeedbackPercentage = () => {
//     const positivePercentage = (good * 100) / (good + neutral + bad) || 0;
//     return Math.round(positivePercentage * 100) / 100;
//   };

//   const totalFeedback = countTotalFeedback();
//   const percentage = countPositiveFeedbackPercentage();

//   return (
//     <div className={css.container}>
//       <Section title="Please leave your feedback">
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={onClickRate}
//         />
//       </Section>
//       <Section title="Statistics">
//         {totalFeedback === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalFeedback}
//             percentage={percentage}
//           />
//         )}
//       </Section>
//     </div>
//   );
// };


// import React, { useState } from 'react';
// import { Section } from './section/Section';
// import { Notification } from './notification/Notification';
// import { Statistics } from './statistics/Statistics';
// import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
// import css from './app.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickRate = (option) => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good * 100) / (good + neutral + bad) || 0;
    return Math.round(positivePercentage * 100) / 100;
  };

  const totalFeedback = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.appContainer}>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onClickRate}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            percentage={percentage}
          />
        )}
      </Section>
    </div>
  );
};
