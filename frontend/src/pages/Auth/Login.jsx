import { useFormik } from "formik";

const Login = ({ handleSwitchAuth }) => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <section
      className="max-w-[360px] w-[100%]"
      style={{ animation: "fadeIn ease-in-out 1s" }}
    >
      <div>
        <header className="text-center">
          <p className="form-heading">Welcome back</p>
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
              name="userName"
              className="form-input"
            />
            <div className="form-error"></div>
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
            <div className="form-error"></div>
          </div>
          <button type="submit" className="form-submit-btn">
            Login
          </button>
          <p className="form-link">
            Don't have an account yet ?{" "}
            <span
              onClick={() => handleSwitchAuth(false)}
              className="text-[#3213AE] cursor-pointer"
            >
              Sign up
            </span>
            now to join our community
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
