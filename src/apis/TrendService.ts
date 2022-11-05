import { AxiosInstance, AxiosResponse } from "axios";

interface TrendService {
  get: () => Promise<AxiosResponse<any, any>>;
}

export class TrendServiceImp implements TrendService {
  private client;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  get = () => {
    return this.client.get("/trend");
  };
}
