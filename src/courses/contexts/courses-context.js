import {createContext, useCallback, useContext, useState} from 'react';
import axios from 'axios';

export const coursesContext = createContext(null);

export const CoursesProvider = ({children}) => {
  const [courses, setCourses] = useState([]);
  const [isLoadedCourses, setIsLoadedCourses] = useState(false);
  const addCourse = (course) => {
    setCourses([...courses, course]);
  };
  const loadCourses = useCallback(async () => {
    const result = await axios.get('http://localhost:3000/data/courses.json');
    setCourses(result.data);
    setIsLoadedCourses(true);
  }, []);
  return (
    <coursesContext.Provider value={{courses, addCourse, loadCourses, isLoadedCourses}}>
      {children}
    </coursesContext.Provider>
  );
};

export const useCoursesContext = () => useContext(coursesContext);
