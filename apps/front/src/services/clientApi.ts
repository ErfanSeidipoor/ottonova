import axios, { AxiosInstance } from 'axios';

export default class ClientApi {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: process.env.NX_API_ADDRESS,
      timeout: 25000,
    });
  }
}
