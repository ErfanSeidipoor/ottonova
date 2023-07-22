import { ILandmarkModel, LandmarkModel } from './landmark';

export interface ICityModel {
  name?: string;
  name_native?: string;
  country?: string;
  continent?: string;
  latitude?: number;
  longitude?: number;
  population?: number;
  founded?: number;
  landmarks?: ILandmarkModel[];
}

export class CityModel {
  public props: ICityModel = {};

  constructor(data?: ICityModel) {
    if (data) {
      this.props = data;
    }
  }

  getName(): string {
    return this.props?.name || '';
  }

  getNameNative(): string {
    return this.props?.name_native || '';
  }

  getCountry(): string {
    return this.props?.country || '';
  }

  getContinent(): string {
    return this.props?.continent || '';
  }

  getLatitude(): number {
    return this.props?.latitude || 0;
  }

  getLongitude(): number {
    return this.props?.longitude || 0;
  }

  getPopulation(): number {
    return this.props?.population || 0;
  }

  getFounded(): number | undefined {
    return this.props?.founded;
  }

  getLandmarkModels(): LandmarkModel[] {
    return this.props?.landmarks?.map((item) => new LandmarkModel(item)) || [];
  }
}
