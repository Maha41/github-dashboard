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
<img width="1648" alt="Screen Shot 2023-04-04 at 9 53 31 AM" src="https://user-images.githubusercontent.com/32134349/229815137-ac9a3208-2441-4a21-9752-73ea8432cfb5.png">
<img width="1659" alt="Screen Shot 2023-04-04 at 9 53 40 AM" src="https://user-images.githubusercontent.com/32134349/229815149-5e3de4b4-ab67-4d02-ab52-bfc727fee0d3.png">
