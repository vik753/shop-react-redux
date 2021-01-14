import * as R from "ramda";

import phones from "api/mockPhones";
import categories from "api/mockCategories";

export const fetchPhones = async () => {
  const jsonPhones = await fetch(
    "https://run.mocky.io/v3/6db52f24-6346-45ff-a156-9286c1a80146"
  );
  const body = await jsonPhones.json();
  return body.phones;
};

export const loadMorePhones = async ({ offset }) => {
  return new Promise((resolve, reject) => {
    resolve(phones);
  });
};

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq("id", id), phones);
    resolve(phone);
  });
};

export const fetchCatigories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories);
  });
};
