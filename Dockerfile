FROM alpine as builder

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

RUN apk add --no-cache $BUILD_PACKAGES \
    && gem install bundle

WORKDIR /jekyll
ADD . /jekyll
RUN bundle install \
    && bundle exec jekyll build 

#################
FROM nginx:alpine

COPY --from=builder /jekyll/_site /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
