import { NextResponse } from 'next/server';
import { generateLinkedInPost } from '@/lib/gemini';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { topic, description, tone } = await req.json();
    const post = await generateLinkedInPost(topic, description, tone);
    
    const htmlPost = post
      .split('\n\n')
      .map(paragraph => `<p>${paragraph}</p>`)
      .join('');

    return NextResponse.json({ post: htmlPost });
  } catch (error) {
    console.log("Error in API route:", error);
    return NextResponse.json(
      { error: 'Failed to generate post' },
      { status: 500 }
    );
  }
}