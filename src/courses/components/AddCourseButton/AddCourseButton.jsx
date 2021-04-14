import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router';

export const AddCourseButton = () => {
  const history = useHistory();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => history.push('/agregar-curso')}
    >
      Agregar curso
    </Button>
  );
};
