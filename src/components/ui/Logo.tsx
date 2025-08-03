import logo from '/logo.png';
// 引入全域樣式
import "../../styles/globals.css"

export default function Logo() {
	return (
		<a href="/" target="_blank" rel="noopener noreferrer">
			<img src={logo} className="size-10 w-auto" alt="GameGear Hub logo" />
		</a>
	);
}
