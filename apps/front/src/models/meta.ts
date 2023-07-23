export interface IMeta {
  totalItems?: number;
  itemCount?: number;
  itemsPerPage?: number;
  totalPages?: number;
  currentPage?: number;
}

export class Meta {
  public props: IMeta = {};

  constructor(data?: IMeta) {
    if (data) {
      this.props = data;
    }
  }

  getTotalItems(): number {
    return this.props?.totalItems || 0;
  }

  getItemCount(): number {
    return this.props?.itemCount || 0;
  }

  getItemsPerPage(): number {
    return this.props?.itemsPerPage || 0;
  }

  getTotalPages(): number {
    return this.props?.totalPages || 0;
  }

  getCurrentPage(): number {
    return this.props?.currentPage || 1;
  }

  isFirstPage(): boolean {
    return this.props?.currentPage === 1;
  }

  getNextpage(): number {
    if (this.getTotalItems() > this.getCurrentPage() * this.getItemsPerPage()) {
      return this.getCurrentPage() + 1;
    }
    return 1;
  }
}
