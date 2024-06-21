import requests
from fastapi import APIRouter
from fastapi.responses import JSONResponse
from pydantic import BaseModel


user_router = APIRouter(prefix="/user", tags=["Users"])


class DataModel(BaseModel):
    amount: str
    currency: str


data = DataModel(amount="849", currency="USDT")
json_data = data.dict()


@user_router.get("/some")
async def send_email():
    response = requests.post(
        "https://api.whitepay.com/private-api/crypto-orders/1c025f2a-ac67-4423-9d7b-94579c5e33d9",
        json=json_data,
        headers={
            "Authorization": "Bearer D8SqBILcivBK7FvHam85yAMZdcVdhNMenWFgBFMe",
            "Content-Type": "application/json",
        },
    )

    return JSONResponse(content=response.json())
