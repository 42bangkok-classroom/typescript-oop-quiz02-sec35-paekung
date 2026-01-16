import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export async function mapPostWithCommentCount() {
  try {
    const responsePosts = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts1');
    const responseComments = await axios.get<Comments[]>('https://jsonplaceholder.typicode.com/comments1');
    
    const posts = responsePosts.data;
    const comments = responseComments.data;

    const result = posts.map(post => {
      const totalComments = comments.filter(comment => comment.postId === post.id).length;
      return {
        postId: post.id,
        title: post.title,
        totalComments: totalComments
      };
    });

    return result;
  } catch (error) {
    return [];
  }
}