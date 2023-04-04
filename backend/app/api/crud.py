from typing import List, Union
from app.models.tortoise import GithubUser


async def get_all() -> List:
    repos = await GithubUser.all().values()
    return repos


async def get(id: int) -> Union[dict, None]:
    repo = await GithubUser.filter(id=id).first().values()
    if repo:
        return repo
    return None
