import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type HandleSubmit = (
	values: {
		title: string;
	},
	formikHelpers: FormikHelpers<{ title: string }>
) => void;

const NewTodo = ({
  handleSubmit,
}: {
  handleSubmit: HandleSubmit
}) => {
  return (
    <Formik
      initialValues={{ title: "" }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        title: Yup.string().required(),
      })}
    >
      {({ values, handleChange, handleBlur, handleReset, errors, touched }) => (
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
            <p className="text-destructive text-[14px] pt-1">
              This field is required
            </p>
          )}

          <div className="flex gap-3 mt-3">
            <Button
              onClick={handleReset}
              disabled={values.title.length > 0 ? false : true}
              value="Reset"
              type="button"
            >
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewTodo;
