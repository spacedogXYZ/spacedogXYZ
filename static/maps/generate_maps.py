from kartograph import Kartograph
import csv, sys

MAPS = {
    'mit': {'iso': ['USA'], 'location': {'Cambridge': [42.360664, -71.087535]}, 'proj': 'laea-usa'},
    'israel-palestine': {'iso': ['PSE', 'ISR'], 'location': {'Ramallah': [31.9, 35.2]}},
    'oakland': {'iso': ['USA'], 'location': {'Oakland': [37.804444, -122.270833]}, 'proj': 'laea-usa'},
    'uganda': {'iso': ['UGA'], 'location': {'Kampala': [0.313611, 32.581111]}},
    'libya': {'iso': ['LBY'], 'location': {'Tripoli': [32.904722, 13.193333]}},
    'peru': {'iso': ['PER'], 'location': {'Tarapoto': [-6.483333, -76.366667]}},
    'guyana': {'iso': ['GUY'], 'location': {'Shulinab': [3.075, -59.72]}},
    'phoenix': {'iso': ['USA'], 'location': {'Phoenix': [33.45, -112.05]}, 'proj': 'laea-usa'},
    'berlin': {'iso': ['DEU'], 'location': {'Berlin': [52.516, 13.383]}},
    'webofchange': {'iso': ['CAN', 'USA'], 'location': {
        'Balcones': [30.557253, -98.116773],
        'Cortes Island': [50.116667, -124.966667],
        'Esalen': [36.122840, -121.636722],
        }
    }
}

config = {
    "proj": {
        "id": None  # default to local bounds
    },
    "layers": {
        "country": {
            "src": "natural_earth/ne_10m_admin_0_countries_lakes.shp",
            "simplify": 5,
        },
        "location": {
            "src": "tmp.csv",
        }
    },
    "bounds": {
        "mode": "polygons",
        "data": {
            "layer": "country",
        },
        "padding": 0.01
    },
    "export": {
        "width": 500,
        "round": 1
    }
}

GENERATE_WORLD = False

if __name__ == "__main__":
    K = Kartograph()
    css = open('map.css').read()

    # generate individual country maps
    for (country, m) in MAPS.items():
        print "starting", country, m
        config['layers']['country']['filter'] = (lambda r: r['ISO_A3'] in m['iso'])
        if 'proj' in m:
            config['proj']['id'] = m['proj']
        else:
            config['proj'] = {}

        # write location dict to tmp.csv
        with open('tmp.csv', 'wb') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=['name', 'lat', 'lon', 'r'])
            writer.writeheader()
            for name, loc in m['location'].items():
                writer.writerow({'name': name, 'lat': loc[0], 'lon': loc[1], 'r': 10})

        fn = 'svg/%s.svg' % country
        K.generate(config, outfile=fn, stylesheet=css)
        print "generated", fn

    if not GENERATE_WORLD:
        print "done"
        sys.exit(0)

    # now generate world map
    country_list = []
    print "starting world"
    with open('tmp.csv', 'wb') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=['name', 'lat', 'lon', 'r'])
        writer.writeheader()

        for (country, m) in MAPS.items():
            country_list.extend(m['iso'])
            for name, loc in m['location'].items():
                writer.writerow({'name': name, 'lat': loc[0], 'lon': loc[1], 'r': 10})

    config['layers']['country']['join'] = {"group-by": "CONTINENT"}
    config['layers']['country']['simplify'] = 2
    config['proj']['id'] = 'naturalearth'
    config['export']['width'] = 1000

    fn = 'svg/missions.svg'
    K.generate(config, outfile=fn, stylesheet=css)
    print "generated", fn

    print "done"
