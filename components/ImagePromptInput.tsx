"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface ImagePromptInputProps {
  onSubmit: (prompt: string) => void;
  isEditing: boolean;
  isLoading: boolean;
}

export function ImagePromptInput({
  onSubmit,
  isEditing,
  isLoading,
}: ImagePromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
      setPrompt("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg">
      <div className="space-y-2">
          {isEditing
            ? "อยากแก้อะไรหรอ?"
            : "อยากสร้างอะไรล่ะ?"}
      </div>
<Textarea
  id="prompt"
  className="border border-secondary focus:outline-none hover:border-foreground/40"
        placeholder={
          isEditing
            ? "ตัวอย่าง: ทำพื้นหลังเป็นสีฟ้าและเพิ่มสีรุ้ง"
            : "ตัวอย่าง: ภาพสามมิติของหมูที่มีปีกและหมวกทรงสูงบินอยู่เหนือเมืองแห่งอนาคต"
        }
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button
        type="submit"
        disabled={!prompt.trim() || isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-lg py-6 rounded-full"
      >
        <Wand2 className="w-6 h-6 mr-2" />
        {isEditing ? "แก้ไขภาพ" : "สร้างภาพ"}
      </Button>
    </form>
  );
}
