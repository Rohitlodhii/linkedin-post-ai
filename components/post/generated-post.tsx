"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { TipTapEditor } from '@/components/editor/tiptap-editor';

interface GeneratedPostProps {
  content: string;
}

export function GeneratedPost({ content }: GeneratedPostProps) {
  const [editedContent, setEditedContent] = useState(content);

  const handleCopy = () => {
    // Strip HTML tags for clipboard
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = editedContent;
    const textContent = tempDiv.textContent || tempDiv.innerText;
    navigator.clipboard.writeText(textContent);
    toast.success("Copied to clipboard!");
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Generated Post</h2>
        <Button variant="outline" onClick={handleCopy}>
          Copy to Clipboard
        </Button>
      </div>
      <TipTapEditor 
      
        content={content} 
        onChange={setEditedContent}
      />
    </Card>
  );
}