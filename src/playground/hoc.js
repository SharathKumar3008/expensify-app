const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h3>These are priviliged Information</h3> }
            <WrappedComponent {...props} />
        </div>
    )
};

const AdminWarningInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {
        props.isAuth ? 
            <WrappedComponent {...props} />
            :
            <div>Please Log in to View</div>
        }
        </div>
    )
};

const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminWarningInfo isAdmin={true} info='Test Information' />, document.getElementById('root'));

ReactDOM.render(<AuthInfo isAuth={false} info='Test Information' />, document.getElementById('root'));