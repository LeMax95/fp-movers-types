import { z } from "zod";

export const NotificationSchema = z.object({
  id: z.string(),
  userId: z.string(),

  title: z.string(),
  message: z.string().nullish(),
  link: z
  .string()
  .url()
  .or(z.string().regex(/^\/.*/)) 
  .or(z.string().length(0))     
  .or(z.null())
  .optional(),


  createdAt: z.coerce.date(),


  readAt: z.string().nullable(),
});

export type NotificationItem = z.infer<typeof NotificationSchema>;
