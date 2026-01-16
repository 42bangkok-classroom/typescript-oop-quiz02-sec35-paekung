import axios from 'axios';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface EdgePost {
  id: number;
  title: string;
}

export async function getEdgePosts(){
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    if (posts.length === 0) {
      return [];
    }

    const firstPost: EdgePost = {
      id: posts[0].id,
      title: posts[0].title,
    };

    const lastPost: EdgePost = {
      id: posts[posts.length - 1].id,
      title: posts[posts.length - 1].title,
    };

    return [firstPost, lastPost];
  } catch (error) {
    return [];
  }
}