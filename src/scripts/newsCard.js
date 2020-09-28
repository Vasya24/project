//Данный модуль написан предварительно для демонстрации того, что JS функционирует.
//В дальнейшем, новые элементы подобного рода будут добавляться через форму, доступную только для зарегестрированных пользователей со значением isAdmin = true
export default function newsCard() {
    document.getElementById('news_container').insertAdjacentHTML('beforeend', `<div class="news_card">
    <img src="https://dummyimage.com/200x100/32c732/db1414.png&text=Dummy+image" class="news_card_img" alt="news">
    <h3 class="news_card_header">Заголовок новости на превью</h3>
    <p class="news_card_text">Текст новости Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam accusantium esse earum fugiat molestiae quo impedit dolorum deserunt repellat! Explicabo praesentium laborum voluptate nisi excepturi earum corporis, possimus qui iusto.</p>
    <div class="readmore">Читать дальше...</div>
    </div>`
)
}