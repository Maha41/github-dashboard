from typing import List

from fastapi import APIRouter, HTTPException, Path

from app.api import crud
from app.models.tortoise import GithubUserSchema

# from app.models.pydantic import (  # isort:skip
#     GithubUserPayloadSchema,
# )

router = APIRouter()


@router.get("/", response_model=List[GithubUserSchema])
async def read_all_repos() -> List[GithubUserSchema]:
    dUser = await crud.get_all()
    print("await crud.get_all()", dUser)
    return dUser


@router.get("/{id}/", response_model=GithubUserSchema)
async def read_repos(id: int = Path(..., gt=0)) -> GithubUserSchema:
    repo = await crud.get(id)
    if not repo:
        raise HTTPException(status_code=404, detail="Repo not found")

    return repo
