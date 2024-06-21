import os

from dotenv import load_dotenv


load_dotenv(".env")


class BaseConfig:
    ...


class DevelopmentConfig:
    ...


config = dict(base=BaseConfig, dev=DevelopmentConfig)