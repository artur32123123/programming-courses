const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}


// Элементы DOM
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close-btn');
const form = document.getElementById('applicationForm');
const statusDiv = document.getElementById('status');

// Открыть модальное окно

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Блокировка прокрутки фона
});

// Закрыть модальное окно
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetForm();
});

// Закрыть модальное окно при клике вне его области
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetForm();
    }
});

// Обработка отправки формы

form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Отменяем стандартное поведение
    
    // Собираем данные формы
    const formData = new FormData();
    formData.append('Имя', document.getElementById('name').value);
    formData.append('Номер телефона', document.getElementById('phone').value);
    
    // Отправляем данные через Beacon API (без ожидания ответа)
    navigator.sendBeacon('https://formspree.io/f/mwpblyyo', formData);
    
    // Мгновенное перенаправление пользователя
    window.location.href = './redirect.html';
});

// Сброс формы
function resetForm() {
    form.reset();
    statusDiv.textContent = '';
    statusDiv.className = '';
}

// Маска для телефона
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 0) {
        value = value.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        value = !value[2] ? value[1] :
            !value[3] ? value[1] + value[2] :
                !value[4] ? value[1] + '(' + value[2] + ')' + value[3] :
                    !value[5] ? value[1] + '(' + value[2] + ')' + value[3] + '-' + value[4] :
                        value[1] + '(' + value[2] + ')' + value[3] + '-' + value[4] + '-' + value[5];
    }

    e.target.value = value;
});



//    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
//             e.preventDefault();

//             // Собираем данные формы
//             const name = encodeURIComponent(document.getElementById('name').value);
//             const phone = encodeURIComponent(document.getElementById('phone').value);
//             const email = encodeURIComponent(document.getElementById('email').value);
//             const message = encodeURIComponent(document.getElementById('message').value);

//             // Форматируем сообщение
//             const formattedMessage = 
//                 `Новое сообщение с формы:%0A%0A` +
//                 `*Имя:* ${name}%0A` +
//                 `*Телефон:* ${phone}%0A` +
//                 `*Email:* ${email}%0A` +
//                 `*Сообщение:*%0A${message}`;

//             // Ваш WhatsApp номер в международном формате (без +)
//             const whatsappNumber = '79094751038';

//             // Формируем ссылку
//             const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;

//             // Открываем WhatsApp
//             window.open(whatsappUrl, '_blank');
//         });


// Элементы DOM
const openModalBtn42 = document.getElementById('openModal42');
const closeModalBtn42 = document.getElementById('closeModal42');
const modal42 = document.getElementById('feedbackModal42');
const feedbackForm42 = document.getElementById('feedbackForm42');
const notification42 = document.getElementById('notification42');

// // Открытие модального окна
// openModalBtn42.addEventListener('click', () => {
//     modal42.style.display = 'flex';
//     setTimeout(() => {
//         modal42.classList.add('active-42');
//     }, 10);
// });

// // Закрытие модального окна
// closeModalBtn42.addEventListener('click', () => {
//     modal42.classList.remove('active-42');
//     setTimeout(() => {
//         modal42.style.display = 'none';
//     }, 400);
// });

// // Закрытие при клике вне модального окна
// window.addEventListener('click', (e) => {
//     if (e.target === modal42) {
//         modal42.classList.remove('active-42');
//         setTimeout(() => {
//             modal42.style.display = 'none';
//         }, 400);
//     }
// });

// // Обработка отправки формы
// feedbackForm42.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Получаем данные из формы
//     const name42 = document.getElementById('name42').value;
//     const phone42 = document.getElementById('phone42').value;
//     const email42 = document.getElementById('email42').value;
//     const message42 = document.getElementById('message42').value;

//     // Форматируем номер телефона (удаляем всё, кроме цифр)
//     const formattedPhone42 = phone42.replace(/\D/g, '');

//     // Создаем сообщение для WhatsApp
//     let whatsappMessage42 = `Новое сообщение от: ${name42}%0A`;
//     whatsappMessage42 += `Телефон: ${phone42}%0A`;
//     if (email42) whatsappMessage42 += `Email: ${email42}%0A`;
//     whatsappMessage42 += `Сообщение:%0A${message42}`;

//     // Ваш номер WhatsApp в международном формате (без +)
//     const whatsappNumber42 = "89298642745"; // ЗАМЕНИТЕ НА ВАШ НОМЕР

//     // Формируем ссылку WhatsApp
//     const whatsappUrl42 = `https://wa.me/${whatsappNumber42}?text=${whatsappMessage42}`;

//     // Показываем уведомление
//     notification42.classList.add('show-42');

//     // Открываем WhatsApp через 2 секунды
//     setTimeout(() => {
//         window.open(whatsappUrl42, '_blank');
//         notification42.classList.remove('show-42');

//         // Закрываем модальное окно
//         modal42.classList.remove('active-42');
//         setTimeout(() => {
//             modal42.style.display = 'none';
//             feedbackForm42.reset();
//         }, 400);
//     }, 2000);
// });

// // Маска для телефона
// document.getElementById('phone42').addEventListener('input', function (e) {
//     let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
//     e.target.value = !x[2] ? x[1] : (x[1] ? '+7 ' : '') + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');
// });