export type Props = {
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  number?: string;
  city?: string;
  postCode?: string;
  country?: string;
  errors?: ErrorProps;
};

type ErrorProps = {
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  number?: string;
  city?: string;
  postCode?: string;
  country?: string;
};

export const inputValidation = (data: Props) => {
  const errors: Props = {};
  const {
    email,
    firstName,
    lastName,
    address,
    number,
    city,
    postCode,
    country,
  } = data;
  const regex = /\S+@\S+\.\S+/;

  if (email?.trim().length === 0) {
    errors.email = "This field is required";
  }
  if (!regex.test(email!)) {
    errors.email = "Invalid email";
  }
  if (firstName?.trim().length === 0) {
    errors.firstName = "This field is required.";
  }
  if (lastName?.trim().length === 0) {
    errors.lastName = "This field is required.";
  }
  if (address?.trim().length === 0) {
    errors.address = "This field is required.";
  }
  if (number?.trim().length === 0) {
    errors.number = "This field is required.";
  }
  if (city?.trim().length === 0) {
    errors.city = "This field is required.";
  }
  if (postCode?.trim().length === 0) {
    errors.postCode = "This field is required.";
  }
  if (country?.trim().length === 0) {
    errors.country = "This field is required.";
  }

  return {
    errors,
    isFormValid: Object.keys(errors).length === 0 ? true : false,
  };
};
