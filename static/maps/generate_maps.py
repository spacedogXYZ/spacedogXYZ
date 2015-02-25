from kartograph import Kartograph
import csv

MAPS = {
    'israel-palestine': {'iso':['PSE','ISR'], 'location': {'Ramallah': [31.9, 35.2]}},
    'oakland': {'iso':['USA',], 'location': {'Oakland': [37.804444, -122.270833]}, 'proj': 'laea-usa'},
    'hollyhock': {'iso':['CAN',], 'location': {'Cortes Island': [50.116667, -124.966667]}},
    'uganda': {'iso':['UGA',], 'location': {'Kampala': [0.313611, 32.581111]}},
    'libya': {'iso':['LBY',], 'location': {'Tripoli': [32.904722, 13.193333]}},
    'peru': {'iso':['PER',], 'location': {'Tarapoto': [-6.483333, -76.366667]}},
}

config = {
    "proj": {
        "id": None # default to local bounds
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

if __name__ == "__main__":
    K = Kartograph()
    css = open('map.css').read()

    # generate individual country maps
    for (country,m) in MAPS.items():
        print "starting",country,m
        config['layers']['country']['filter'] = (lambda r: r['ISO_A3'] in m['iso'])
        if 'proj' in m:
            config['proj']['id'] = m['proj']
        else:
            config['proj'] = {}

        #write location dict to tmp.csv
        with open('tmp.csv', 'wb') as csvfile:
            writer =  csv.DictWriter(csvfile, fieldnames=['name','lat','lon', 'r'])
            writer.writeheader()
            for name,loc in m['location'].items():
                writer.writerow({'name': name, 'lat': loc[0], 'lon': loc[1], 'r': 10})

        fn = 'svg/%s.svg' % country
        K.generate(config, outfile=fn, stylesheet=css)
        print "generated", fn

    # now generate world map
    country_list = []
    print "starting world"
    with open('tmp.csv', 'wb') as csvfile:
        writer =  csv.DictWriter(csvfile, fieldnames=['name','lat','lon', 'r'])
        writer.writeheader()

        for (country,m) in MAPS.items():
            country_list.extend(m['iso'])
            for name,loc in m['location'].items():
                writer.writerow({'name': name, 'lat': loc[0], 'lon': loc[1], 'r': 10})

    config['layers']['country']['join'] =  { "group-by": "CONTINENT" }
    config['layers']['country']['simplify'] = 2
    config['proj']['id'] = 'naturalearth'
    config['export']['width'] = 1000

    fn = 'svg/missions.svg'
    K.generate(config, outfile=fn, stylesheet=css)
    print "generated", fn

    print "done"
