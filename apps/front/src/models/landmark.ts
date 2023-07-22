export interface ILandmarkModel {
  name?: string;
}

export class LandmarkModel {
  public props: ILandmarkModel = {};

  constructor(data?: ILandmarkModel) {
    if (data) {
      this.props = data;
    }
  }

  getName(): string {
    return this.props?.name || '';
  }
}
