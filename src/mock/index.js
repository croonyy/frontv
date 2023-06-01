//通过mockjs模块实现模拟数据
//对外暴露的是一个对象
import Mock from 'mockjs';
//模拟的数据需要引入进来
//对于一些模块：图片、json文件默认对外暴露【虽然你没有书写但是它已经暴露了】
import loginData from './mockData/login.json';
const base_url = 'http://localhost:8080'
// 获取 mock.Random 对象
// const Random = Mock.Random;


// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
// Mock.setup({
//     timeout: '200 - 400'
// })
// console.log('@@@',loginData)
//Mock依赖包对外暴露的是一个Mock对象，这个对象提供的一个mock方法可以模拟数据
//参数:第一个参数  模块数据将来axios请求的地址   第二个参数:获取到的数据
// Mock.mock(`${base_url}/mock/login/`, 'get', { code: 200, data: loginData });
Mock.mock(`${base_url}/mock_test/`, 'get', { code: 200, data: loginData });
// Mock.mock("/mock_test/", "get", () => {
//     return { code: 200, data: loginData }
// });

// Mock.mock('/api/user', {
//     'name': '@name',
//     'age|1-100': 100,
//     'color': '@color'
// })


// let tableList = [
//     {
//         id: "5ffa80aD-9CF4-0C77-eBFC-f6612BfAcF4F",
//         account: "admin",
//         password: "123456",
//         address: "36918166@qq.com",
//     },
//     {
//         id: "4FcC922C-C72c-95c3-Ef92-FbFAc24cc831",
//         account: "ebHoL6",
//         password: "i320Hu74fbn2Gi",
//         address: "48165263@qq.com",
//     },
// ]


// Mock.mock("/api/mockGetList", "get", () => {
//     return {
//         code: "0",
//         data: tableList,
//     };

// });


// /** post请求添加表格数据 */
// Mock.mock("/api/add", "post", (params) => {
//     let newData = JSON.parse(params.body);
//     newData.id = Random.guid();
//     tableList.push(newData);
//     return {
//         code: "0",
//         message: "success",
//         data: tableList,
//     };
// })