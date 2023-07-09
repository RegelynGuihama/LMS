import { Link } from "react-router-dom";

function TeacherRegister() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-5"></div>
        <div className="card">
          <h5 className="card-header">Teacher Register</h5>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Teacher ID:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Number
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherRegister;
