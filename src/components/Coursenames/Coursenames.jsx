import PropTypes from 'prop-types';
import Coursename from '../CourseName/CourseName';

const Coursenames = ({ coursenames, remainning, creditHour }) => {
    return (
        <div className='bg-white mt-4 h-fit'>

            <h3 className='font-bold text-blue-500 border-b-2 p-4'>Credit hour reamainning {remainning} hour</h3>
            {
                coursenames.map(coursename => <Coursename key={coursename.id} coursename={coursename} remainning={remainning} creditHour={creditHour} ></Coursename>)
            }
            <h3 className='font-bold border-b-2 border-t-2 p-4'>Total Credit Hour: {creditHour}</h3>
        </div>
    );
};

Coursenames.propTypes = {
    coursenames: PropTypes.array,
    remainning: PropTypes.number,
    creditHour: PropTypes.number
}


export default Coursenames;