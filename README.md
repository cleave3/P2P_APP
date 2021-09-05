## PEER TO PEER TRADING APP

#### Getting Started

1.  Clone this repo. On terminal, run

```sh
    git clone https://github.com/cleave3/P2P_APP.git
```

2. Install Application Dependencies

- cd into the root directory

```sh
    cd P2P_APP
```

- install

```sh
    npm install
```

3. Run the app

- In dev mode, Run

```sh
    npm run dev
```

- In production mode

```sh
    npm run build && npm start
```

#### Testing the App

Testing of this Api can be done using POSTMAN (recommended) or any other rest API client of choice

#### ENDPOINTS

<div><strong>BASE_URL :</strong> http://localhost:8080</div>

<div><strong>Users</strong></div>
headers required for user endpoints

```json
{
  "Content-Type": "application/json"
}
```

1. POST /user/signup - Register a user

body

```json
{
  "username": "testuser",
  "password": "1234"
}
```

Response

```json
{
  "status": true,
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "username": "testuser",
    "walletId": "9ef3ca80-f7ed-4f82-9bc1-dd74f7395169"
  }
}
```

2. POST /user/login - login a user

body

```json
{
  "username": "testuser",
  "password": "1234"
}
```

Response

```json
{
  "status": true,
  "code": 200,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2IyNzVhLTg4NmQtNDhlMi04ZDFjLTgwN2Y0YjkxMTk3MyIsIndhbGxldElkIjoiNGQ2ZDZmZjUtNmM3NS00ZjJmLWEwOTgtMWQ0ZjFhMjM4MTJkIiwiaWF0IjoxNjMwODAwOTQ1LCJleHAiOjE2MzA4ODczNDV9.Ix2xYmQMF0ox9stP3PYPZhRxHrw0y4z_nnElMtFj1Oc"
  }
}
```

<div><strong>Wallet</strong></div>
headers required for wallet endpoints

```json
{
  "Content-Type": "application/json",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2IyNzVhLTg4NmQtNDhlMi04ZDFjLTgwN2Y0YjkxMTk3MyIsIndhbGxldElkIjoiNGQ2ZDZmZjUtNmM3NS00ZjJmLWEwOTgtMWQ0ZjFhMjM4MTJkIiwiaWF0IjoxNjMwODAwOTQ1LCJleHAiOjE2MzA4ODczNDV9.Ix2xYmQMF0ox9stP3PYPZhRxHrw0y4z_nnElMtFj1Oc"
}
```

1. POST /wallet/deposit - Funds deposit

body

```json
{
  "amount": 50
}
```

Response

```json
{
  "status": true,
  "code": 200,
  "message": "deposit successful"
}
```

2. POST /wallet/transfer - Funds transfer

body

```json
{
  "amount": 20,
  "recipientWalletId": "9ef3ca80-f7ed-4f82-9bc1-dd74f7395169"
}
```

Response

```json
{
  "status": true,
  "code": 200,
  "message": "transfer successful"
}
```

3. GET /wallet/balance - get wallet balance

Response

```json
{
  "status": true,
  "code": 200,
  "message": "success",
  "data": {
    "balance": 50
  }
}
```

4. GET /wallet/history - get transaction history

Response

```json
{
  "status": true,
  "code": 200,
  "message": "success",
  "data": {
    "balance": 50,
    "transactions": [
      {
        "walletId": "f289d117-fcce-4624-b225-5132bce64ebf",
        "credit": 50,
        "debit": 0,
        "description": "fund account with 50",
        "timeStamp": "2021-09-05T07:52:55.097Z"
      }
    ]
  }
}
```
