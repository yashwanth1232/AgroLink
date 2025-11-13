import React, { useEffect, useState } from "react";
import { getAIRecommendations } from "../api/aiApi";   // ✅ use helper

const AIRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("You must be logged in to view recommendations.");
          return;
        }

        const res = await getAIRecommendations(token);   // ✅ uses backend URL from .env
        setRecommendations(res.data);

      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch recommendations");
      }
    };

    loadData();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (recommendations.length === 0) return <p>No AI recommendations yet.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        🌾 AI-Based Product Recommendations
      </h2>
      <div className="grid gap-4">
        {recommendations.map((rec) => (
          <div
            key={rec._id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
          >
            <h3 className="text-xl font-semibold text-green-600">
              Product: {rec.productId?.name || "Unknown Product"}
            </h3>

            <p><strong>Reason:</strong> {rec.recommendationReason}</p>

            <p>
              <strong>Confidence:</strong>{" "}
              {(rec.confidenceScore * 100).toFixed(1)}%
            </p>

            <p className="text-sm text-gray-500">
              Created on: {new Date(rec.createdAt).toLocaleString()}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;
