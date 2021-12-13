export function createGnome(data) {
    let gnomes = [];
    let i = 0;
    data.forEach((response) => {
        response.forEach((element) => {
            console.log(element.nom);
        })
    });
    return gnomes;
}