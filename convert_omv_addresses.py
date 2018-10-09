import json

import requests
resp = requests.post('https://webgispu.wigeogis.com/kunden/omvpetrom/backend/getFsForCountry.php', data={
    'CTRISO': 'BGR',
    'BRAND': 'OMV',
    'VEHICLE': 'CAR',
    'QRY': '|',
})

d = resp.json()
obj = [
    {
        'lat': i['y'],
        'lng': i['x'],
        'label': 'OMV, {}, гр. {}'.format(i['address_l'].strip(), i['town_l'].strip()),
    } for i in d['results']
]

for i in obj:
    print(json.dumps(i, ensure_ascii=False) + ',')