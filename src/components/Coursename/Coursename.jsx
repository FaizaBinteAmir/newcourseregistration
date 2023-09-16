import PropTypes from 'prop-types';

const Coursename = ({ coursename }) => {
    const { title } = coursename;

    return (
        <div>
            <h3 className='px-4 py-2 '>{title}</h3>
        </div>
    );
};

Coursename.propTypes = {
    coursename: PropTypes.object,
    remainning: PropTypes.number,
    creditHour: PropTypes.number
}

export default Coursename;