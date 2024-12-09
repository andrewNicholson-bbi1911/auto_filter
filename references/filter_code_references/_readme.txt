Для правильного добавления сгенерированного кода следуй следующей инструкции:

1) Создай новый файл модели фильтра данных в "lib/data/models/filters" и довавь в него весь код из файла:
    './filter_data_model.dart'

2) Добавь соответствующий enum тип фильтра в lib/data/models/filters/filters_model.dart. Для этого следуй инструкции из 
    './filters_model.dart'

3) Добавь соответствующий апи для фильтра.
    3.1) В соответствующем Api скрипте где-то в "lib/data/source/api/source/...", 
    в соответствующем условном классе _AnyFiltersApi добавь код из 
    './page_filters_api.dart'

    3.2) Добавь в скрипт "lib/data/source/api/api.dart" код согласно инструкции из 
    './api.dart'

4) Добавь код в репозиторий "lib/data/repositories/filters_repository.dart", следуя инструкции из 
    './filter_repository_extension.dart'

5) Не забудь добавить фильтр в соответствующий набор фильтров, следуй инструкции в 
    './filter_kits.txt'

Фильтр готов к использованию и дальнейшим изменениям)))


