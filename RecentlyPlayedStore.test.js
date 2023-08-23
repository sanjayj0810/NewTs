const RecentlyPlayedStore = require('../RecentlyPlayedStore');

describe('RecentlyPlayedStore', () => {
  test('should store and retrieve recent songs for a user', () => {
    const store = new RecentlyPlayedStore(2);

    store.playSong('user1', 'song1');
    store.playSong('user1', 'song2');

    expect(store.getRecentSongs('user1')).toEqual(['song2', 'song1']);
  });

  test('should limit the number of stored songs per user', () => {
    const store = new RecentlyPlayedStore(2);

    store.playSong('user1', 'song1');
    store.playSong('user1', 'song2');
    store.playSong('user1', 'song3');

    expect(store.getRecentSongs('user1')).toEqual(['song3', 'song2']);
  });

  test('should handle multiple users', () => {
    const store = new RecentlyPlayedStore(2);

    store.playSong('user1', 'song1');
    store.playSong('user2', 'song2');

    expect(store.getRecentSongs('user1')).toEqual(['song1']);
    expect(store.getRecentSongs('user2')).toEqual(['song2']);
  });

  test('should handle users without played songs', () => {
    const store = new RecentlyPlayedStore(2);

    expect(store.getRecentSongs('user1')).toEqual([]);
  });
});

console.log(RecentlyPlayedStore.getRecentSongs('user1')); // Output: ['song2', 'song1']
