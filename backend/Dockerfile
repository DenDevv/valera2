FROM python:3.11-alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /backend/

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .