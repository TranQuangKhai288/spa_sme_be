import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRouter from "./routes/api.js";
import expressWinston from "express-winston";
import logger from "./logger.js";
import { v4 as uuidv4 } from "uuid";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// Correlation ID middleware
app.use((req, _res, next) => {
  (req as any).id = uuidv4();
  next();
});

// Globally patch BigInt serialization for JSON responses
(BigInt.prototype as any).toJSON = function () {
  const num = Number(this);
  return Number.isSafeInteger(num) ? num : this.toString();
};

// Middlewares
app.use(cors({
  origin: "*", // allow all origins for demo
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Request logger middleware using express-winston
app.use(
  expressWinston.logger({
    winstonInstance: logger,
    meta: true,
    msg: (req, res) => `[${(req as any).id}] ${req.method} ${req.originalUrl} ${res.statusCode}`,
    expressFormat: true,
    colorize: false,
    requestWhitelist: ['url', 'method', 'httpVersion', 'query', 'body', 'headers'],
    responseWhitelist: ['statusCode'],
  })
);

// API Routes
app.use("/api", apiRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  logger.info('=============================================');
  logger.info('ZenFlow Spa Backend is running!');
  logger.info(`URL: http://localhost:${PORT}`);
  logger.info(`Health Check: http://localhost:${PORT}/health`);
  logger.info('=============================================');
});
