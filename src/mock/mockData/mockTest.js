// 获取 mock.Random 对象
// import Mock from 'mockjs'
// const Random = Mock.Random;
const login = (params) => {
  console.log('mock:', JSON.parse(params.body));
  if (Math.random() >= 0.5) {
    console.log('##########')
    throw {
      code: -1,
      msg: '类型错误'
    }

  }
  return {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInR5cGUiOiJqd3QifQ.eyJpYXQiOjE2ODU2MjA4MTMsImV4cCI6MTY4NTcwNzIxMywidXNlcm5hbWUiOiJhZG1pbiJ9.S-KFRFr7WsrosEHoZXjXQr6ikZKivRW0-zRZx08AhA0",
    refresh_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInR5cGUiOiJqd3QifQ.eyJpYXQiOjE2ODU2MjA4MTMsImV4cCI6MTY4NTcwNzIxMywidXNlcm5hbWUiOiJhZG1pbiIsImdyYW50X3R5cGUiOiJyZWZyZXNoIn0.N1H4LxJV4ggcva1CwKLywe1h8elGdszkd9djP9jxqs0",
    iat: "2023-06-01T12:00:13.903944",
    exp: "2023-06-02T12:00:13.903944",
    status: 1,
  };
};

const testData = () => {
  return {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInR5cGUiOiJqd3QifQ.eyJpYXQiOjE2ODU2MjA4MTMsImV4cCI6MTY4NTcwNzIxMywidXNlcm5hbWUiOiJhZG1pbiJ9.S-KFRFr7WsrosEHoZXjXQr6ikZKivRW0-zRZx08AhA0",
    refresh_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInR5cGUiOiJqd3QifQ.eyJpYXQiOjE2ODU2MjA4MTMsImV4cCI6MTY4NTcwNzIxMywidXNlcm5hbWUiOiJhZG1pbiIsImdyYW50X3R5cGUiOiJyZWZyZXNoIn0.N1H4LxJV4ggcva1CwKLywe1h8elGdszkd9djP9jxqs0",
    iat: "2023-06-01T12:00:13.903944",
    exp: "2023-06-02T12:00:13.903944",
    status: 1,
  };
};

const testData1 = { status: 1 };

const testData2 = (params) => {
  let a = JSON.parse(params.body);
  let b = "你好呀";
  return { a, b };
};

export default {
  login,
  testData,
  testData1,
  testData2,
};
