import json

if __name__ == '__main__':
    accidents = json.load(open('data/accidents.json'))
    data = accidents['accidents']

    points = ["new google.maps.LatLng(%s, %s)" % (d['lat'], d['lng']) for d in data]



    js_array =" var accidents = [ {0} ]; ".format(',\n'.join(points))

    open ('data/heatmap.js','w').write(js_array)
