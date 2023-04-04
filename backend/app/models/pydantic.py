from pydantic import AnyHttpUrl, BaseModel


class GithubUserPayloadSchema(BaseModel):
    url: AnyHttpUrl


class GithubUserResponsePayloadSchema(GithubUserPayloadSchema):
    id: int
