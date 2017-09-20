FROM alpine:3.6
LABEL maintainer "Can Güney Aksakalli <can.gueney.aksakalli@fit.fraunhofer.de>"

RUN apk add --update nginx \
    ruby \
    ruby-dev \
    ruby-rdoc \
    ruby-irb \
    gcc \
    make \
    libc-dev \
    libffi-dev 

RUN gem install bundle

ENV LANGUAGE en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

WORKDIR /jekyll

ADD . /jekyll


RUN bundle install \
    && bundle exec jekyll build



