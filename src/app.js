import { getForecast, getCurrent, getSearch } from "./api";

export async function search(input) {
  const result = await getSearch(input);
  return result;
}

export async function current(location) {
  const result = await getCurrent(location);
  return result;
}

export async function forecast(location) {
  const result = await getForecast(location);
  return result;
}
