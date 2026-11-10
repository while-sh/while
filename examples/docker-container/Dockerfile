FROM python:3.12-slim
WORKDIR /app
COPY index.html .
USER 1000:1000
CMD ["sh", "-c", "python -m http.server ${PORT:-8080} --bind 0.0.0.0"]
