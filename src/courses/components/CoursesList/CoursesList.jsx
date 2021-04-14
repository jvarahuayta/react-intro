import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {noop} from '../../../app-shared/constants/functions';
import './CoursesList.scss';

export const CoursesList = ({list = [], onCourseClick = noop}) => {
  return (
    <div className="courses-list">
      {list.map((course, i) => (
        <Card onClick={() => onCourseClick(course)} key={i}>
          <CardContent>
            <h1>{course.nombre}</h1>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
