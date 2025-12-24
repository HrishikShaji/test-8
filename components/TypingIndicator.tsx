"use client";

interface TypingIndicatorProps {
	variant?: "dots" | "pulse" | "wave";
}

export default function TypingIndicator({ variant = "dots" }: TypingIndicatorProps) {
	if (variant === "pulse") {
		return (
			<div className="flex items-center gap-2">
				<div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
				<span className="text-sm text-muted-foreground">AI is thinking...</span>
			</div>
		);
	}

	if (variant === "wave") {
		return (
			<div className="flex gap-1">
				<div
					className="w-2 h-2 bg-primary rounded-full animate-bounce"
					style={{ animationDelay: "0ms", animationDuration: "1s" }}
				/>
				<div
					className="w-2 h-2 bg-primary rounded-full animate-bounce"
					style={{ animationDelay: "200ms", animationDuration: "1s" }}
				/>
				<div
					className="w-2 h-2 bg-primary rounded-full animate-bounce"
					style={{ animationDelay: "400ms", animationDuration: "1s" }}
				/>
			</div>
		);
	}

	// Default: dots
	return (
		<div className="flex gap-1">
			<div
				className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
				style={{ animationDelay: "0ms" }}
			/>
			<div
				className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
				style={{ animationDelay: "150ms" }}
			/>
			<div
				className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
				style={{ animationDelay: "300ms" }}
			/>
		</div>
	);
}
