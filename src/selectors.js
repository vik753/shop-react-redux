import * as R from "ramda";

export const getPhoneById = (state, id) => R.prop(id, state.phones); //state.phones[id];

export const getPhones = (state) => {
  const phones = R.map((id) => getPhoneById(state, id), state.phonesPage.ids);
  return phones;
};

export const getRenderedPhonesLength = (state) =>
  R.length(state.phonesPage.ids);
