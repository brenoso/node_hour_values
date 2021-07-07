const data = {
  id: 1,
  name: 'Energy 1',
  value: 10,
  ts: new Date('2021-07-01T01:10:00')
}

const sensorList = [data];
let startDate = new Date(data.ts);

for (let i = 2; i < 100; i++) {
  startDate.setMinutes(startDate.getMinutes() + 10)
  sensorList.push(
    {
      ...data,
      id: i,
      value: Math.random() * 10,
      ts: `new Date('${new Date(startDate)}')`

    }
  )
}

console.log(sensorList);