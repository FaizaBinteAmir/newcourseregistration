import PropTypes from 'prop-types';

const Course = ({ course, handleAddTitle }) => {
    const { cover_img, title, details, price, credit_hour } = course;
    return (
        <div className="space-y-4 bg-white p-4 shadow-xl mt-4 rounded-lg">
            <img className="w-full" src={cover_img} alt="" />
            <h2 className="font-bold">{title}</h2>
            <p className=" ">{details}</p>
            <div className="flex justify-between">
                <p>$ Price: {price}</p>
                <p>Credit: {credit_hour}hr</p>
            </div>
            <button onClick={() => handleAddTitle(course)} className="w-full px-4 py-2 rounded-xl text-white font-bold bg-blue-500">Select</button>
        </div >
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddTitle: PropTypes.func
}

export default Course;