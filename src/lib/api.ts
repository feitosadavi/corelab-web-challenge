import { IVehicle } from 'types/'

const API = "http://localhost:3333";
const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path)).then((res) => res.json());
};

const post = async (path: string, body: any): Promise<any> => {
  return fetch(endpoint(path), {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json());
};


export const getVehicles = async () => {
  return get("/vehicles");
};

type OmitFields = 'createdAt' | 'isFavorite' | 'id'
type AddVehicleInput = Omit<IVehicle, OmitFields>
export const addVehicle = async (input: AddVehicleInput): Promise<{ id: number }> => {
  console.log({ input })
  return post("/vehicles/store", input);
};

