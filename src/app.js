import newsCard from './scripts/newsCard';
import addShow from './scripts/addShow';

//Вызов функции ниже только для проверки того, что JS работает
newsCard()
let rm = document.getElementsByClassName('readmore');
for (let i=0; i<rm.length; i++) {
    rm[i].addEventListener('click', function() {
        alert('Тут будет переход на полную версию')
    })
}

addShow('GET', 'src/data/db.json')
.then(data => {
    let items = data.shows;
    let table = document.getElementById('shows_table');
    for (let i=0; i<items.length; i++) {
    let showItem = `
    <tr class="show_item">
    <td>${items[i].date}</td>
    <td>${items[i].artist}</td>
    <td>${items[i].city}</td>
    <td>${items[i].place}</td>
    </tr>
    `
    table.insertAdjacentHTML('beforeend', showItem)

    };
})
.catch(err => console.error(err))