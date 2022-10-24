import React, { Component } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onClickBtn = evt => {
        this.setState(prevState => ({
            [evt.target.name]: prevState[evt.target.name] + 1,
        }));
    };

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        return Math.round((this.state.good / total) * 100);
    }

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback!">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.onClickBtn}
                    />
                </Section>

                <Section title={'Statistics'}>
                    {total === 0 ? (
                        <Notification
                            Notification
                            message="There is no feedback"
                        />
                    ) : (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    )}
                </Section>
            </>
        );
    }
}

export default App;
