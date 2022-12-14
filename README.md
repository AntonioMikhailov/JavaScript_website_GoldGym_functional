# JavaScript_website_GoldGym_functional
 

##### Реализация данного сайта через Объектно ориентированный подход (classes ES6)
[JavaScript_website_GoldGym_OOP](https://github.com/AntonioMikhailov/JavaScript_website_GoldGym_OOP 'JavaScript_website_GoldGym_OOP')

##### Реализация данного сайта через React App
[React_website_GoldGym](https://github.com/AntonioMikhailov/React_website_GoldGym 'React_website_GoldGym')


![alt text](https://github.com/AntonioMikhailov/AntonioMikhailov/blob/main/assets/gold-gym-small.png)
## Задача
 1.	Создать многостраничный веб-сайт на тему : Фитнесс Центр
2.	Дизайн сайта выполнить на основе шаблона Figma
3.	Реализовать 100% адаптивность для каждой секции во всем диапазоне ширин современных экранов
4.	Реализовать функциональность (интерактивность) с юзером по средством модулей: слайдеры, плавный скролл наверх страницы,  API Гугл карты, отправка данных формы на e-mail Заказчика

&nbsp;
## Используемые языки, технологии, пакеты:
- JavaScript, HTML, LESS
- GULP (WebPack), PHPMailer, Fetch API


&nbsp;
## Реализация функционала и логики
- Разработка сайта осуществляется на основе функционального подхода ( есть вариант через ООП и также вариант на React App) 
 - Устанавливаем и настраиваем GULP
- Создаем список задач для GULP:  копирование файлов, конвертация шрифтов в woff, конвертация изображений в webp, подключаем Babel, конвертация css-less, архивация сборки в zip файл
- Создаем структуру CSS и HTML файлов
- Реализуем функциональность отдельных секций на основе ТЗ
- **Особенности реализации проекта:**
    -	для реализации отправки данных формы юзера, применяем библиотеку PHP mailer в связке с Fetch API
