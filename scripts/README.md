# github-scraper

Set up docker containers using

```
cd ../backend
docker-compose up -d --build
docker-compose exec web aerich init -t app.db.TORTOISE_ORM
docker-compose exec web aerich init-db
```

then run,

```
$ docker build -t github-scraper .
$ docker run -e DB_NAME="web_dev" -e DB_USER="postgres" -e DB_PASSWORD="postgres" -e DB_HOST="docker.for.mac.host.internal" -e DB_PORT=5432 -e GITHUB_API_TOKEN=mytoken github-scraper

```
or the variables can be update directly in the main.py files and we can run these basic commands in the terminal


![Screen Shot 2023-04-10 at 8 39 01 AM](https://user-images.githubusercontent.com/32134349/230903004-e9e3bd00-4507-45fb-a96d-882107135c50.png)
