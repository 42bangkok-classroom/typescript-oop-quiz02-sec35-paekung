import axios from "axios";

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface ResultComment {
  id: number;
  body: string;
}

export async function safeFetchComment(id: number) {
  try {
    const responseComments = await axios.get<Comments>(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const comment = responseComments.data;

    const result: ResultComment = {
      id: comment.id,
      body: comment.body,
    };

    return result;
  }
  catch {
    return null;
  }
}
