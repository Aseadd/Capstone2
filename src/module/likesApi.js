const likesApi = {
  async getAllLikes() {
    // eslint-disable-next-line
    const url =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MZ10RiH3HxYgVP46u10j/likes';
    const response = await fetch(url).then((response) => response.json());
    return response;
  },
  async getLikes(id) {
    // eslint-disable-next-line
    const url =
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MZ10RiH3HxYgVP46u10j/likes';
    const response = await fetch(url).then((response) => response.json());
    const { likes } = await response.filter((e) => e.item_id === id)[0];
    return likes;
  },
  async addLike(id) {
    // eslint-disable-next-line
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
    // eslint-disable-next-line
    const result = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q2EecIDolyiDguQmkFIj/likes/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_id: id,
        }),
      },
    );
    const response = await result.text();
    return response;
  },

  //   async getTotalMealLikes() {
  //     // eslint-disable-next-line
  //     const url =
  //       'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MZ10RiH3HxYgVP46u10j/likes';
  //     const response = await fetch(url).then((response) => response.json());
  //     // console.log(
  //     //   response.reduce((accumulator, current) => accumulator + current.likes, 0)
  //     // );

  //     console.log(countLike);
  //     let countLikes = 0;
  //     for (let i = 2; i < response.length; i += 1) {
  //       countLikes += response[i].likes;
  //     }
  //     // console.log(countLikes);
  //     return countLikes;
  //   },
};

export default likesApi;
