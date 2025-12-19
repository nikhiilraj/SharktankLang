from fastapi import FastAPI
from pydantic import BaseModel
from sharktanklang.interpreter import compile_source, safe_exec
import io
import contextlib

app = FastAPI(title="SharkTankLang Playground")

class CodeRequest(BaseModel):
    code: str

class CodeResponse(BaseModel):
    output: str
    error: str | None = None

@app.post("/run", response_model=CodeResponse)
def run_code(req: CodeRequest):
    try:
        py_code = compile_source(req.code)

        buf = io.StringIO()
        with contextlib.redirect_stdout(buf):
            safe_exec(py_code)

        return CodeResponse(output=buf.getvalue())

    except Exception as e:
        return CodeResponse(output="", error=str(e))
