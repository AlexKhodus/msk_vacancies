// 'use strict';
// let accordion = function () {
//     let data = $(".vacancies").attr("data-accordion");
//     $(".vacanciesItemWrap").on("click", function () {
//         if (data === "close"){
//             $(".vacanciesInnerlist").slideUp();
//         if ($(this).hasClass("active")){
//             $(this).toggleClass("active");
//         }
//         else {
//             $(".vacanciesItemWrap").removeClass("active");
//             $(this).toggleClass("active");
//         }
//       }
//         else{
//           $(this).toggleClass("active");
//         }
//         $(this).next(".vacanciesInnerlist").not()
//     })
// }
// const form = document.querySelector('.wrapperForm');
// const close = document.querySelector('.callbackClose');
// const links = document.querySelectorAll('.vacItemSelect');
// const formTitle = document.querySelector('.callbackTitle');
// const formDesc = document.querySelector('.callbackDesc');
// const formResponsibility = document.querySelectorAll('.callbackResponsibilityList');
//
// links.forEach(
//     item => {
//         item.onclick = (e) => {
//             e.preventDefault();
//             const parapms = `${item.getAttribute('title')} ${item.getAttribute('description')} ${item.getAttribute('data_duties')} ${item.getAttribute('data_requirements')} ${item.getAttribute('data_conditions')}`;
//             const title = item.getAttribute('title') || 'Менеджер по продажам';
//             const description = item.getAttribute('description') || 'Команда отдела продаж МСК активно растет и развивается. Мы ищем тех, кто сможет убедительно донести до покупателей преимущества наших замечательных проектов. Приглашаем в нашу команду менеджера по продажам.';
//             const data_duties = item.getAttribute('data_duties');
//             const data_requirements = item.getAttribute('data_requirements');
//             const data_conditions = item.getAttribute('data_conditions');
//             formTitle.innerText = title;
//             formDesc.innerText  = description;
//             form.style.display = 'flex';
//         }
//     }
// );
//
// close.onclick = () => form.style.display = 'none';
//
// window.addEventListener("DOMContentLoaded", function() {
//     function setCursorPosition(pos, elem) {
//         elem.focus();
//         if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
//         else if (elem.createTextRange) {
//             var range = elem.createTextRange();
//             range.collapse(true);
//             range.moveEnd("character", pos);
//             range.moveStart("character", pos);
//             range.select()
//         }
//     }
//     function mask(event) {
//         var matrix = "+7 (___) ___-__-__",
//             i = 0,
//             def = matrix.replace(/\D/g, ""),
//             val = this.value.replace(/\D/g, "");
//         if (def.length >= val.length) val = def;
//         this.value = matrix.replace(/./g, function(a) {
//             return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//         });
//         if (event.type == "blur") {
//             if (this.value.length == 2) this.value = ""
//         } else setCursorPosition(this.value.length, this)
//     };
//     let input = document.querySelector("#phone");
//     input.addEventListener("input", mask, false);
//     input.addEventListener("focus", mask, false);
//     input.addEventListener("blur", mask, false);
// });