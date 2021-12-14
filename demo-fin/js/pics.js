const pics = fetch('./data/pics.json')
.then(response => response.json());

export default await pics;