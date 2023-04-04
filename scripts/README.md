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
