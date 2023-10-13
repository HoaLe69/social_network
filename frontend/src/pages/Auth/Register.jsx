import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = ({ handleSwitchAuth }) => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: (formdata) => {
      const url = "http://localhost:8080/api/auth/register";
      axios
        .post(url, formdata, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Maximum 20 characters")
        .min(6, "Minimum 6 characters")
        .required("Required"),
      email: Yup.string()
        .max(50, "Maximum 50 character")
        .required("Required")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter valid email address",
        ),
      password: Yup.string()
        .required("Required")
        .min(6, "Minimun 6 characters")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,19}$/,
          "Include least one letter, one number, one special character",
        ),
    }),
  });
  return (
    <section
      className="max-w-[360px] w-[100%]"
      style={{ animation: "fadeIn ease-in-out 1s" }}
    >
      <div>
        <header className="text-center">
          <p className="form-heading">Welcome to Triprate</p>
          <span className="form-des">
            We've missed you! Please sign in to catch up on what you've missed
          </span>
        </header>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="form-label" htmlFor="userName">
              Username
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.userName}
              type="text"
              id="userName"
              placeholder="Enter your username"
              className="form-input"
            />
            <div className="form-error">
              {formik.errors.userName && (
                <div className="form-error-mess">{formik.errors.userName}</div>
              )}
            </div>
          </div>
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
            />
            <div className="form-error">
              {formik.errors.email && (
                <div className="form-error-mess">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="form-input"
            />
            <div className="form-error">
              {formik.errors.password && (
                <div className="form-error-mess">{formik.errors.password}</div>
              )}
            </div>
          </div>
          <button type="submit" className="form-submit-btn">
            Register
          </button>
          <p className="form-link">
            Already have an account?{" "}
            <span
              onClick={() => handleSwitchAuth(true)}
              className="text-[#3213AE] cursor-pointer"
            >
              Sign in
            </span>{" "}
            now !
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
