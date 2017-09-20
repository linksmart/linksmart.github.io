FROM alpine:3.6
LABEL maintainer "Can Güney Aksakalli <can.gueney.aksakalli@fit.fraunhofer.de>"

RUN apk add --update nginx \
    ruby \
    ruby-dev \
    ruby-rdoc \
    ruby-irb \
    gcc \
    make \
    libffi-dev 

RUN gem install bundle

ENV LANGUAGE en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

WORKDIR /jekyll

ADD . /jekyll

# RUN gem install ffi --version='1.0.9'
# RUN bundle install


