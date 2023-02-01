const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const axios = require("axios");

const app = express();
const port = 3001;
const privateKey = fs.readFileSync("./aisuda.key"); // 刚才下载的密钥，注意这里用的是密钥，不是公钥
const token = jwt.sign(
  { companyKey: "d8dc8", appKey: "6323030daa10" },
  privateKey,
  { algorithm: "RS256" }
);
const companyToken = jwt.sign(
  { companyKey: "d8dc8"},
  privateKey,
  { algorithm: "RS256" }
);


// 获取某个应用可配置的权限点
app.get("/openApi1", (req, res) => {
  axios({
    url: "http://127.0.0.1:8089/openapi/company/cc17c/app/979cb404f905/acl?env=dev",
    method: "get",
    headers: {
      "x-client-id": "tNLroW47D3C7Bypxoi2gCj",
      Authorization: "Bearer " + token,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
// 获取应用下有哪些 ACL 配置项
app.get("/openApi4", (req, res) => {
  axios({
    url: "http://127.0.0.1:8089/openapi/company/cc17c/app/979cb404f905/acl/options",
    method: "get",
    headers: {
      "x-client-id": "tNLroW47D3C7Bypxoi2gCj",
      Authorization: "Bearer " + token,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
// 运行时指定角色权限
app.get("/openApi5", (req, res) => {
  axios({
    url: "http://m1-fex-platform-04.m1.baidu.com:8828/openapi/company/a0d83/app/963ce423a325/runtime/acl/role?env=qa&roleName=ceshi-管理员",
    method: "get",
    headers: {
      "x-client-id": "2pEVLVb8uMKrYFFjoETGyX",
      Authorization: "Bearer " + token,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
// 运行时指定角色权限1
app.get("/openApi51", (req, res) => {
  axios({
    url: "http://m1-fex-platform-04.m1.baidu.com:8828/openapi/company/a0d83/app/963ce423a325/runtime/acl/role?env=dev&roleName=ceshi-管理员",
    method: "get",
    headers: {
      "x-client-id": "2pEVLVb8uMKrYFFjoETGyX",
      Authorization: "Bearer " + token,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
// 开发态指定角色权限
app.get("/openApi6", (req, res) => {
  axios({
    url: "http://m1-fex-platform-04.m1.baidu.com:8828/openapi/company/a0d83/app/963ce423a325/acl/role?roleName=ceshi-管理员",
    method: "get",
    headers: {
      "x-client-id": "2pEVLVb8uMKrYFFjoETGyX",
      Authorization: "Bearer " + token,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
// 获取运行时权限
app.get("/openApi2", (req, res) => {
  axios({
    url: "http://127.0.0.1:8089/openapi/company/cc17c/app/979cb404f905/acl/runtime?env=dev",
    method: "get",
    headers: {
      "x-client-id": "tR6bNPtTDSig8PudA9KDCp",
      Authorization: "Bearer " + token,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
app.get("/openApi21", (req, res) => {
  axios({
    url: "http://127.0.0.1:8089/openapi/company/cc17c/app/979cb404f905/acl/runtime?env=qa",
    method: "get",
    headers: {
      "x-client-id": "tR6bNPtTDSig8PudA9KDCp",
      Authorization: "Bearer " + token,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});

// 修改运行时权限
app.get("/openApi3", (req, res) => {
  axios({
    url: "http://m1-fex-platform-04.m1.baidu.com:8828/openapi/company/a0d83/app/963ce423a325/runtime/acl?env=qa",
    method: "post",
    headers: {
      "x-client-id": "2pEVLVb8uMKrYFFjoETGyX",
      Authorization: "Bearer " + token,
    },
    data: {
      id: "dO7E21wmYl",
      readAcl: ["role:3Y4wzLNZQ7", "role:XYVw6KREva"],
      editAcl: ["role:3mrZq9ZjNR", "role:grOwVPRZNX", "role:XYVw6KREva"],
      dataManageAcl: ["role:3mrZq9ZjNR", "role:grOwVPRZNX", "role:XYVw6KREva"],
      viewLogAcl: ["role:3mrZq9ZjNR", "role:grOwVPRZNX", "role:XYVw6KREva"],
      resourceAcl: {
        pages: [
          {
            id: "XYVw6BLwva",
            key: "home",
            title: "首页",
            children: [
              {
                id: "8Yrw1a2wK9",
                key: "test",
                title: "test",
                children: [],
                aclOptions: [{ label: "可读", value: "read" }],
                acl: {
                  read: ["role:XYVw6KREva", "role:04VojyVZzG"],
                  owner: { write: true, delete: true },
                  k1Jw8ME8Gq: { write: true, delete: true },
                  "role:04VojyVZzG": { read: true },
                  "role:XYVw6KREva": { read: true, write: true, delete: true },
                },
              },
            ],
            aclOptions: [
              { label: "可读", value: "read" },
              { label: "ddddd", value: "ddddd" },
              { label: "ddd", value: "ddd" },
            ],
            acl: {
              read: ["role:04VojyVZzG", "role:XYVw6KREva"],
              owner: { write: true, delete: true },
              k1Jw8ME8Gq: { write: true, delete: true },
              "role:04VojyVZzG": { read: true },
              "role:XYVw6KREva": {
                read: true,
                ddddd: true,
                write: true,
                delete: true,
              },
            },
          },
        ],
      },
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
// 获取运行时权限

app.get("/openApi10", (req, res) => {
  axios({
    url: "http://aisuda.baidu-int.com/openapi/company/d8dc8/department",
    method: "get",
    headers: {
      "x-client-id": "8Amcy8xzvDg4yGj8CngHeG",
      Authorization: "Bearer " + companyToken,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
app.get("/openApi11", (req, res) => {
  axios({
    url: "http://aisuda.baidu-int.com/openapi/company/d8dc8/department/mrZqyMLZjN/delUser/XdkEy0ywMR",
    method: "delete",
    headers: {
      "x-client-id": "8Amcy8xzvDg4yGj8CngHeG",
      Authorization: "Bearer " + companyToken,
    },
  }).then((result) => {
    res.send({ result: result.data });
  });
});
app.listen(port);
