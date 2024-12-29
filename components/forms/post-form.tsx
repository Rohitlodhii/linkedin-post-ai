"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ToneSelector } from "@/components/forms/tone-selector";
import { Loader2 } from "lucide-react";
import { PostFormProps } from "@/lib/types";

export function PostForm({ onGenerate, isLoading }: PostFormProps) {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [tone, setTone] = useState("professional");

  const [contentLength, setContentLength] = useState("medium");
  const [emojiUsage, setEmojiUsage] = useState("medium");
  const [seriousness, setSeriousness] = useState("medium");

  const handleSubmit = async () => {
    if (!topic || !description) {
      toast.error("Please fill in all fields");
      return;
    }

    

    try {
      await onGenerate({  topic, description, tone, contentLength, emojiUsage, seriousness  });
      toast.success("Post generated successfully!");
    } catch (error) {
      toast.error("Failed to generate post. Please try again.");
    }
  };

  return (
    <Card className="p-6 space-y-8">
      <div className="space-y-4">
        {/* Topic Input */}
        <div>
          <label className="block text-sm font-medium mb-2">Topic</label>
          <Input
            placeholder="Enter the main topic of your post"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea
            placeholder="Provide more details about what you want to share"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        {/* Tone Selector */}
        <ToneSelector value={tone} onValueChange={setTone} />

         {/* Emoji Usage */}
         <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2 md:gap-0">
          <label className="text-sm font-medium">Emoji Usage</label>
          <div className="flex gap-2">
            {["😌 low", "🙂 medium", "😃 high"].map((option) => (
              <Button
                key={option}
                size="sm"
                variant="outline"
                className={emojiUsage === option ? "bg-green-500 text-white" : ""}
                onClick={() => setEmojiUsage(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Button>
            ))}
          </div>
        </div>


        {/* Content Length */}
        <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2 md:gap-0">
          <label className="text-sm font-medium">Content Length</label>
          <div className="flex gap-2">
            {["📝 low", "📖 medium", "📚 high"].map((option) => (
              <Button
                key={option}
                size="sm"
                
                variant="outline"
                className={contentLength === option ? "bg-green-500 text-white" : ""}
                onClick={() => setContentLength(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Button>
            ))}
          </div>
        </div>

       
        {/* Seriousness */}
        <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2 md:gap-0">
          <label className="text-sm font-medium">Seriousness</label>
          <div className="flex gap-2">
            {["🙂 low", "😐 medium", "😡 high"].map((option) => (
              <Button
                key={option}
                size="sm"
                variant="outline"
                className={seriousness === option ? "bg-green-500 text-white" : ""}
                onClick={() => setSeriousness(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Generate Post
        </Button>
      </div>
    </Card>
  );
}
