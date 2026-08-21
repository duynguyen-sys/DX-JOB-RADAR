import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    service: "DX JOB RADAR",
    version: "0.1.0",
    status: "ONLINE",
    timestamp: new Date().toISOString()
  });
});

const PORT = Number(process.env.PORT) || 4100;

app.listen(PORT, () => {
  console.log(`🚀 DX JOB RADAR API running on port ${PORT}`);
});