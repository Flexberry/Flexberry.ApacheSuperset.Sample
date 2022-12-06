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

3. Открыть VScode, перейти в плагин для Docker-а

4. Нажать у контейнера sampleforsuperset/clickhouse `Attach to shell` и выполнить команду для создания таблиц аудита
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

1. Создать тестовые данные (можно в web-приложении нажать кнопку "Добавить тестовые данные", которая создаст 60000 записей тестовых данных, данные создаеются долго т.к. на каждую запись пишется так же и аудит)

2. Зайти в superset и подключить его к БД приложения

![image](https://user-images.githubusercontent.com/18547316/204755467-03033dc4-02fe-4a00-8835-05e338a2b8a7.png)

![image](https://user-images.githubusercontent.com/18547316/204755908-91ec46cd-22c6-4743-96a4-952eb3376544.png)

3. Создать datasets

![image](https://user-images.githubusercontent.com/18547316/204756863-7fafae65-a5a1-4741-8cb5-804afea27f06.png)

![image](https://user-images.githubusercontent.com/18547316/204756994-d96761a7-4be7-43ea-b67e-ac190655b441.png)

4. Создать нужные сhart

![image](https://user-images.githubusercontent.com/18547316/204761834-703e1988-8079-4a23-a960-d235e37c6a86.png)

5. Создать dashboard

![image](https://user-images.githubusercontent.com/18547316/204764861-2a0518d7-789d-4ad7-ab8d-32670584b29d.png)


## Экспресс пример

Для быстрого примера можно импортировать готовый dashboard:

1. Перейти на dashboards и нажать кнопку импорта

![image](https://user-images.githubusercontent.com/18547316/204788084-f8412cc1-275a-40ad-844a-977100e9875e.png)

2. Выбрать файл dashboard_export.zip из корня репозитория

3. Ввести пароли

![image](https://user-images.githubusercontent.com/18547316/204788974-cdbcfc61-2119-4a6d-bb37-4297745d2951.png)
