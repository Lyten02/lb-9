const blogJson = JSON.stringify([
 {title:'Маршрут по центру Тирасполя',author:'Кирилл',date:'12.03.2026',image:'img/photo1.svg',text:'Короткая прогулка по центру с остановками у театра, набережной и городских кафе.',tags:['город','прогулка','тирасполь']},
 {title:'Что взять в поездку на день',author:'Алина',date:'19.03.2026',image:'img/photo2.svg',text:'Список вещей без лишнего: вода, документы, зарядка, удобная обувь и небольшой перекус.',tags:['советы','поездка']},
 {title:'Недорогие выходные рядом',author:'Максим',date:'02.04.2026',image:'img/photo3.svg',text:'Подборка спокойных мест для отдыха, куда можно выбраться без длинной подготовки.',tags:['выходные','маршрут']},
 {title:'Фототочки на закате',author:'Ника',date:'10.04.2026',image:'img/photo4.svg',text:'Несколько мест, где свет вечером лучше всего подходит для фотографий.',tags:['фото','город']}
]);
const cardHtml = `<article class="blog-card"><img class="blog-card-cover" src="" alt=""><div class="blog-card-body"><div class="blog-meta"><span class="card-author"></span><span class="card-date"></span></div><h2 class="card-title"></h2><p class="card-text"></p><ul class="tags"></ul></div><div class="blog-card-footer">Запись учебного блога</div></article>`;
let blogData = [];
$(function(){
  blogData = JSON.parse(blogJson);
  drawCards(blogData);
  $('.search-button').on('click', function(){ filterCards($('.search-text').val().toLowerCase(), blogData); });
  $('.search-text').on('keydown', function(e){ if(e.key === 'Enter') filterCards($(this).val().toLowerCase(), blogData); });
});
function drawCards(data){
  const $list = $('.blog-list');
  $list.html('');
  data.forEach(item => {
    const $card = $(cardHtml);
    $card.find('.blog-card-cover').attr('src', item.image).attr('alt', item.title);
    $card.find('.card-author').text(item.author);
    $card.find('.card-date').text(item.date);
    $card.find('.card-title').text(item.title);
    $card.find('.card-text').text(item.text);
    item.tags.forEach(tag => $card.find('.tags').append(`<li><a href="#">${tag}</a></li>`));
    $list.append($card);
  });
  initTagFilter();
}
function filterCards(query, data){
  const newData = data.filter(item => Object.values(item).join(' ').toLowerCase().indexOf(query) !== -1);
  drawCards(newData);
}
function initTagFilter(){
  $('.tags a').off('click').on('click', function(e){ e.preventDefault(); filterCards($(this).text().toLowerCase(), blogData); });
}
