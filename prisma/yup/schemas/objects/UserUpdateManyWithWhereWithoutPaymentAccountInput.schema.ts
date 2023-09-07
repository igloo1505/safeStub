// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserScalarWhereInputObjectSchema } from '../internals';;
import { UserUpdateManyMutationInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateManyWithoutUserInputObjectSchema } from '../internals';

export const UserUpdateManyWithWhereWithoutPaymentAccountInputObjectSchema = Yup.object({
    where: UserScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([UserUpdateManyMutationInputObjectSchema,
UserUncheckedUpdateManyWithoutUserInputObjectSchema])
});
