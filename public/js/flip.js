$(document).ready(function(){
	/* Следующий код выполняется после загрузки страницы */

	$('.up').bind("click",function(){

		// $(this) указывает на нажатого спонсора .sponsorFlip (и при этом кешируя все в elem для производительности):

		var elem = $(this);

		// data('flipped') флаг, который указывает на то, что на элемент нажали:

		if(elem.data('flipped'))
		{
			// Если элемент уже перевернут, используем метод revertFlip
			// который заложен в функционал плагина и возвращает все на свои места:

			elem.revertFlip();

			// Убираем флаг:
			elem.data('flipped',false)
		}
		else
		{
			// используем метод flip, который определен в плагине:

			elem.flip({
				direction:'lr',
				speed: 250,
				onBefore: function(){
					// Вставить содержание .sponsorData div  в нажатый
					// .sponsorFlip div перед началом анимации:

					elem.html(elem.siblings('.down').html());
				}
			});

			// Устанавливаем флаг:
			elem.data('flipped',true);
		}
	});

});
