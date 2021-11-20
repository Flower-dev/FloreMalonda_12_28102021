# SPORTSEE

This repository contains all the source code to run the micro front for the sports analytics dashboard SportSee.

## 1. Prerequisites

- NodeJS (v14.15.1)
- Yarn or npm
- Docker

## 2. Launch the project

- Fork the **[Front-End repository](https://github.com/Flower-dev/FloreMalonda_12_28102021)**.
- Clone it on your computer.

### 2.1 Front End

- This project was bootstrapped with Create React App.
- The library Recharts was used to build charts.
- API fetched with Axios.
- Scripts

**Start the front-end**

- Build the local docker image and name it micro-front with the following command.   
    ```bash
    docker image build --no-cache -t micro-front .
    ```
- Create your Docker container and run your image on port 3000 with the following command.
    ```bash
    docker container run --name micro-front  -v "`pwd`/src:/app/src"  -v "`pwd`/public:/app/public" -p 3000:3000 -dt micro-front
    ```
- Start your micro-front with the following command.
    ```bash
    docker container start micro-front
    ```



### 2.2 Back End

- Fork the **[Back-End repository](https://github.com/Flower-dev/P9-front-end-dashboard)**.
- Clone it on your computer.


** Start the back-end ** 

- Build the local docker image and name it micro-api with the following command.   
    ```bash
    docker image build --no-cache -t micro-api .
    ```
- Create your Docker container and run your image on port 3001.
    ```bash
    docker container run --name micro-api -p 3001:3000 -dt micro-api yarn dev
    ```

- Start your micro-api with the following command.
    ```bash
    docker container start micro-api
    ```

This project includes four endpoints:

| Endpoint | Description |
| --- | --- |
| http://localhost:3001/user/${userId}  | Retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.). |
| http://localhost:3001/user/${userId}/activity | Retrieves a user's activity day by day with kilograms and calories. |
| http://localhost:3001/user/${userId}/average-sessions | Retrieves the average sessions of a user per day. The week starts on Monday. |
| http://localhost:3001/user/${userId}/performance Endpoint | Retrieves a user's performance (energy, endurance, etc.). |


⚠️ currently only two users have been mocked. They have userId 12 and 18 respectively. ⚠️ 


## 3. Remove & Delete your instance

### 3.1 Front-End

- Stop your micro-front with the following command.
    ```bash
    docker container stop micro-front
    ```

- Delete your micro-front container with the following command.
    ```bash
    docker container rm micro-front
    ```

### 3.2 Back-End

- Stop your micro-api
    ```bash
    docker container stop micro-api
    ```

- Delete your micro-api container
    ```bash
    docker container rm micro-api
    ```

