import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarItem = ({ href, children, title, notLink , handleOnClick  }) => {
	const { pathname } = window.location
	const width = useSelector(state => state.sidebar.width)
	const classes = "sidebar text-black font-medium flex items-center gap-[17px]";
	return (
		<ListItemButton
			sx={{ borderRadius: "10px", margin: "20px 0", padding: "12px" }}
			className="group"
		>
			{!notLink ? (
				<Link to={href} className={classes} onClick={handleOnClick}>
					<span className="text-[25px] group-hover:scale-[1.1]">
						{children}
					</span>
					<span className={`${(width === 72 || pathname ==='/messages') && 'hidden'}`}>{title} </span>
				</Link>
			) : (
				<span className={classes} onClick={handleOnClick}>
					<span className="text-[25px] group-hover:scale-[1.1]">
						{children}
					</span>
					<span className={`${(width === 72 || pathname ==='/messages') && 'hidden'}`}>{title}</span>
				</span>
			)}
		</ListItemButton>
	);
};
export default SidebarItem;
