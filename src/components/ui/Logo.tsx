import logo from '/logo.png';

export default function Logo() {
	return (
		<a href="/" target="_blank" rel="noopener noreferrer">
			<img src={logo} className="logo" alt="GameGear Hub logo" />
		</a>
	);
}
