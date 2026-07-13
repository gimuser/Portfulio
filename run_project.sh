#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="${IMAGE_NAME:-oualid-portfolio:local}"
CONTAINER_NAME="${CONTAINER_NAME:-oualid-portfolio}"
REQUESTED_PORT="${PORT:-3000}"
COMMAND="${1:-start}"

if [[ "$COMMAND" == "-h" || "$COMMAND" == "--help" ]]; then
  cat <<'USAGE'
Build and run the portfolio with Docker.

Usage:
  ./run_project.sh [start|stop]

Optional environment variables:
  IMAGE_NAME=oualid-portfolio:local
  CONTAINER_NAME=oualid-portfolio
  PORT=3000
  ENV_FILE=.env.local

If PORT is already busy, the script automatically uses the next free port.
The Next.js server inside Docker uses that same selected port, so the logs match the browser URL.
USAGE
  exit 0
fi

if [[ "$COMMAND" != "start" && "$COMMAND" != "run" && "$COMMAND" != "stop" ]]; then
  echo "Unknown command: $COMMAND" >&2
  echo "Usage: ./run_project.sh [start|stop]" >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is not installed or not available in PATH." >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "Docker is installed, but the Docker daemon is not running or not accessible." >&2
  exit 1
fi

if [[ "$COMMAND" == "stop" ]]; then
  if docker ps -aq --filter "name=^/${CONTAINER_NAME}$" | grep -q .; then
    docker rm -f "$CONTAINER_NAME" >/dev/null
    echo "Stopped $CONTAINER_NAME."
  else
    echo "$CONTAINER_NAME is not running."
  fi
  exit 0
fi

port_is_busy() {
  local port="$1"
  timeout 1 bash -c ":</dev/tcp/127.0.0.1/${port}" >/dev/null 2>&1
}

find_free_port() {
  local port="$1"
  while port_is_busy "$port"; do
    port=$((port + 1))
  done
  echo "$port"
}

existing_container="$(docker ps -aq --filter "name=^/${CONTAINER_NAME}$")"
if [[ -n "$existing_container" ]]; then
  docker rm -f "$CONTAINER_NAME" >/dev/null
fi

HOST_PORT="$(find_free_port "$REQUESTED_PORT")"
if [[ "$HOST_PORT" != "$REQUESTED_PORT" ]]; then
  echo "Port $REQUESTED_PORT is already in use. Using port $HOST_PORT instead."
  echo "Do not open http://localhost:${REQUESTED_PORT}; another app is already using it."
fi

docker build -t "$IMAGE_NAME" .

echo "Portfolio is starting at http://localhost:${HOST_PORT}"
echo "Next.js inside Docker will also listen on port ${HOST_PORT}."
ENV_ARGS=()
ENV_FILE="${ENV_FILE:-.env.local}"
if [[ -f "$ENV_FILE" ]]; then
  ENV_ARGS=(--env-file "$ENV_FILE")
fi

docker run --rm \
  --name "$CONTAINER_NAME" \
  "${ENV_ARGS[@]}" \
  -e "PORT=${HOST_PORT}" \
  -p "${HOST_PORT}:${HOST_PORT}" \
  "$IMAGE_NAME"
