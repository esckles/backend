import { Application } from "express";

export const mainApp = async (app: Application) => {
  try {
    app.use("/api");
  } catch (error) {
    return error;
  }
};
