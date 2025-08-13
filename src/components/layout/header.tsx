import { Book, Link, Menu, ShoppingCart, Sunset, Trees, Zap } from "lucide-react";
import GlobalSearch from './globalsearch';
import { LoginRegisterButton } from "@/components/layout/LoginRegisterButton"


import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
	title: string;
	url: string;
	description?: string;
	icon?: React.ReactNode;
	items?: MenuItem[];
}

interface Navbar1Props {
	logo?: {
		url: string;
		src: string;
		alt: string;
		title: string;
	};
	menu?: MenuItem[];
	auth?: {
		login: {
			title: string;
			url: string;
		};
		signup: {
			title: string;
			url: string;
		};
	};
}

const Header = ({
	logo = {
		url: "/",
		src: "./logo.png",
		alt: "GameGear Hub",
		title: "GameGear Hub",
	},
	menu = [
		{
			title: "產品分類",
			url: "#",
			items: [
				{
					title: "電競鍵盤系列",
					description: "Tinfo",
					icon: <Book className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "電競滑鼠系列",
					description: "the world",
					icon: <Trees className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "電競搖桿系列",
					description: "workspace",
					icon: <Sunset className="size-5 shrink-0" />,
					url: "#",
				},

			],
		},
		{
			title: "品牌專區",
			url: "#",
			items: [
				{
					title: "Help Center",
					description: "Get all the answers you need right here",
					icon: <Zap className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Contact Us",
					description: "We are here to help you with any questions you have",
					icon: <Sunset className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Status",
					description: "Check the current status of our services and APIs",
					icon: <Trees className="size-5 shrink-0" />,
					url: "#",
				},
				{
					title: "Terms of Service",
					description: "Our terms and conditions for using our services",
					icon: <Book className="size-5 shrink-0" />,
					url: "#",
				},
			],
		},
		{ title: "關於我們", url: "#" },
		{ title: "電競專欄", url: "#" },
	],
	auth = {
		login: { title: "Login", url: "#" },
		signup: { title: "Sign up", url: "#" },
	},
}: Navbar1Props) => {
	return (
		<header className="py-4 bg-black sticky z-50">
			<div className="container text-white">
				{/* Desktop Menu */}
				<div className="hidden justify-between lg:flex">
					<div className="flex items-center gap-6">
						{/* Logo */}
						
						<a href={logo.url} className="flex items-center gap-2">
							<img
								src={logo.src}
								className="max-h-10 dark:invert"
								alt={logo.alt}
							/>
							{/* <span className="text-lg font-semibold tracking-tighter">
								{logo.title}
							</span> */}

						</a>
						<GlobalSearch />

					</div>
					<div className="flex gap-2">
						<div className="flex items-center ">
							<NavigationMenu>
								<NavigationMenuList>
									{menu.map((item) => renderMenuItem(item))}
								</NavigationMenuList>
							</NavigationMenu>
							<a><ShoppingCart className="px-4 size-5 w-auto text-white hover:text-blue-500" /></a>
						<LoginRegisterButton href="/login" />
						</div>
						{/* 登入註冊按鈕 */}
						{/* <Button asChild variant="outline" size="sm">
							<a href={auth.login.url}>{auth.login.title}</a>
						</Button>
						<Button asChild size="sm">
							<a href={auth.signup.url}>{auth.signup.title}</a>
						</Button> */}
					</div>
				</div>

				{/* Mobile Menu */}
				<div className="block lg:hidden">
					<div className="flex items-center justify-between ">
						{/* Logo */}
						<a href={logo.url} className="flex items-center gap-2">
							<img
								src={logo.src}
								className="max-h-8 dark:invert"
								alt={logo.alt}
							/>
						</a>

						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" size="icon">
									<Menu className="size-4" />
								</Button>
							</SheetTrigger>
							<SheetContent className="overflow-y-auto bg-black text-white">
								<SheetHeader>
									<SheetTitle>
										<a href={logo.url} className="flex items-center gap-2">
											<img
												src={logo.src}
												className="max-h-8 dark:invert"
												alt={logo.alt}
											/>
										</a>
									</SheetTitle>
								</SheetHeader>

								<div className="flex flex-col gap-6 p-4 ">
									<Accordion
										type="single"
										collapsible
										className="flex w-full flex-col gap-4"
									>
										{menu.map((item) => renderMobileMenuItem(item))}
									</Accordion>

									<div className="flex flex-col gap-3">
										
										<Button asChild variant="outline">
											<a href={auth.login.url}>{auth.login.title}</a>
										</Button>
										<Button asChild>
											<a href={auth.signup.url}>{auth.signup.title}</a>
										</Button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
};

const renderMenuItem = (item: MenuItem) => {
	if (item.items) {
		return (
			<NavigationMenuItem key={item.title}>
				<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
				<NavigationMenuContent
					className="bg-black  text-popover-foreground">
					{item.items.map((subItem) => (
						<NavigationMenuLink asChild key={subItem.title} className="w-80 ">
							<SubMenuLink item={subItem} />
						</NavigationMenuLink>
					))}
				</NavigationMenuContent>

			</NavigationMenuItem>
		);
	}

	return (
		<NavigationMenuItem key={item.title} >
			<NavigationMenuLink
				href={item.url}
				className="bg-background hover:bg-muted hover:text-blue-500 group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
			>
				{item.title}
			</NavigationMenuLink>
		</NavigationMenuItem>
	);
};

const renderMobileMenuItem = (item: MenuItem) => {
	if (item.items) {
		return (
			<AccordionItem key={item.title} value={item.title} className="border-b-0">
				<AccordionTrigger className="text-md py-0 font-semibold hover:no-underline hover:text-blue-500">
					{item.title}
				</AccordionTrigger>
				<AccordionContent className="mt-2">
					{item.items.map((subItem) => (
						<SubMenuLink key={subItem.title} item={subItem} />
					))}
				</AccordionContent>
			</AccordionItem>
		);
	}

	return (
		<a key={item.title} href={item.url} className="text-md font-semibold">
			{item.title}
		</a>
	);
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
	return (
		<a
			className="hover:bg-muted hover:text-blue-500 flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
			href={item.url}
		>
			<div className="text-foreground">{item.icon}</div>
			<div>
				<div className="text-sm font-semibold">{item.title}</div>
				{item.description && (
					<p className="text-muted-foreground text-sm leading-snug">
						{item.description}
					</p>
				)}
			</div>
		</a>
	);
};

export default Header;
