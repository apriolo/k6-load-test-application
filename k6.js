import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  // vus: 20,
  //duration: '60s',
  thresholds: {
    http_req_duration: [
      'p(95)<1000'
    ]
  },
  stages: [
      {duration: '30s', target: 10},
      {duration: '15s', target: 5},
      {duration: '15s', target: 10},
      {duration: '60s', target: 20},
  ]
};

export default function () {
  const url = 'http://localhost:3000/process?n=10&complexity=50';
  console.log('Fetching:', url);
  http.get(url);
}

export function handleSummary(data) {
  return {
    "index.html": htmlReport(data),
  };
}
