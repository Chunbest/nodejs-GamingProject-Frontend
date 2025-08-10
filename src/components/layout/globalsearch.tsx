import React from "react";
import {
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandSeparator,
	CommandShortcut
} from "@/components/ui/command";
import { Calendar, Smile, Calculator, User, CreditCard, Settings } from "lucide-react";

export default function CommandDemo() {
	const [open, setOpen] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState(""); // 新增：共用搜尋文字狀態

	return (
		<>
			{/* 觸發輸入框 */}
			<input
				type="text"
				placeholder="輸入關鍵字進行搜尋..."
				value={searchValue}
				onFocus={() => setOpen(true)} // 點擊或鍵盤聚焦時開啟 CommandDialog
				readOnly // 避免直接輸入，強制在 CommandDialog 裡輸入
				className=" max-w-sm px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-muted"
				aria-label="全站搜尋"
			/>

			{/* 搜尋對話框 */}
			<CommandDialog open={open} onOpenChange={setOpen} className="bg-white">
				<CommandInput
					placeholder="輸入關鍵字進行搜尋..."
					value={searchValue}
					onValueChange={(v) => setSearchValue(v)} // 同步輸入框內容
				/>
				<CommandList>
					<CommandEmpty>沒有找到結果</CommandEmpty>

					<CommandGroup heading="建議">
						<CommandItem>
							<Calendar />
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<Smile />
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem>
							<Calculator />
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup>

					<CommandSeparator />

					<CommandGroup heading="設定">
						<CommandItem>
							<User />
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CreditCard />
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<Settings />
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
