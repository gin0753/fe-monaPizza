import React from "react";
import QuestionItems from "./components/QuestionItem";

class Questions extends React.Component {
  render() {
    return (
      <div className='restPage_questions'>
        <div className='restPage_questions_wrap'>
          <h2>Frequently Asked Questions</h2>
          <h5>Here are the answers to the most common questions we receive.</h5>
          <ul>
            <QuestionItems
              children="I can't find what I'm looking for. Where can I go to ask my
                question?"
              details='We like to say deliveries take approximately 45 mins during weekdays and approximately 1 hour on weekends. We do our best to get your delicious pizza out to you as soon as possible (we know you’re craving it) but we like to give ourselves a little extra time in case our drivers encounter unforeseen circumstances, which may include traffic and bad weather. The most important thing to us is making sure our drivers arrive safely and that your pizza arrives hot!'
            />
            <QuestionItems
              children=' What is the minimum amount I have to order for delivery?'
              details='We like to say deliveries take approximately 45 mins during weekdays and approximately 1 hour on weekends. We do our best to get your delicious pizza out to you as soon as possible (we know you’re craving it) but we like to give ourselves a little extra time in case our drivers encounter unforeseen circumstances, which may include traffic and bad weather. The most important thing to us is making sure our drivers arrive safely and that your pizza arrives hot!'
            />
            <QuestionItems
              children='How long will my delivery take?'
              details='We like to say deliveries take approximately 45 mins during weekdays and approximately 1 hour on weekends. We do our best to get your delicious pizza out to you as soon as possible (we know you’re craving it) but we like to give ourselves a little extra time in case our drivers encounter unforeseen circumstances, which may include traffic and bad weather. The most important thing to us is making sure our drivers arrive safely and that your pizza arrives hot!'
            />
            <QuestionItems
              children='How long will my delivery take?'
              details='We like to say deliveries take approximately 45 mins during weekdays and approximately 1 hour on weekends. We do our best to get your delicious pizza out to you as soon as possible (we know you’re craving it) but we like to give ourselves a little extra time in case our drivers encounter unforeseen circumstances, which may include traffic and bad weather. The most important thing to us is making sure our drivers arrive safely and that your pizza arrives hot!'
            />
            <QuestionItems
              children='The website came up with an error message when it was processing
                my payment, and I’m not sure if my order went through or not.
                What do I do?'
              details='We like to say deliveries take approximately 45 mins during weekdays and approximately 1 hour on weekends. We do our best to get your delicious pizza out to you as soon as possible (we know you’re craving it) but we like to give ourselves a little extra time in case our drivers encounter unforeseen circumstances, which may include traffic and bad weather. The most important thing to us is making sure our drivers arrive safely and that your pizza arrives hot!'
            />
            <QuestionItems
              children='How can I find nutritional information on products?'
              details='We like to say deliveries take approximately 45 mins during weekdays and approximately 1 hour on weekends. We do our best to get your delicious pizza out to you as soon as possible (we know you’re craving it) but we like to give ourselves a little extra time in case our drivers encounter unforeseen circumstances, which may include traffic and bad weather. The most important thing to us is making sure our drivers arrive safely and that your pizza arrives hot!'
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Questions;
