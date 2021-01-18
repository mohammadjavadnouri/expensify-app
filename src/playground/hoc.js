import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>INFO</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This Info is private, please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Not Authenticated! Please login!</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="Details here" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="Details here" />,
  document.getElementById("app")
);
