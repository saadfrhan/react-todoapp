import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { useAppDispatch } from '@/app/hooks';
import { add } from '@/features/todo/slice'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewTodo = () => {
  const dispatch = useAppDispatch()

  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          add({
            title: values.title,
          })
        resetForm();
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required(),
      })}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleReset,
        errors,
        touched,
      }) => (
        <Form data-testid="new-todo">
          <Input
            name="title"
            id="title"
            placeholder="Enter todo title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {errors.title && touched.title && (
            <p className='text-destructive text-[14px] mb-3'>
              This field is required
            </p>
          )}

          <div className='flex gap-3 mt-3'>
            <Button
              onClick={handleReset}
              disabled={values.title && values.title.length > 0 ? true : false}
              value="Reset"
							type="button"
            >
              Reset
            </Button>
            <Button type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default NewTodo
