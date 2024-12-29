"use server"

import { generateLinkedInPost } from './gemini';

export async function generatePost(data: { 
  topic: string; 
  description: string; 
  tone: string;
  contentLength : string;
  emojiUsage : string; 
  seriousness: string;
}) {
  console.log(data)
  try {

    const post = await generateLinkedInPost(data.topic, data.description, data.tone , data.contentLength , data.emojiUsage , data.seriousness );
    return post
      .split('\n\n')
      .map(paragraph => `<p>${paragraph}</p>`)
      .join('');
  } catch (error) {
    console.log("Yaha ha gadbad")
    console.error("Error in generate action:", error);
    throw new Error('Failed to generate post');
  }
}