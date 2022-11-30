# Flexberry.SampleForSuperset

## Необходимые для запуска примера технологии
Для запуска примера потребуется:
1. [Docker](https://docs.docker.com/desktop/install/windows-install/)
2. [VScode](https://code.visualstudio.com/download) с [плагином для docker-а](https://code.visualstudio.com/docs/containers/overview)

## Последовательность действий для запуска

1. Собрать Docker-образы
```
\src\Docker> .\create-image.cmd
```

2. Запустить Docker-образы
```
\src\Docker> .\start.cmd
```

3. Открыть VScode перейти в плагин для Docker-а

4. Нажать `Attach to shell` и выполнить кооманду для создания таблиц аудита
```
clickhouse-client --host audit-db --user default --password P@ssw0rd --multiquery < /var/clickhouse/schema/CreateAuditTables.sql
```

Теперь все запущено

http://localhost - web приложение
http://localhost:4200/ - superset (логин: admin@admin.com пароль: postgres123)
http://localhost:5050/ - PG Admin (логин: postgres@pg.com пароль: xxx)
http://localhost:5432/ - postgres бд приложени (логин: flexberryuser пароль: jhv)
http://localhost:8123/ - clickhouse бд аудита (логин: default пароль: P@ssw0rd)

3. Остановить выполнение Docker-образов
```
\src\Docker> .\stop.cmd
```

## Работа с superset

1. Создать тетовые данные (можно в web приложении нажать кнопку "Добавить тестовые данные" создает 60000 тестовых данных ps данные создается долго тк на кадрую запись пишется так же и аудит)

2. Зайти в superset и подключить его к БД приложения

3. 
