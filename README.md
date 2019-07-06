# linksmart.eu

Source for the [LinkSmart website](https://linksmart.eu), built and served by GitHub Pages.

## Running locally

You need Ruby and gem before starting, then:

```bash
# install bundler
gem install bundler

# clone the project
git clone https://github.com/linksmart/linksmart.github.io.git
cd linksmart.github.io

# run jekyll with dependencies
bundle exec jekyll serve
```

#### Docker

The docker image generates the site using Jekyll and serves the generated static website with nginx for better performance.
Building the image:

```
$ docker build -t linksmart-site .
``` 

Running the image:

```
$ docker run -p 80:80 -d linksmart-site
```

## Development

This is a [Jekyll](https://jekyllrb.com) template to generate the linksmart static website.
It uses [Sass](http://sass-lang.com/) and [Bootstrap v4](https://getbootstrap.com/) for styling.
You can add/change variables in `_sass/_bootstrap.scss` to customize Bootstrap.
Other style rules are located in `_sass/site.scss`.

## Content Management

* The content for tabs is located under `_tabs/`.
You can add new tabs or change the HTML content inside this folder.
* The domain tab has a list of showcases content that structured as a YAML file under `_data/domains.yml`.
* The header is located in `_includes/header.html`.
You can add/change links and elements.
* Jekyll uses the [Liquid templating](https://jekyllrb.com/docs/templates/) language to process templates.
You can create a new content template to render a data format similar to `_includes/header.html` & `_data/domains.yml`.
* Github Pages automatically builds and serves the content. The build status is shown in the [commit history](https://github.com/linksmart/linksmart.github.io/commits/master).

## License

[Apache License, Version 2.0](LICENSE).
