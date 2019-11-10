# coinmarketcap 제공용 API

### 의존성 모듈 설치 및 실행

* 의존성 모듈 설치

```bash
$ npm i
```

* 서버 실행

```bash
$ npm start # permission 발생시 sudo 처리
```

* 서버 중지

```bash
$ npm run stop  # permission 발생시 sudo 처리
```

* 서버 제거

```bash
$ npm run delete  # permission 발생시 sudo 처리
```

### 설정파일

* `ABI.json`

ERC20용 ABI를 넣어준다.

```json
[
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "fr",
        "type": "address"
      },
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "fr",
        "type": "address"
      },
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_fee",
        "type": "uint256"
      }
    ],
    "name": "setFee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "addPublish",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "feeReceiver",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "fee",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "setFeeReceiver",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_totalSupply",
        "type": "uint256"
      },
      {
        "name": "_feeReceiver",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Fee",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Burn",
    "type": "event"
  }
]
```



* `excepts.json`

ERC20은 채굴 개념이 아니기 때문에 총 발행량만큼 이미 발행완료 됨. 유통량을 계산하기 위해 총 발행량에서 차감시킬 홀더들의 주소를 넣어준다.

전체 발행량(totalSupply)에서 해당 파일에 등록된 주소의 토큰 보유량만큼 차감.

```json
[
  "0x24cc47b0679b1fd93af4e124cd0a3555ffc16d12", 
  "0xb4460b75f54cef563bf68ec219208344c7ea8323", 
  "0xd18ea6f0f017fe5fe5a6eeb24b75d6ffa1173834",
  "0x666abbb00a882911170242f659d9c62f0526c645",
  "0x8f1f0d06f96c67b4f1c60b209f1d4a74d9c48b56",
  "0xae0853991804f8476b5acb6a964ae50755d75567",	
  "0x94507ff99ba90e7f3f63eacdbc4a7d48b8db9678",
  "0x3df6c80486b71b73739e4a2d462864011a1a8789"
]
```

* `info.json`

토큰 컨트랙트 주소와 노드 아이피를 설정한다.

```json
{
  "TOEKN_ADDRESS": "0x4dd672e77c795844fe34a43ef8e20fa1e617c8fb",
  "NODE_IP": "https://mainnet.infura.io"
}
```

### API

* 유통량 조회

methods: `GET`

path: `/coin`

response type: text

response 

```
549064739.8957682
```