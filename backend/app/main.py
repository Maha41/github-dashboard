import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import ping, githubUser
from app.db import init_db

log = logging.getLogger("uvicorn")


def create_application() -> FastAPI:
    application = FastAPI()
    application.include_router(ping.router)
    application.include_router(
        githubUser.router, prefix="/githubUser", tags=["githubUser"]
    )

    return application


app = create_application()

origins = ["http://localhost:3001", "localhost:3001"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    log.info("Starting up...")
    init_db(app)


@app.on_event("shutdown")
async def shutdown_event():
    log.info("Shutting down...")
