# github-dashboard-backend

Set up docker containers using

```
cd ../backend
docker-compose up -d --build
docker-compose exec web aerich init -t app.db.TORTOISE_ORM
docker-compose exec web aerich init-db
```
![Screen Shot 2023-04-04 at 9 49 37 AM](https://user-images.githubusercontent.com/32134349/229814305-7d483a45-b457-4b5d-aa31-014344dd601d.png)
