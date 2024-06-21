from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from router import user_router


app = FastAPI(root_path="/api/v1")

origins = [
    "http://nginx",
    "https://nginx",
    "http://client",
    "https://client",
]

# Configuring CORS to allow requests from React
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)