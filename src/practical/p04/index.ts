import axios from 'axios';

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export async function countCommentsByPost() {
  try {
    const responseComments = await axios.get<Comments[]>('https://jsonplaceholder.typicode.com/comments');
    const comments = responseComments.data;

    if (!comments || comments.length === 0) {
      return {};
    }

    const commentCountByPost : Record<number, number> = {};
    
    comments.forEach(comment => {
      if (comment.postId == null) {
        return;
      }
      if (commentCountByPost[comment.postId]) {
        commentCountByPost[comment.postId] += 1;
      } else {
        commentCountByPost[comment.postId] = 1;
      }
    });

    return commentCountByPost;
    
  } catch (error) {
    return {};
  }
}