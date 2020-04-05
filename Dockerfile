FROM node:12-alpine

LABEL name "Jukebox"
LABEL maintainer "Hazmi35 <contact@hzmi.xyz>"

ENV DISCORD_TOKEN= \
    YT_API_KEY=
WORKDIR /usr/Jukebox

COPY . .
RUN echo [INFO] Starting to build Docker image... \
&& echo [INFO] Installing build deps... \
&& apk add --no-cache --virtual .build-deps build-base python g++ make \
&& echo [INFO] Build deps installed! \
&& echo [INFO] Installing 3rd party packages... \
&& apk add --no-cache --virtual .third-party git curl ffmpeg \
&& echo [INFO] 3rd party packages installed! \
&& echo [INFO] Node version: $(node --version) \
&& echo [INFO] npm version: $(npm --version) \
&& echo [INFO] Git version: $(git --version) \
&& echo [INFO] Installing npm packages... \
&& npm install \
&& echo [INFO] All npm packages installed! \
&& echo [INFO] Everything looks okay. \
&& echo [INFO] Building TypeScript project... \
&& echo Using TypeScript version: $(node -p "require('typescript').version") \
&& npm run build \
&& echo [INFO] Done building TypeScript project! \
&& echo [INFO] Pruning devDependencies... \
&& npm prune --production \
&& apk del .build-deps \
&& echo [INFO] Done! Starting bot with npm start

CMD ["npm", "start"]