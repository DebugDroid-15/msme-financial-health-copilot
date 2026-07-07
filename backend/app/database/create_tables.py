from app.database.database import Base
from app.database.database import engine

from app.models import *

def create_tables():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    create_tables()
    print("Database initialized successfully.")