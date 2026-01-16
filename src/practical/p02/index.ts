import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export async function getPostsByUser(userId: number) {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    const userPosts = posts.filter(post => post.userId === userId);
    
    const result = userPosts.map((post) => ({
      id: post.id,
      userId: post.userId,
      title: post.title,
      body: post.body,
    }));

    return result;
  }
  catch (error) {
    return [];
  }
}
