import API from "./API";

export const getAIRecommendations = (token) =>
  API.get("/ai", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
