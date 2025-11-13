import * as tf from "@tensorflow/tfjs";

// Simple rule-based AI converted into TensorFlow.js
// Predicts crop based on soil, temperature, and rainfall.

export async function predictCrop(soil, temperature, rainfall) {
  // Encode soil types manually
  const soilTypes = ["Clay", "Sandy", "Loamy", "Black", "Alluvial"];
  const soilIndex = soilTypes.indexOf(soil);

  if (soilIndex === -1) {
    return "Unknown Soil Type";
  }

  // Create input tensor
  const input = tf.tensor2d([[soilIndex, parseFloat(temperature), parseFloat(rainfall)]]);

  // Simulate simple neural logic with a small in-memory model
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [3], units: 8, activation: "relu" }));
  model.add(tf.layers.dense({ units: 6, activation: "softmax" }));

  // Random weights (demo only, could be trained and saved later)
  await model.compile({ optimizer: "adam", loss: "categoricalCrossentropy" });

  // Make fake predictions — using approximate rules
  const crops = ["Rice", "Wheat", "Millets", "Maize", "Cotton", "Sugarcane"];

  let crop = "";

  if (rainfall > 120 && temperature < 30) crop = "Rice";
  else if (temperature > 32 && rainfall < 50) crop = "Millets";
  else if (temperature < 27 && rainfall < 100) crop = "Wheat";
  else if (temperature > 30 && rainfall > 100) crop = "Sugarcane";
  else if (temperature > 33 && rainfall < 80) crop = "Cotton";
  else crop = "Maize";

  input.dispose();
  return crop;
}
