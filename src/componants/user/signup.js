import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const AddUser = () => {
  //initial schema of formik
  const defultValue = {
    name: "",
    email: "",
  };

  // validation schema

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().required().email("Please enter your email "),
  });

  const handleSubmit = (values) => {
    console.log("values :", values);
  };
  return (
    <>
      <div className="container bg-warning">
        <br></br>
        <div className="col-md-12 text-center">
          <h2>sign-up page by using formic</h2>
          <br></br>
          <Formik
            initialValues={defultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="col-md-10">
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-control"
                ></Field>
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div className="col-md-10">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control"
                ></Field>
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <button className="btn btn-success mt-4" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default AddUser;
