import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {courseManageFormSchema} from './schema';
import TextField from '@material-ui/core/TextField';

export const CourseManageForm = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(courseManageFormSchema),
  });
  const _onSubmit = (value) => {
    onSubmit && onSubmit(value);
  };
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(_onSubmit)}>
          <div>
            <TextField
              label="Nombre"
              variant="outlined"
              {...register('nombre')}
              helperText={errors.nombre?.message}
            />
          </div>
          <Button type="submit">Guardar</Button>
        </form>
      </CardContent>
    </Card>
  );
};
