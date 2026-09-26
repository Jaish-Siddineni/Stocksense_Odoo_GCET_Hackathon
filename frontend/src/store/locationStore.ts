import { create } from "zustand";

export interface Location {
  id: string;
  name: string;
  shortCode: string;
  warehouseId: string;
}

interface LocationStore {
  locations: Location[];

  addLocation: (location: Location) => void;

  deleteLocation: (id: string) => void;
}

export const useLocationStore =
  create<LocationStore>((set) => ({
    locations: [],

    addLocation: (location) =>
      set((state) => ({
        locations: [
          ...state.locations,
          location,
        ],
      })),

    deleteLocation: (id) =>
      set((state) => ({
        locations:
          state.locations.filter(
            (l) => l.id !== id
          ),
      })),
  }));