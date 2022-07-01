FROM node:18.3-alpine3.15 as build

ARG $SSH_KEY_ED25519

RUN apk add git openssh openrc curl\
    && mkdir /root/.ssh/ \
    && echo "$SSH_KEY_ED25519" >> /root/.ssh/authorized_keys \
    && chmod -R 0700 /root/.ssh/ \    
    && passwd -u root \
    && ssh-keygen -A \
    && echo -e "PasswordAuthentication no" >> /etc/ssh/sshd_config \
    && mkdir -p /run/openrc \
    && touch /run/openrc/softlevel \
    && rc-update add sshd 

WORKDIR /App

COPY package*.json .

# ENV CI=true

ENV PORT=3000

EXPOSE ${PORT}

RUN npm create vite@latest -y todo-app -- --template react-ts \
    && cd todo-app \
    && npm install --save-dev babel-plugin-styled-components \
    && npm install --save styled-components react-router-dom axios \
    && npm install --save typescript @types/node @types/react @types/react-dom @types/jest \
    && /App/todo-app/src && rm -rf * && cd ..

WORKDIR /App/todo-app

COPY ./todo-app/src .

# ENTRYPOINT ["sh", "-c", "rc-status; rc-service sshd start"]

CMD [ "npm", "run", "dev" ]
