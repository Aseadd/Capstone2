const likesApi = {
  async getAllLikes() {
    const url =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MZ10RiH3HxYgVP46u10j/likes';
    const response = await fetch(url).then((response) => response.json());
    return response;
  },
  async getLikes(id) {
    const url =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MZ10RiH3HxYgVP46u10j/likes';
    const response = await fetch(url).then((response) => response.json());
    const { likes } = await response.filter((e) => e.item_id === id)[0];
    return likes;
  },
  async addLike(id) {
    const url =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MZ10RiH3HxYgVP46u10j/likes';
    const result = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
      }),
    });
    const response = await result.text();
    return response;
  },
  async recordLike(id) {
    const result = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q2EecIDolyiDguQmkFIj/likes/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_id: id,
        }),
      }
    );
    const response = await result.text();
    return response;
  },
};

export default likesApi;
