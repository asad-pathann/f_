import axios from "axios";

const base_url = "http://localhost:5441/api/posts/";

export const addPost = async (postData) => {
  const response = await axios.post(
    `${base_url}add-post/${postData?.user_id}`,
    postData
  );
  return response.data;
};

export const getllpost = async () => {
  const response = await axios.get(`${base_url}get-data`);
  return response.data;
};
