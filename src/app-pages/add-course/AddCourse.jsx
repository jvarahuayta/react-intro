import {useHistory} from 'react-router';
import {CourseManageForm} from '../../courses/components/CourseManageForm/CourseManageForm';
import {useCoursesContext} from '../../courses/contexts/courses-context';

const AddCoursePage = () => {
  const history = useHistory();
  const {addCourse} = useCoursesContext();
  const handleSubmit = (course) => {
    addCourse(course);
    history.push('/');
  };
  return (
    <div>
      <h1>Agregar curso</h1>
      <br />
      <CourseManageForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddCoursePage;
