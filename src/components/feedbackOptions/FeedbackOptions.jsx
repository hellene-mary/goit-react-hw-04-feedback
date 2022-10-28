import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionsList = Object.keys(options);
  return (
    <ul className={css.feedbackBtnBox}>
      {optionsList.map(item => (
        <li key={item}>
          <button className={css.feedbackBtn} key={item} type="button" name={item} onClick={onLeaveFeedback}>
            {item}
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
