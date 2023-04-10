from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator

class GithubUser(models.Model):
    id = fields.IntField(pk=True)
    username = fields.TextField()
    repository = fields.TextField()
    scraped_at = fields.DatetimeField(auto_now_add=True)

    def __str__(self):
        return self.url


GithubUserSchema = pydantic_model_creator(GithubUser)
