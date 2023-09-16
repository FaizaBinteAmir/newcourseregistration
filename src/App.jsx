import { useState } from "react"
import Courses from "./components/Courses/Courses"
import Coursenames from "./components/Coursenames/Coursenames";

function App() {

  const [coursenames, setCoursenames] = useState([]);
  const [remainning, setRemaining] = useState(0)
  const [creditHour, setCreditHour] = useState(0)

  const handleAddTitle = course => {
    const isExist = coursenames.find(item => item.id == course.id)
    let count = course.credit_hour;
    if (isExist) {
      return alert("Already selected")

    } else {
      coursenames.forEach((item) => {
        count = count + item.credit_hour;
      })
      const totalRemaining = 20 - count;

      if (count > 20) {
        return alert("you exceeded your credit limit")
      }
      setCreditHour(count)
      setRemaining(totalRemaining)
      const newCoursenames = [...coursenames, course]
      setCoursenames(newCoursenames)
    }
  }



  return (
    <>

      <h1 className="text-6xl text-center font-bold border-b-2 p-4 max-w-6xl mx-auto">Course Registration</h1>


      <div className="max-w-6xl mx-auto flex gap-4 bg-gray-100">
        <Courses handleAddTitle={handleAddTitle} ></Courses>
        <Coursenames coursenames={coursenames} remainning={remainning} creditHour={creditHour}  ></Coursenames>
      </div>


    </>
  )
}

export default App
