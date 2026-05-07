import * as z from "zod";
import { acomodacion, tipo_habitacion } from "../hooks/useHelper";

export const hotelSchema = z.object({
  ciudad: z
    .string()
    .regex(/^[A-Za-z ]+$/, {
      message: "Invalid: must contains letter",
    })
    .min(4)
    .max(40)
    .trim(),
  nombre: z
    .string()
    .min(4)
    .regex(/^[A-Za-z0-9 ]+$/, {
      message: "Invalid: must contains letter",
    })
    .max(40)
    .trim(),
  nit: z
    .string()
    .min(4)
    .max(40)
    .regex(/^[0-9-]+$/, {
      message: "Invalid: must contains letter",
    })
    .trim(),
  direccion: z
    .string()
    .min(4)
    .max(40)
    .regex(/^[A-Za-z0-9.# ]+$/, {
      message: "Invalid: must contains letter or numbers",
    })
    .trim(),
  numero_habitaciones: z.string().regex(/^[0-9]+$/, {
    message: "Invalid: must contains numbers",
  }),
});

export const habitacionSchema = z.object({
  hotel_id: z.string().regex(/^[0-9]+$/, {
    message: "Invalid: must contains numbers",
  }),
  tipo_habitacion: z.enum(tipo_habitacion),
  acomodacion: z.enum(acomodacion),
  cantidad: z.string().regex(/^[0-9]+$/, {
    message: "Invalid: must contains numbers",
  }),
});
