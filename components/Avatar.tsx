interface AvatarProps {
	type: "user" | "bot";
	size?: "sm" | "md" | "lg";
}

export default function Avatar({ type, size = "md" }: AvatarProps) {
	const sizeClasses = {
		sm: "w-6 h-6 text-xs",
		md: "w-8 h-8 text-sm",
		lg: "w-12 h-12 text-base",
	};

	const gradients = {
		user: "bg-gradient-to-br from-purple-500 to-pink-500",
		bot: "bg-gradient-to-br from-blue-500 to-cyan-500",
	};

	const icons = {
		user: "👤",
		bot: "🤖",
	};

	return (
		<div
			className={`${sizeClasses[size]} ${gradients[type]} rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-white shadow-md`}
		>
			{icons[type]}
		</div>
	);
}
