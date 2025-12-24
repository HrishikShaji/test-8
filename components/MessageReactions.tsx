"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown, Copy, Check } from "lucide-react";

interface MessageReactionsProps {
	messageId: string;
	content: string;
}

export default function MessageReactions({ messageId, content }: MessageReactionsProps) {
	const [liked, setLiked] = useState(false);
	const [disliked, setDisliked] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(content);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleLike = () => {
		setLiked(!liked);
		if (disliked) setDisliked(false);
	};

	const handleDislike = () => {
		setDisliked(!disliked);
		if (liked) setLiked(false);
	};

	return (
		<div className="flex items-center gap-1 mt-2">
			<button
				onClick={handleLike}
				className={`p-1.5 rounded hover:bg-muted transition-colors ${liked ? "text-green-500" : "text-muted-foreground"}`}
				aria-label="Like"
			>
				<ThumbsUp className="w-3.5 h-3.5" />
			</button>
			<button
				onClick={handleDislike}
				className={`p-1.5 rounded hover:bg-muted transition-colors ${disliked ? "text-red-500" : "text-muted-foreground"}`}
				aria-label="Dislike"
			>
				<ThumbsDown className="w-3.5 h-3.5" />
			</button>
			<button
				onClick={handleCopy}
				className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
				aria-label="Copy"
			>
				{copied ? (
					<Check className="w-3.5 h-3.5 text-green-500" />
				) : (
					<Copy className="w-3.5 h-3.5" />
				)}
			</button>
		</div>
	);
}
