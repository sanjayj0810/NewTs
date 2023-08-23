class RecentlyPlayedStore {
    constructor(capacity) {
      this.capacity = capacity;
      this.store = new Map();
    }
  
    playSong(user, song) {
      if (!this.store.has(user)) {
        this.store.set(user, []);
      }
  
      const userSongs = this.store.get(user);
      userSongs.unshift(song);
  
      if (userSongs.length > this.capacity) {
        userSongs.pop();
      }
    }
  
    getRecentSongs(user) {
      return this.store.get(user) || [];
    }
  }
  
  module.exports = RecentlyPlayedStore;
  
