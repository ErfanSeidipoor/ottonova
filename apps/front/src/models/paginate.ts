import { ClassConstructor } from 'class-transformer';
import { IMeta, Meta } from './meta';

export interface IPaginate<T> {
  items?: T[];
  meta?: IMeta;
}

export class Paginate<T, K> {
  public props: IPaginate<T> = {};
  public itemConstructor: ClassConstructor<K>;

  constructor(itemConstructor: ClassConstructor<K>, data?: IPaginate<T>) {
    this.itemConstructor = itemConstructor;
    if (data) {
      this.props = data;
    }
  }

  getItems(): T[] {
    return this.props.items || [];
  }

  getModels(): K[] {
    return this.getItems().map((item) => new this.itemConstructor(item));
  }

  getMeta(): Meta {
    return new Meta(this.props?.meta || {});
  }
}
