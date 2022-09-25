 
export const homePageExampleJs = `
const schedule = require('scheduler');

const res = await schedule({
  email: "schedule@mail.com", 
  details: {
    day: "3",
    repeat: true,
  },
  pubKey: "12344567223421",
  templateKey: "123456789897"
});
    `;


export const homePageExampleFlutter = `
import 'package:emailSchedule/emailSchedule.dart';

const schedule = EmailSchedule();

Future<void> request () async {
  const SHResponse res = await schedule(
    email: "schedule@mail.com", 
    details: SHDetails(
      day: "3",
      repeat: true,
    ),
    pubKey: "12344567223421",
    templateKey: "123456789897"
  );

  print(res.status);
}
`;


export const javascriptFetchApiExample  = () => `
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("email", "judexa24@gmail.com");
urlencoded.append("id", "1234454545t");
urlencoded.append("name", "Jude Classic");
urlencoded.append("time", "2s");
urlencoded.append("subject", "start a class now");
urlencoded.append("template", "1244556566");
urlencoded.append("position", "software engineer");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("localhost:6000/v1/api/schedule/set", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
`;

export const nodeJsAxiosApiExample = () =>`
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'email': 'judexa24@gmail.com',
  'id': '1234454545t',
  'name': 'Jude Classic',
  'time': '2s',
  'subject': 'start a class now',
  'template': '1244556566',
  'position': 'software engineer' 
});
var config = {
  method: 'post',
  url: 'localhost:6000/v1/api/schedule/set',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
`;

export const dartApiExample = () =>`
var headers = {
  'Content-Type': 'application/json'
};

request.bodyFields = {
  'email': 'judexa24@gmail.com',
  'id': '1234454545t',
  'name': 'Jude Classic',
  'time': '2s',
  'subject': 'start a class now',
  'template': '1244556566',
  'position': 'software engineer'
};
request.headers.addAll(headers);

http.StreamedResponse response = await request.send();

if (response.statusCode == 200) {
  print(await response.stream.bytesToString());
}
else {
  print(response.reasonPhrase);
}
`;

export const pythonRequestApiExample = () =>`
import requests

url = "localhost:6000/v1/api/schedule/set"

payload= {
  email: judexa24@gmail.com
  id=1234454545t
  name=Jude%20Classic&time=2s&subject=start%20a%20class%20now&template=1244556566&position=software%20engineer'
headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
`;
