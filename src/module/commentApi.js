const commentApi = {
  async getComments(id) {
    const idApi = 'MZ10RiH3HxYgVP46u10j';
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idApi}/comments?item_id=${id}`;
    const response = await fetch(url).then((response) => response.json());
    const { comment } = await response.filter((e) => e.item_id === id)[0];
    return comment;
  },
  async addComments(id, nameValue, commentValue) {
    const idApi = 'MZ10RiH3HxYgVP46u10j';
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idApi}/comments`;
    const result = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        username: nameValue,
        comment: commentValue,
      }),
    });
    const response = await result.text();
    return response;
  },
};

export default commentApi;
