import { AxiosInstance, AxiosResponse } from "axios";

interface ADService {
  get: () => Promise<AxiosResponse<any, any>>;
}

export class ADServiceImp implements ADService {
  private client;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  get = () => {
    return this.client.get("/ad-list");
  };
}
