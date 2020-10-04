# shorten-URL-react-node-mysql
## short url generator

###### See below cmd for run application

###### Use cmd for installation  `npm install`
###### Use cmd for run application for both client and server `npm run start`

#### create mysql database using below code 

```
CREATE TABLE `urlstable` (
  `id` int(10) NOT NULL,
  `fullurl` varchar(250) NOT NULL,
  `shorturl` varchar(5) NOT NULL,
  `country` varchar(25) NOT NULL,
  `clicks` int(15) NOT NULL,
  `ipaddress` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

```
