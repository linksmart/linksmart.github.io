# linksmart.eu

Source for `linksmart.eu` website.

## Running locally

You need Ruby and gem before starting, then:

```bash
# install bundler
gem install bundler

# clone the project
git clone https://github.com/aksakalli/jekyll-doc-theme.git
cd jekyll-doc-theme

# run jekyll with dependencies
bundle exec jekyll serve
```

## Docker

The only docker image generates the site using Jekyll and serves the generated static website with nginx for better performance.
Building the image:

```
$ docker build -t linksmart-site .
``` 

Running the image:

```
$ docker run -p 80:80 -d linksmart-site
```

## License

[Apache License, Version 2.0](LICENSE).
