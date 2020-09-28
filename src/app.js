import newsCard from './scripts/newsCard'

//Вызов функции ниже только для проверки того, что JS работает
newsCard()
let rm = document.getElementsByClassName('readmore');
for (let i=0; i<rm.length; i++) {
    rm[i].addEventListener('click', function() {
        alert('Тут будет переход')
    })
}