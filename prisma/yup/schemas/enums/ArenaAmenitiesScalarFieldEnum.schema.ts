import * as Yup from 'yup';

export const ArenaAmenitiesScalarFieldEnumSchema = Yup.mixed().oneOf(["id","indoor","covered","outdoor","food","alcohol","parking","shuttleAvailable"])