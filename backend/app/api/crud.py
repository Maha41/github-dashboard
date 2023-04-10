from typing import List
from app.models.tortoise import GithubUser


async def get_all() -> List:
    repos = await GithubUser.all().values()
    return repos


async def get(userName: str) -> List:
    repo = await GithubUser.filter(username=userName).all().values()
    if repo:
        return repo
    return None


async def getUsers() -> List:
    usernames = []
    repos = await GithubUser.all().values()
    for repo in repos:
        if "username" in repo:
            username = repo["username"]
            if username not in usernames:
                usernames.append(username)
    return usernames
