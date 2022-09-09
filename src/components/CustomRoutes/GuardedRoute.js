import { Navigate } from "react-router-dom"

export default function GuardedRoute({ children, condition, redirectTo, ...rest }) {
    if (!condition) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
}