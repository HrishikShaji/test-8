import { MoreVertical, Trash2 } from "lucide-react";

interface ChatHeaderProps {
	botName: string;
	status?: string;
	onClearChat?: () => void;
}

export default function ChatHeader({
	botName,
	status = "Online",
	onClearChat,
}: ChatHeaderProps) {
	return (
		<div className="border-b bg-card px-4 py-3 flex items-center justify-between">
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
					🤖
				</div>
				<div>
					<h2 className="font-semibold text-sm">{botName}</h2>
					<p className="text-xs text-muted-foreground flex items-center gap-1.5">
						<span className="w-2 h-2 rounded-full bg-green-500" />
						{status}
					</p>
				</div>
			</div>
			<div className="flex items-center gap-2">
				{onClearChat && (
					<button
						onClick={onClearChat}
						className="p-2 hover:bg-muted rounded-lg transition-colors"
						aria-label="Clear chat"
					>
						<Trash2 className="w-4 h-4 text-muted-foreground" />
					</button>
				)}
				<button
					className="p-2 hover:bg-muted rounded-lg transition-colors"
					aria-label="More options"
				>
					<MoreVertical className="w-4 h-4 text-muted-foreground" />
				</button>
			</div>
		</div>
	);
}
