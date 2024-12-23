import { z } from 'zod';

const createNewOutreachCircleSchema = z.object({
  name: z.string().min(10),
});

type CreateNewOutreachCircleSchemaType = z.infer<
  typeof createNewOutreachCircleSchema
>;
type CreateNewOutreachCircleSchemaErrorType = z.inferFlattenedErrors<
  typeof createNewOutreachCircleSchema
>;

export { createNewOutreachCircleSchema };
export type {
  CreateNewOutreachCircleSchemaType,
  CreateNewOutreachCircleSchemaErrorType,
};
