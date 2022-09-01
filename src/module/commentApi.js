const commentApi = {
  async getComments(id) {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MZ10RiH3HxYgVP46u10j/comments?item_id=${id}`;
    const response = await fetch(url).then((response) => response.json());
    const { comment } = await response.filter((e) => e.item_id === id)[0];
    return comment;
  },
  async addComment(id) {
    return id;
  },
};

export default commentApi;