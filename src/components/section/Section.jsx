import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ title, children }) {
    return (
        <>
            <h1 className={css.feedbackTitle}>{title}</h1>
            {children}
        </>
    );
}

Section.propTypes = { title: PropTypes.string.isRequired };
