export interface GeneratePostData {
  topic: string;
  description: string;
  tone: string;
  contentLength : string;
   emojiUsage : string; 
   seriousness: string;
}

export interface PostFormProps {
  onGenerate: (data: GeneratePostData) => Promise<void>;
  isLoading: boolean;
}