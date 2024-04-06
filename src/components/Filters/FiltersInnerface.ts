export interface DetailsBlockInterface {
  title?: string;
  filters?: string[];
  filterParameter?: string;
  filterCards: Function;
  setFilteredCards: Function;
  activeFilter: string;
  setActiveFilter: Function;
}
