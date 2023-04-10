# github-dashboard-backend

Set up docker containers using

```
cd ../backend
docker-compose up -d --build
docker-compose exec web aerich init -t app.db.TORTOISE_ORM
docker-compose exec web aerich init-db
```
![Screen Shot 2023-04-04 at 9 49 37 AM](https://user-images.githubusercontent.com/32134349/229814305-7d483a45-b457-4b5d-aa31-014344dd601d.png)


Fast API docs

<img width="868" alt="Screen Shot 2023-04-10 at 8 37 08 AM" src="https://user-images.githubusercontent.com/32134349/230902739-0cfd2b9a-672f-4198-a82f-4e37cb6957ac.png">
<img width="1706" alt="Screen Shot 2023-04-10 at 8 38 02 AM" src="https://user-images.githubusercontent.com/32134349/230902828-56fbf957-d9d1-4232-b05f-4f3c439b6d57.png">
```