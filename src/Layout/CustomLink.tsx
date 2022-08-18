import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className={(match ? "bg-indigo-700 text-white" : "bg-slate-300") + " p-2 text-inherit rounded-md mt-3 font-bold cursor-pointer w-full"}>
            <Link
                to={to}
                style={{color: match ? 'white': 'black', width: '100%'}}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink
