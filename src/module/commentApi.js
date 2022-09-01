const commentApi = {
  async getComments(id) {
    const idApi = 'MZ10RiH3HxYgVP46u10j';
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idApi}/comments?item_id=${id}`;
    const response = await fetch(url);
    const comment = await response.json();
    return comment.filter((ele) => ele.item_id !== id);
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
