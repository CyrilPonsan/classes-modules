const data = fetch('./php/gnome.php')
.then(response => response.json());

export default await data;