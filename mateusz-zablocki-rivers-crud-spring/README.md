 River API
=======================

### 1. Requirements

- IDE (Intellij/Eclipse)
- JDK
- Postman
- MySql 

### 2. Clone project

```
git clone https://github.com/gajdaw-teaching/ex-03-rivers-crud/
```

### 3. How to run API

```
Open project mateusz-zabloc-rivers-crud via your IDE
Create database schema named 'rivers' 
Run RiversApplication in your ide
```

Go to page:

[localhost:8081/river](localhost:8081/river)

### 4. Curl
[POST]

`curl --location --request POST 'localhost:8081/rivers' \ --header 'Content-Type: application/json' \ --data-raw '{"river_name": "Czerniejowka","river_length": "11"}'`

[GET]

`curl -v -X GET "http://localhost:8081/river" -H "accept: application/ld+json"`

[PUT]

`curl --location --request PUT 'localhost:8081/rivers' --header 'Content-Type: application/json' --data-raw '{"riverid": 5,"river_name": "Rzeka","river_length": "112"}'`

[DELETE]

`curl --location --request DELETE 'localhost:8081/river/5'`

