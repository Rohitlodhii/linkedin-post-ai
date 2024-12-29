"use client";

import { useState } from "react";
import { PostForm } from "./post-form";
import { GeneratedPost } from "../post/generated-post";
import { generatePost } from "@/lib/actions";

export function GeneratePostForm() {
  const [generatedPost, setGeneratedPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (data: { topic: string; description: string; tone: string ; contentLength : string; emojiUsage : string; seriousness: string;}) => {
   
    try {
      setIsLoading(true);
      const result = await generatePost(data);
      setGeneratedPost(result);
    } catch (error) {
      console.log("first gadbad")
      console.error("Error generating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <PostForm onGenerate={handleGenerate} isLoading={isLoading} />
      {generatedPost && <GeneratedPost content={generatedPost} />}
    </div>
  );
}