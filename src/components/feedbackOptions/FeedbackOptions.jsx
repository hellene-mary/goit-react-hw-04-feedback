import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    const keys = Object.keys(options);
    return (
        <ul className={css.feedbackBtnBox}>
            {keys.map(key => (
                <li key={key}>
                    <button
                        className={css.feedbackBtn}
                        key={key}
                        type="button"
                        name={key}
                        onClick={onLeaveFeedback}
                    >
                        {key}
                    </button>
                </li>
            ))}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    option: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired,
};
