export type ContentType = 'post' | 'image' | 'video' | 'story';

export interface Content {
  id: string;
  type: ContentType;
  prompt: string;
  result?: string;
  createdAt: Date;
  scheduledAt?: Date;
  published: boolean;
}

export interface Analytics {
  followers: number;
  reach: number;
  engagement: number;
  posts: number;
}
