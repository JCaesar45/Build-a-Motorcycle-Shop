from fastapi import FastAPI, Query
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import httpx

app = FastAPI(
    title="MotoGallery API",
    description="High-performance aggregation layer for premium motorcycle inventory.",
    version="1.0.0"
)

class Motorcycle(BaseModel):
    id: str
    name: str
    manufacturer: str
    category: str
    price: float
    image_url: str
    created_at: datetime
    description: str
    year: int
    horsepower: Optional[int] = Field(default=100)

@app.get("/api/motorcycles", response_model=List[Motorcycle])
async def get_motorcycles(
    category: Optional[str] = Query(None, description="Filter by motorcycle category"),
    manufacturer: Optional[str] = Query(None, description="Filter by manufacturer")
):
    async with httpx.AsyncClient() as client:
        response = await client.get("https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json")
        response.raise_for_status()
        data = response.json()
        
    filtered_data = data
    if category:
        filtered_data = [m for m in filtered_data if m.get("category", "").lower() == category.lower()]
    if manufacturer:
        filtered_data = [m for m in filtered_data if m.get("manufacturer", "").lower() == manufacturer.lower()]
        
    return filtered_data

@app.get("/api/motorcycles/{motorcycle_id}", response_model=Motorcycle)
async def get_motorcycle_by_id(motorcycle_id: str):
    async with httpx.AsyncClient() as client:
        response = await client.get("https://cdn.freecodecamp.org/curriculum/labs/data/motorcycles.json")
        response.raise_for_status()
        data = response.json()
        
    for item in data:
        if item.get("id") == motorcycle_id:
            return item
            
    return {"error": "Motorcycle not found"}
