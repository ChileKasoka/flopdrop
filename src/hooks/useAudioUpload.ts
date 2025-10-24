import { useRef, useState } from "react";

export const useAudioUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Opens file picker
  const selectFile = () => {
    fileInputRef.current?.click();
  };

  // Set selected file
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  // Simulated upload (replace with real API)
  const uploadFile = async () => {
    if (!selectedFile) return;
    setUploading(true);
    setMessage("");

    setTimeout(() => {
      setUploading(false);
      setMessage("Upload complete ✅");
    }, 2000);
  };

  return {
    fileInputRef,
    selectedFile,
    uploading,
    message,
    selectFile,
    onFileChange,
    uploadFile,
  };
};
