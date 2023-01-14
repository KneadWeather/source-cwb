import fetch from 'node-fetch';
import fs from 'fs';
let districts = JSON.parse(fs.readFileSync('./districts.json', 'utf8'))
const token = process.env.TOKEN;
if (!token) {
  throw new Error('No token found!');
}
console.log(`token: ${token}`);
function parseResult(result, folder) {
  if (!result.success) {
    throw new Error(`API Error`);
  }
  result = result.records.locations.map(locations =>
    locations.location.map(location =>
    ({
      cityName: locations.locationsName,
      districtName: location.locationName,
      geocode: location.geocode,
      lat: location.lat,
      lon: location.lon,
      zipcode: districts.map(x => x.districts).flat().find(x => x.name === location.locationName).zip,
      weatherElement: location.weatherElement.map(weatherElement => {
        let elements = []
        let time = weatherElement.time.map(x => x.startTime || x.dataTime)
        let values = weatherElement.time.map(x => x.elementValue)
        for (let i = 0; i < values[0].length; i++) {
          elements.push({
            name: weatherElement.elementName,
            description: weatherElement.description,
            time,
            measure: values[0][i].measures,
            values: values.map(x => x[i].value)
          })
        }
        return elements
      }).flat()
    })
    )
  ).flat(2)
  let cityName
  for (let item of result) {
    cityName = item.cityName;
    let districtName = item.districtName;
    fs.mkdirSync(`./dist/${folder}/${cityName}`, { recursive: true });
    fs.writeFileSync(`./dist/${folder}/${cityName}/${districtName}.json`, JSON.stringify(item));
  }
  fs.writeFileSync(`./dist/${folder}/${cityName}.json`, JSON.stringify(result));
}
let weekForecastAPIList = [
  // 一週天氣預報
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-003', // 宜蘭縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007', // 桃園市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-011', // 新竹縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-015', // 苗栗縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-019', // 彰化縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-023', // 南投縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-027', // 雲林縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-031', // 嘉義縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-035', // 屏東縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-039', // 台東縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-043', // 花蓮縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-047', // 澎湖縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-051', // 基隆市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-055', // 新竹市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-059', // 嘉義市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063', // 台北市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-067', // 高雄市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-071', // 新北市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-075', // 台中市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-079', // 台南市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-083', // 連江縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-087', // 金門縣
];
weekForecastAPIList.forEach(async (api) => {
  let url = `${api}?Authorization=${token}`;
  let result = await fetch(url).then(x => x.json())
  result = parseResult(result, 'week');
})

let dayForecastAPIList = [
  // 兩天天氣預報
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-001', // 宜蘭縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-005', // 桃園市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-009', // 新竹縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-013', // 苗栗縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-017', // 彰化縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-021', // 南投縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-025', // 雲林縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-029', // 嘉義縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-033', // 屏東縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-037', // 台東縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-041', // 花蓮縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-045', // 澎湖縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-049', // 基隆市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-053', // 新竹市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-057', // 嘉義市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061', // 台北市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-065', // 高雄市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069', // 新北市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-073', // 台中市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077', // 台南市
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-081', // 連江縣
  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-085', // 金門縣
]
dayForecastAPIList.forEach(async (api) => {
  let url = `${api}?Authorization=${token}`;
  let result = await fetch(url).then(x => x.json())
  result = parseResult(result, 'day');
})
