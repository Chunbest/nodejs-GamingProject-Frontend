import  { useEffect, useRef, useState } from "react";
import {
		X,
	Search,
} from "lucide-react";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,	
} from "@/components/ui/command";

export default function GlobalSearch() {
	const [open, setOpen] = useState(false); // 控制下拉
	const [value, setValue] = useState(""); // 輸入值
	const [filteredItems, setFilteredItems] = useState<string[]>([]); // 篩選後的項目
	const containerRef = useRef<HTMLDivElement>(null);

	const allItems = [
		"電競鍵盤",
		"無線電競滑鼠",
		"Razer BlackShark V2 Pro電競耳機",
		"電競螢幕",
		"電競椅 Secretlab Titan Evo ",
	];

	// 動態篩選
	useEffect(() => {
		if (!value.trim()) {
			setFilteredItems(allItems);
		} else {
			setFilteredItems(
				allItems.filter((item) =>
					item.toLowerCase().includes(value.toLowerCase())
				)
			);
		}
	}, [value]);

	// 點擊外部關閉
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSelect = (text: string) => {
		setValue(text);
		setOpen(false);
	};
// 一鍵刪除
	const handleClear = () => {
		setValue("");
		setFilteredItems(allItems);
		setOpen(true);
	};

	return (
		<div ref={containerRef} className="relative w-full max-w-md">
			<Command className="rounded-lg border shadow-md w-full">
			
				<div className="relative flex items-center">
					<CommandInput
						placeholder="搜尋商品名..."
						value={value}
						onValueChange={(val) => {
							setValue(val)
							setOpen(true)
						}}
						onFocus={() => setOpen(true)}
						className="pl-4 pr-4"
					/>
					{value && (
						<button
						onClick={handleClear}
						className="absolute right-2 top-2 p-1 rounded hover:bg-gray-100"
						>
							<X className="h-4 w-4 text-gray-500" />
						</button>
					)}
					{!value && (
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
					)}
					
				</div>

				 {open && (
					<CommandList className="absolute top-full left-0 w-full  border rounded-lg shadow-md z-10 bg-black ">
						{filteredItems.length === 0 ? (
							<CommandEmpty>查無此項目</CommandEmpty>
						) : (
							<>
								<CommandGroup heading="建議">
									{filteredItems.map((item) => (
										<CommandItem
											key={item}
											onSelect={() => handleSelect(item)}
											className="hover:bg-gray-500"
										>
											<span>{item}</span>
										</CommandItem>
									))}
								</CommandGroup>
							</>
						)}
					</CommandList>
				)}
			</Command>
		</div>
	);
}
