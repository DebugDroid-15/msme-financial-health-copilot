from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "MSME Financial Health Copilot"

    API_VERSION: str = "v1"

    SUPABASE_URL: str = ""

    SUPABASE_KEY: str = ""

    DATABASE_URL: str = ""

    SECRET_KEY: str = "msme-secret-key"

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
    )


settings = Settings()