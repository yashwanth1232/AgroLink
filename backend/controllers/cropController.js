export const recommendCrop = (req, res) => {
  const { soilType, rainfall, temperature } = req.body;

  if (!soilType || !rainfall || !temperature) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Simple rule-based prediction logic (AI placeholder)
  let crop = "Unknown";

  if (soilType.toLowerCase() === "sandy") {
    if (rainfall > 80 && temperature >= 25) crop = "Groundnut";
    else crop = "Millet";
  } else if (soilType.toLowerCase() === "clay") {
    if (rainfall > 100) crop = "Rice";
    else crop = "Sugarcane";
  } else if (soilType.toLowerCase() === "loamy") {
    if (temperature >= 20 && temperature <= 30) crop = "Wheat";
    else crop = "Maize";
  }

  res.json({
    soilType,
    rainfall,
    temperature,
    recommendedCrop: crop,
  });
};
