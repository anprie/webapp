from fastapi import FastAPI
from anagram import Anagram

app = FastAPI()


@app.get('/')
async def anagram(
     word: str = "hallo", language: str = "german"
) -> dict:
    results = Anagram.process(word, language)
    return {"results": sorted(results)}
