"use client";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, File as FileIcon } from "lucide-react";

interface FileUploadProps {
	onFilesSelected: (files: File[]) => void;
	selectedFiles?: File[];
	onRemoveFile?: (index: number) => void;
	maxFiles?: number;
	maxSize?: number; // in bytes
	accept?: Record<string, string[]>;
}

export default function FileUpload({
	onFilesSelected,
	selectedFiles = [],
	onRemoveFile,
	maxFiles = 5,
	maxSize = 10485760, // 10MB
	accept = {
		"image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
		"application/pdf": [".pdf"],
	},
}: FileUploadProps) {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			onFilesSelected(acceptedFiles);
		},
		[onFilesSelected]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		maxFiles,
		maxSize,
		accept,
	});

	return (
		<div className="space-y-2">
			{selectedFiles.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{selectedFiles.map((file, index) => (
						<div
							key={index}
							className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-lg text-sm"
						>
							<FileIcon className="w-4 h-4" />
							<span className="max-w-[150px] truncate">{file.name}</span>
							<span className="text-muted-foreground">
								({(file.size / 1024).toFixed(1)}KB)
							</span>
							{onRemoveFile && (
								<button
									onClick={() => onRemoveFile(index)}
									className="hover:bg-background rounded p-0.5"
								>
									<X className="w-3 h-3" />
								</button>
							)}
						</div>
					))}
				</div>
			)}
			<div
				{...getRootProps()}
				className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
					isDragActive
						? "border-primary bg-primary/5"
						: "border-muted-foreground/25 hover:border-primary/50"
				}`}
			>
				<input {...getInputProps()} />
				<Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
				{isDragActive ? (
					<p className="text-sm text-foreground">Drop files here...</p>
				) : (
					<div className="text-sm">
						<p className="text-foreground mb-1">
							Drag & drop files here, or click to select
						</p>
						<p className="text-muted-foreground text-xs">
							Max {maxFiles} files, {(maxSize / 1048576).toFixed(0)}MB each
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
