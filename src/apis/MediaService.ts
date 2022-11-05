import { AxiosInstance, AxiosResponse } from "axios";

interface MediaService {
  get: () => Promise<AxiosResponse<any, any>>;
}

export class MediaServiceImp implements MediaService {
  private client;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  get = () => {
    return this.client.get("/media-channel");
  };
}
