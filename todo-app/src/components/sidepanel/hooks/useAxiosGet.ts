import axios from "axios";
import { useState, useEffect } from "react";


export default async function useAxiosGet(baseURL:string) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      setPost(response.data);
    }).catch((e) => console.log(e));
  }, []);

  if ( !post) return null;

  return (
    post
  );
}