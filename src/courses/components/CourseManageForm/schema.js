import * as yup from 'yup';

export const courseManageFormSchema = yup.object().shape({
  nombre: yup.string().required('Nombre requerido').min(5, 'Curso muy pequeño'),
});
