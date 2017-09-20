FROM alpine:3.6
LABEL maintainer "Can Güney Aksakalli <can.gueney.aksakalli@fit.fraunhofer.de>"

ENV LANGUAGE en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

ENV BUILD_PACKAGES \
    ruby \
    ruby-dev \
    ruby-rdoc \
    ruby-irb \
    gcc \
    make \
    libc-dev \
    libffi-dev

WORKDIR /jekyll
ADD . /jekyll

RUN apk add --update nginx \
    $BUILD_PACKAGES \
    && gem install bundle \
    && bundle install \
    && bundle exec jekyll build \
    && mkdir -p  /usr/share/nginx/html \
    && cp -r _site/. /usr/share/nginx/html \
    && cd .. && rm -rf /jekyll \
    && apk del $BUILD_PACKAGES \
    && rm -rf /var/cache/apk/*


RUN apk add --update nginx \
  && rm -rf /var/cache/apk/* \
  && mkdir -p  /usr/share/nginx/html \
  && echo hello > /usr/share/nginx/html/index.html


COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
