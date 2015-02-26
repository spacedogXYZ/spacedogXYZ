---
layout: post
title: Making Maps
description: Generating custom vector maps using Kartograph
category: blog
location: Oakland, Calif
image: /static/posts/kartograph-logo.png
---
The country maps that adorn our [mission reports](/mission/) weren't drawn by hand, they were rendered to SVG with the excellent [Kartograph](http://kartograph.org) framework. While we initially considered grabbing country borders off Wikipedia and modifying them with Illustrator to fit our design, the thought of doing that for each blog update didn't please us. If you're going to do something more than twice, the software engineer thought, why not write the code to do it *N* times?

Eight hours later, we have a reproducible build system for custom-designed static maps. Using a shapefile of administrative boundaries from [NaturalEarth](http://www.naturalearthdata.com) and a custom [python script](https://github.com/spacedogXYZ/spacedogXYZ.github.io/tree/master/static/maps), we can make a new map in minutes with only each country's 3-character ISO code and the latitude and longitude of the location we worked. The result is a scalable, mobile-friendly graphic that's unbranded, and doesn't look half bad.

<div class="inline center"><object type="image/svg+xml" data="/static/maps/svg/missions.svg" class="map" style="width:50%"></object></div>