import { observable, action, makeObservable } from "mobx";

class SearchStore {
  search = "";

  constructor() {
    makeObservable(this, {
      search: observable,
      setSearch: action,
    });
  }

  setSearch = (value) => {
    this.search = value;
  };
}

const searchStore = new SearchStore();
export default searchStore;
