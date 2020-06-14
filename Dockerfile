FROM hayd/deno:1.0.0

EXPOSE 3333

WORKDIR /app

USER deno

# Cache the dependencies as a layer (this is re-run only when deps.ts is modified).
# Ideally this will download and compile _all_ external files used in src/server.ts.
COPY src/deps.ts /app/src/deps.ts
RUN deno cache /app/src/deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . /app
# Compile the app so that it doesn't need to be compiled each startup/entry.
RUN deno cache /app/src/server.ts

CMD ["run","--allow-net","--allow-env","--allow-read","src/server.ts"]