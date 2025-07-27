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

export const makeReaction = async (reactionData) => {
  const response = await axios.post(
    `${base_url}add-like/${reactionData?.post_id}/${reactionData?.user_id}`,
    reactionData
  );
  return response.data;
};

// export const Reaction = async (reactiondata) => {
//   const response = await axios.post(
//     `${base_url}/add-like/${reactiondata?.post_id}/${reactiondata?.user_id}`,
//     reactiondata
//   );

//   return response.data;
// };

export const GetReact = async (post_id) => {
  const response = await axios.get(`${base_url}/GetLike/${post_id}`);
  return response.data;
};
