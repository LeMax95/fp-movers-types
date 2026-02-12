import { z } from "zod";

export const DamagePhotoSchema = z.object({
  id: z.string(),
  storedPath: z.string(), 
  localUri: z.string(),   
  mime: z.literal("image/jpeg"),
  createdAt: z.number(),

  uploaded: z.boolean().optional(),
  remoteUrl: z.string().optional(),

  width: z.number().optional(),
  height: z.number().optional(),
  sizeBytes: z.number().optional(),
});

export type DamagePhoto = z.infer<typeof DamagePhotoSchema>;

export const DamageRowSchema = z.object({
  item: z.string(),
  description: z.string(),
  photos: z.array(DamagePhotoSchema).optional(), 
});

export type DamageRow = z.infer<typeof DamageRowSchema>;
