import {useEffect} from 'react';
import {useHistory} from 'react-router';
import {AddCourseButton} from '../../courses/components/AddCourseButton/AddCourseButton';
import {CoursesList} from '../../courses/components/CoursesList/CoursesList';
import {useCoursesContext} from '../../courses/contexts/courses-context';

const HomePage = () => {
  const history = useHistory();
  const {courses, loadCourses, isLoadedCourses} = useCoursesContext();
  useEffect(() => {
    if (!isLoadedCourses) {
      loadCourses();
    }
  }, [isLoadedCourses, loadCourses]);
  return (
    <div>
      <h1>Home Page!</h1>
      <br></br>
      <CoursesList
        list={courses}
        onCourseClick={(course) => {
          history.push(`/curso/${course.nombre}`);
        }}
      />
      <br></br>
      <AddCourseButton />
    </div>
  );
};

export default HomePage;
