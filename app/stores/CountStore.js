import alt from '../alt';

class CountStore {
  constructor() {
    this.count = 0;
  }
}

export default alt.createStore(CountStore);
