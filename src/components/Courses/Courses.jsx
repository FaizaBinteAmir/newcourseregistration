import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({ handleAddTitle }) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid grid-cols-3 gap-4 w-3/4">
            {/* <h3>Courses: {courses.length} </h3> */}
            {
                courses.map(course => <Course key={course.id} course={course} handleAddTitle={handleAddTitle} ></Course>)
            }
        </div>
    );
};


Courses.propTypes = {
    handleAddTitle: PropTypes.func,
    handleCreditHour: PropTypes.func

}

export default Courses;