from kartograph import Kartograph

COUNTRIES = {
    'palestine': 'PSE',
    'usa': 'USA',
    'uganda': 'UGA',
    'libya': 'LBY',
    'peru': 'PER'
}

config = {
    "layers": {
        "country": {
            "src": "natural_earth/ne_10m_admin_0_countries_lakes.shp",
            "simplify": 5,   
        }
    },
    "bounds": {
        "mode": "polygons",
        "data": {
            "layer": "country",
        }
    },
    "export": {
       "width": 500,
       "round": 1
    }
}

if __name__ == "__main__":
    K = Kartograph()
    css = open('map.css').read()
    for (country, iso) in COUNTRIES.items():
        config['layers']['country']['filter'] = (lambda r: r['ISO_A3'] == iso)
        fn = 'svg/%s.svg' % country
        K.generate(config, outfile=fn, stylesheet=css)
        print "generated", fn
    print "done"
