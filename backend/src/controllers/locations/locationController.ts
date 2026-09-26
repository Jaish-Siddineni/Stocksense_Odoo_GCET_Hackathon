import {
  Request,
  Response,
} from "express";

import * as locationService from "../../services/locationService";

export const getLocations =
  async (
    req: Request,
    res: Response
  ) => {
    const locations =
      await locationService.getLocations();

    res.json(locations);
  };

export const getLocation =
  async (
    req: Request,
    res: Response
  ) => {
    const location =
      await locationService.getLocationById(
        req.params.id
      );

    res.json(location);
  };

export const createLocation =
  async (
    req: Request,
    res: Response
  ) => {
    const location =
      await locationService.createLocation(
        req.body
      );

    res.status(201).json(
      location
    );
  };

export const updateLocation =
  async (
    req: Request,
    res: Response
  ) => {
    const location =
      await locationService.updateLocation(
        req.params.id,
        req.body
      );

    res.json(location);
  };

export const deleteLocation =
  async (
    req: Request,
    res: Response
  ) => {
    await locationService.deleteLocation(
      req.params.id
    );

    res.json({
      message:
        "Location deleted",
    });
  };