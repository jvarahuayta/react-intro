import {useParams} from 'react-router';

const CourseDetailsPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Detalle del curso {params.nombre}!</h1>
    </div>
  );
};

export default CourseDetailsPage;
