import requests

if __name__ == '__main__':

    resp = requests.get('http://youarehere.cc/p/static/data/Cambridge/bicycle_accidents/final_corrected_data.json')
    open('data/accidents.json','w').write(resp.content)
