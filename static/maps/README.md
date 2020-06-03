SVG Map Generation
====

Generate SVG maps from Natural Earth data, using [Kartograph](http://kartograph.org)

* [Requirements on Mac OS X](http://kartograph.org/docs/kartograph.py/install-macosx.html)
	* Install [Pre-built GDAL binaries](http://www.kyngchaos.com/software/frameworks)
	* Fix path to include GDAL
	`export PYTHONPATH=$PYTHONPATH:/Library/Frameworks/GDAL.framework/Versions/2.1/Python/2.7/site-packages`
	* Download Kartograph requirements, without building GDAL
	`pip install -r https://raw.github.com/kartograph/kartograph.py/master/requirements-nogdal.txt`
		
* Install Kartograph
	* `pip install -e git+git@github.com:PythonCharmers/kartograph.py.git#egg=kartograph`
	
* Download Natural Earth administrative vectors
	* `wget http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/ne_10m_admin_0_countries_lakes.zip`
	* `unzip ne_10m_admin_0_countries_lakes.zip`

* Generate SVG maps
	* `python generate_maps.py`
