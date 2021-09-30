const { port } = require("../config/envConfig");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "API Docs",
      version: "1.0.0",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? "prodUrl.com"
            : `http://localhost:${port}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*js"], //fetch all API routes from the routes folders
};

module.exports = { swaggerOptions };
