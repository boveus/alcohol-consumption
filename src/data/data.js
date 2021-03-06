// thanks to https://www.csvjson.com/csv2json
let data = [
  {
    'country': 'Afghanistan',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Albania',
    'beer_servings': 89,
    'spirit_servings': 132,
    'wine_servings': 54,
    'total_litres_of_pure_alcohol': 4.9
  },
  {
    'country': 'Algeria',
    'beer_servings': 25,
    'spirit_servings': 0,
    'wine_servings': 14,
    'total_litres_of_pure_alcohol': 0.7
  },
  {
    'country': 'Andorra',
    'beer_servings': 245,
    'spirit_servings': 138,
    'wine_servings': 312,
    'total_litres_of_pure_alcohol': 12.4
  },
  {
    'country': 'Angola',
    'beer_servings': 217,
    'spirit_servings': 57,
    'wine_servings': 45,
    'total_litres_of_pure_alcohol': 5.9
  },
  {
    'country': 'Antigua & Barbuda',
    'beer_servings': 102,
    'spirit_servings': 128,
    'wine_servings': 45,
    'total_litres_of_pure_alcohol': 4.9
  },
  {
    'country': 'Argentina',
    'beer_servings': 193,
    'spirit_servings': 25,
    'wine_servings': 221,
    'total_litres_of_pure_alcohol': 8.3
  },
  {
    'country': 'Armenia',
    'beer_servings': 21,
    'spirit_servings': 179,
    'wine_servings': 11,
    'total_litres_of_pure_alcohol': 3.8
  },
  {
    'country': 'Australia',
    'beer_servings': 261,
    'spirit_servings': 72,
    'wine_servings': 212,
    'total_litres_of_pure_alcohol': 10.4
  },
  {
    'country': 'Austria',
    'beer_servings': 279,
    'spirit_servings': 75,
    'wine_servings': 191,
    'total_litres_of_pure_alcohol': 9.7
  },
  {
    'country': 'Azerbaijan',
    'beer_servings': 21,
    'spirit_servings': 46,
    'wine_servings': 5,
    'total_litres_of_pure_alcohol': 1.3
  },
  {
    'country': 'Bahamas',
    'beer_servings': 122,
    'spirit_servings': 176,
    'wine_servings': 51,
    'total_litres_of_pure_alcohol': 6.3
  },
  {
    'country': 'Bahrain',
    'beer_servings': 42,
    'spirit_servings': 63,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 2
  },
  {
    'country': 'Bangladesh',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Barbados',
    'beer_servings': 143,
    'spirit_servings': 173,
    'wine_servings': 36,
    'total_litres_of_pure_alcohol': 6.3
  },
  {
    'country': 'Belarus',
    'beer_servings': 142,
    'spirit_servings': 373,
    'wine_servings': 42,
    'total_litres_of_pure_alcohol': 14.4
  },
  {
    'country': 'Belgium',
    'beer_servings': 295,
    'spirit_servings': 84,
    'wine_servings': 212,
    'total_litres_of_pure_alcohol': 10.5
  },
  {
    'country': 'Belize',
    'beer_servings': 263,
    'spirit_servings': 114,
    'wine_servings': 8,
    'total_litres_of_pure_alcohol': 6.8
  },
  {
    'country': 'Benin',
    'beer_servings': 34,
    'spirit_servings': 4,
    'wine_servings': 13,
    'total_litres_of_pure_alcohol': 1.1
  },
  {
    'country': 'Bhutan',
    'beer_servings': 23,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.4
  },
  {
    'country': 'Bolivia',
    'beer_servings': 167,
    'spirit_servings': 41,
    'wine_servings': 8,
    'total_litres_of_pure_alcohol': 3.8
  },
  {
    'country': 'Bosnia-Herzegovina',
    'beer_servings': 76,
    'spirit_servings': 173,
    'wine_servings': 8,
    'total_litres_of_pure_alcohol': 4.6
  },
  {
    'country': 'Botswana',
    'beer_servings': 173,
    'spirit_servings': 35,
    'wine_servings': 35,
    'total_litres_of_pure_alcohol': 5.4
  },
  {
    'country': 'Brazil',
    'beer_servings': 245,
    'spirit_servings': 145,
    'wine_servings': 16,
    'total_litres_of_pure_alcohol': 7.2
  },
  {
    'country': 'Brunei',
    'beer_servings': 31,
    'spirit_servings': 2,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 0.6
  },
  {
    'country': 'Bulgaria',
    'beer_servings': 231,
    'spirit_servings': 252,
    'wine_servings': 94,
    'total_litres_of_pure_alcohol': 10.3
  },
  {
    'country': 'Burkina Faso',
    'beer_servings': 25,
    'spirit_servings': 7,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 4.3
  },
  {
    'country': 'Burundi',
    'beer_servings': 88,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 6.3
  },
  {
    'country': 'Cote d\'Ivoire',
    'beer_servings': 37,
    'spirit_servings': 1,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 4
  },
  {
    'country': 'Cabo Verde',
    'beer_servings': 144,
    'spirit_servings': 56,
    'wine_servings': 16,
    'total_litres_of_pure_alcohol': 4
  },
  {
    'country': 'Cambodia',
    'beer_servings': 57,
    'spirit_servings': 65,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 2.2
  },
  {
    'country': 'Cameroon',
    'beer_servings': 147,
    'spirit_servings': 1,
    'wine_servings': 4,
    'total_litres_of_pure_alcohol': 5.8
  },
  {
    'country': 'Canada',
    'beer_servings': 240,
    'spirit_servings': 122,
    'wine_servings': 100,
    'total_litres_of_pure_alcohol': 8.2
  },
  {
    'country': 'Central African Republic',
    'beer_servings': 17,
    'spirit_servings': 2,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 1.8
  },
  {
    'country': 'Chad',
    'beer_servings': 15,
    'spirit_servings': 1,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 0.4
  },
  {
    'country': 'Chile',
    'beer_servings': 130,
    'spirit_servings': 124,
    'wine_servings': 172,
    'total_litres_of_pure_alcohol': 7.6
  },
  {
    'country': 'China',
    'beer_servings': 79,
    'spirit_servings': 192,
    'wine_servings': 8,
    'total_litres_of_pure_alcohol': 5
  },
  {
    'country': 'Colombia',
    'beer_servings': 159,
    'spirit_servings': 76,
    'wine_servings': 3,
    'total_litres_of_pure_alcohol': 4.2
  },
  {
    'country': 'Comoros',
    'beer_servings': 1,
    'spirit_servings': 3,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 0.1
  },
  {
    'country': 'Congo',
    'beer_servings': 76,
    'spirit_servings': 1,
    'wine_servings': 9,
    'total_litres_of_pure_alcohol': 1.7
  },
  {
    'country': 'Cook Islands',
    'beer_servings': 0,
    'spirit_servings': 254,
    'wine_servings': 74,
    'total_litres_of_pure_alcohol': 5.9
  },
  {
    'country': 'Costa Rica',
    'beer_servings': 149,
    'spirit_servings': 87,
    'wine_servings': 11,
    'total_litres_of_pure_alcohol': 4.4
  },
  {
    'country': 'Croatia',
    'beer_servings': 230,
    'spirit_servings': 87,
    'wine_servings': 254,
    'total_litres_of_pure_alcohol': 10.2
  },
  {
    'country': 'Cuba',
    'beer_servings': 93,
    'spirit_servings': 137,
    'wine_servings': 5,
    'total_litres_of_pure_alcohol': 4.2
  },
  {
    'country': 'Cyprus',
    'beer_servings': 192,
    'spirit_servings': 154,
    'wine_servings': 113,
    'total_litres_of_pure_alcohol': 8.2
  },
  {
    'country': 'Czech Republic',
    'beer_servings': 361,
    'spirit_servings': 170,
    'wine_servings': 134,
    'total_litres_of_pure_alcohol': 11.8
  },
  {
    'country': 'North Korea',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'DR Congo',
    'beer_servings': 32,
    'spirit_servings': 3,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 2.3
  },
  {
    'country': 'Denmark',
    'beer_servings': 224,
    'spirit_servings': 81,
    'wine_servings': 278,
    'total_litres_of_pure_alcohol': 10.4
  },
  {
    'country': 'Djibouti',
    'beer_servings': 15,
    'spirit_servings': 44,
    'wine_servings': 3,
    'total_litres_of_pure_alcohol': 1.1
  },
  {
    'country': 'Dominica',
    'beer_servings': 52,
    'spirit_servings': 286,
    'wine_servings': 26,
    'total_litres_of_pure_alcohol': 6.6
  },
  {
    'country': 'Dominican Republic',
    'beer_servings': 193,
    'spirit_servings': 147,
    'wine_servings': 9,
    'total_litres_of_pure_alcohol': 6.2
  },
  {
    'country': 'Ecuador',
    'beer_servings': 162,
    'spirit_servings': 74,
    'wine_servings': 3,
    'total_litres_of_pure_alcohol': 4.2
  },
  {
    'country': 'Egypt',
    'beer_servings': 6,
    'spirit_servings': 4,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 0.2
  },
  {
    'country': 'El Salvador',
    'beer_servings': 52,
    'spirit_servings': 69,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 2.2
  },
  {
    'country': 'Equatorial Guinea',
    'beer_servings': 92,
    'spirit_servings': 0,
    'wine_servings': 233,
    'total_litres_of_pure_alcohol': 5.8
  },
  {
    'country': 'Eritrea',
    'beer_servings': 18,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.5
  },
  {
    'country': 'Estonia',
    'beer_servings': 224,
    'spirit_servings': 194,
    'wine_servings': 59,
    'total_litres_of_pure_alcohol': 9.5
  },
  {
    'country': 'Ethiopia',
    'beer_servings': 20,
    'spirit_servings': 3,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.7
  },
  {
    'country': 'Fiji',
    'beer_servings': 77,
    'spirit_servings': 35,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 2
  },
  {
    'country': 'Finland',
    'beer_servings': 263,
    'spirit_servings': 133,
    'wine_servings': 97,
    'total_litres_of_pure_alcohol': 10
  },
  {
    'country': 'France',
    'beer_servings': 127,
    'spirit_servings': 151,
    'wine_servings': 370,
    'total_litres_of_pure_alcohol': 11.8
  },
  {
    'country': 'Gabon',
    'beer_servings': 347,
    'spirit_servings': 98,
    'wine_servings': 59,
    'total_litres_of_pure_alcohol': 8.9
  },
  {
    'country': 'Gambia',
    'beer_servings': 8,
    'spirit_servings': 0,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 2.4
  },
  {
    'country': 'Georgia',
    'beer_servings': 52,
    'spirit_servings': 100,
    'wine_servings': 149,
    'total_litres_of_pure_alcohol': 5.4
  },
  {
    'country': 'Germany',
    'beer_servings': 346,
    'spirit_servings': 117,
    'wine_servings': 175,
    'total_litres_of_pure_alcohol': 11.3
  },
  {
    'country': 'Ghana',
    'beer_servings': 31,
    'spirit_servings': 3,
    'wine_servings': 10,
    'total_litres_of_pure_alcohol': 1.8
  },
  {
    'country': 'Greece',
    'beer_servings': 133,
    'spirit_servings': 112,
    'wine_servings': 218,
    'total_litres_of_pure_alcohol': 8.3
  },
  {
    'country': 'Grenada',
    'beer_servings': 199,
    'spirit_servings': 438,
    'wine_servings': 28,
    'total_litres_of_pure_alcohol': 11.9
  },
  {
    'country': 'Guatemala',
    'beer_servings': 53,
    'spirit_servings': 69,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 2.2
  },
  {
    'country': 'Guinea',
    'beer_servings': 9,
    'spirit_servings': 0,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 0.2
  },
  {
    'country': 'Guinea-Bissau',
    'beer_servings': 28,
    'spirit_servings': 31,
    'wine_servings': 21,
    'total_litres_of_pure_alcohol': 2.5
  },
  {
    'country': 'Guyana',
    'beer_servings': 93,
    'spirit_servings': 302,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 7.1
  },
  {
    'country': 'Haiti',
    'beer_servings': 1,
    'spirit_servings': 326,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 5.9
  },
  {
    'country': 'Honduras',
    'beer_servings': 69,
    'spirit_servings': 98,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 3
  },
  {
    'country': 'Hungary',
    'beer_servings': 234,
    'spirit_servings': 215,
    'wine_servings': 185,
    'total_litres_of_pure_alcohol': 11.3
  },
  {
    'country': 'Iceland',
    'beer_servings': 233,
    'spirit_servings': 61,
    'wine_servings': 78,
    'total_litres_of_pure_alcohol': 6.6
  },
  {
    'country': 'India',
    'beer_servings': 9,
    'spirit_servings': 114,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 2.2
  },
  {
    'country': 'Indonesia',
    'beer_servings': 5,
    'spirit_servings': 1,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.1
  },
  {
    'country': 'Iran',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Iraq',
    'beer_servings': 9,
    'spirit_servings': 3,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.2
  },
  {
    'country': 'Ireland',
    'beer_servings': 313,
    'spirit_servings': 118,
    'wine_servings': 165,
    'total_litres_of_pure_alcohol': 11.4
  },
  {
    'country': 'Israel',
    'beer_servings': 63,
    'spirit_servings': 69,
    'wine_servings': 9,
    'total_litres_of_pure_alcohol': 2.5
  },
  {
    'country': 'Italy',
    'beer_servings': 85,
    'spirit_servings': 42,
    'wine_servings': 237,
    'total_litres_of_pure_alcohol': 6.5
  },
  {
    'country': 'Jamaica',
    'beer_servings': 82,
    'spirit_servings': 97,
    'wine_servings': 9,
    'total_litres_of_pure_alcohol': 3.4
  },
  {
    'country': 'Japan',
    'beer_servings': 77,
    'spirit_servings': 202,
    'wine_servings': 16,
    'total_litres_of_pure_alcohol': 7
  },
  {
    'country': 'Jordan',
    'beer_servings': 6,
    'spirit_servings': 21,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 0.5
  },
  {
    'country': 'Kazakhstan',
    'beer_servings': 124,
    'spirit_servings': 246,
    'wine_servings': 12,
    'total_litres_of_pure_alcohol': 6.8
  },
  {
    'country': 'Kenya',
    'beer_servings': 58,
    'spirit_servings': 22,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 1.8
  },
  {
    'country': 'Kiribati',
    'beer_servings': 21,
    'spirit_servings': 34,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 1
  },
  {
    'country': 'Kuwait',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Kyrgyzstan',
    'beer_servings': 31,
    'spirit_servings': 97,
    'wine_servings': 6,
    'total_litres_of_pure_alcohol': 2.4
  },
  {
    'country': 'Laos',
    'beer_servings': 62,
    'spirit_servings': 0,
    'wine_servings': 123,
    'total_litres_of_pure_alcohol': 6.2
  },
  {
    'country': 'Latvia',
    'beer_servings': 281,
    'spirit_servings': 216,
    'wine_servings': 62,
    'total_litres_of_pure_alcohol': 10.5
  },
  {
    'country': 'Lebanon',
    'beer_servings': 20,
    'spirit_servings': 55,
    'wine_servings': 31,
    'total_litres_of_pure_alcohol': 1.9
  },
  {
    'country': 'Lesotho',
    'beer_servings': 82,
    'spirit_servings': 29,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 2.8
  },
  {
    'country': 'Liberia',
    'beer_servings': 19,
    'spirit_servings': 152,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 3.1
  },
  {
    'country': 'Libya',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Lithuania',
    'beer_servings': 343,
    'spirit_servings': 244,
    'wine_servings': 56,
    'total_litres_of_pure_alcohol': 12.9
  },
  {
    'country': 'Luxembourg',
    'beer_servings': 236,
    'spirit_servings': 133,
    'wine_servings': 271,
    'total_litres_of_pure_alcohol': 11.4
  },
  {
    'country': 'Madagascar',
    'beer_servings': 26,
    'spirit_servings': 15,
    'wine_servings': 4,
    'total_litres_of_pure_alcohol': 0.8
  },
  {
    'country': 'Malawi',
    'beer_servings': 8,
    'spirit_servings': 11,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 1.5
  },
  {
    'country': 'Malaysia',
    'beer_servings': 13,
    'spirit_servings': 4,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.3
  },
  {
    'country': 'Maldives',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Mali',
    'beer_servings': 5,
    'spirit_servings': 1,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 0.6
  },
  {
    'country': 'Malta',
    'beer_servings': 149,
    'spirit_servings': 100,
    'wine_servings': 120,
    'total_litres_of_pure_alcohol': 6.6
  },
  {
    'country': 'Marshall Islands',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Mauritania',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Mauritius',
    'beer_servings': 98,
    'spirit_servings': 31,
    'wine_servings': 18,
    'total_litres_of_pure_alcohol': 2.6
  },
  {
    'country': 'Mexico',
    'beer_servings': 238,
    'spirit_servings': 68,
    'wine_servings': 5,
    'total_litres_of_pure_alcohol': 5.5
  },
  {
    'country': 'Micronesia',
    'beer_servings': 62,
    'spirit_servings': 50,
    'wine_servings': 18,
    'total_litres_of_pure_alcohol': 2.3
  },
  {
    'country': 'Monaco',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Mongolia',
    'beer_servings': 77,
    'spirit_servings': 189,
    'wine_servings': 8,
    'total_litres_of_pure_alcohol': 4.9
  },
  {
    'country': 'Montenegro',
    'beer_servings': 31,
    'spirit_servings': 114,
    'wine_servings': 128,
    'total_litres_of_pure_alcohol': 4.9
  },
  {
    'country': 'Morocco',
    'beer_servings': 12,
    'spirit_servings': 6,
    'wine_servings': 10,
    'total_litres_of_pure_alcohol': 0.5
  },
  {
    'country': 'Mozambique',
    'beer_servings': 47,
    'spirit_servings': 18,
    'wine_servings': 5,
    'total_litres_of_pure_alcohol': 1.3
  },
  {
    'country': 'Myanmar',
    'beer_servings': 5,
    'spirit_servings': 1,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.1
  },
  {
    'country': 'Namibia',
    'beer_servings': 376,
    'spirit_servings': 3,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 6.8
  },
  {
    'country': 'Nauru',
    'beer_servings': 49,
    'spirit_servings': 0,
    'wine_servings': 8,
    'total_litres_of_pure_alcohol': 1
  },
  {
    'country': 'Nepal',
    'beer_servings': 5,
    'spirit_servings': 6,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.2
  },
  {
    'country': 'Netherlands',
    'beer_servings': 251,
    'spirit_servings': 88,
    'wine_servings': 190,
    'total_litres_of_pure_alcohol': 9.4
  },
  {
    'country': 'New Zealand',
    'beer_servings': 203,
    'spirit_servings': 79,
    'wine_servings': 175,
    'total_litres_of_pure_alcohol': 9.3
  },
  {
    'country': 'Nicaragua',
    'beer_servings': 78,
    'spirit_servings': 118,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 3.5
  },
  {
    'country': 'Niger',
    'beer_servings': 3,
    'spirit_servings': 2,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 0.1
  },
  {
    'country': 'Nigeria',
    'beer_servings': 42,
    'spirit_servings': 5,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 9.1
  },
  {
    'country': 'Niue',
    'beer_servings': 188,
    'spirit_servings': 200,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 7
  },
  {
    'country': 'Norway',
    'beer_servings': 169,
    'spirit_servings': 71,
    'wine_servings': 129,
    'total_litres_of_pure_alcohol': 6.7
  },
  {
    'country': 'Oman',
    'beer_servings': 22,
    'spirit_servings': 16,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 0.7
  },
  {
    'country': 'Pakistan',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Palau',
    'beer_servings': 306,
    'spirit_servings': 63,
    'wine_servings': 23,
    'total_litres_of_pure_alcohol': 6.9
  },
  {
    'country': 'Panama',
    'beer_servings': 285,
    'spirit_servings': 104,
    'wine_servings': 18,
    'total_litres_of_pure_alcohol': 7.2
  },
  {
    'country': 'Papua New Guinea',
    'beer_servings': 44,
    'spirit_servings': 39,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 1.5
  },
  {
    'country': 'Paraguay',
    'beer_servings': 213,
    'spirit_servings': 117,
    'wine_servings': 74,
    'total_litres_of_pure_alcohol': 7.3
  },
  {
    'country': 'Peru',
    'beer_servings': 163,
    'spirit_servings': 160,
    'wine_servings': 21,
    'total_litres_of_pure_alcohol': 6.1
  },
  {
    'country': 'Philippines',
    'beer_servings': 71,
    'spirit_servings': 186,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 4.6
  },
  {
    'country': 'Poland',
    'beer_servings': 343,
    'spirit_servings': 215,
    'wine_servings': 56,
    'total_litres_of_pure_alcohol': 10.9
  },
  {
    'country': 'Portugal',
    'beer_servings': 194,
    'spirit_servings': 67,
    'wine_servings': 339,
    'total_litres_of_pure_alcohol': 11
  },
  {
    'country': 'Qatar',
    'beer_servings': 1,
    'spirit_servings': 42,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 0.9
  },
  {
    'country': 'South Korea',
    'beer_servings': 140,
    'spirit_servings': 16,
    'wine_servings': 9,
    'total_litres_of_pure_alcohol': 9.8
  },
  {
    'country': 'Moldova',
    'beer_servings': 109,
    'spirit_servings': 226,
    'wine_servings': 18,
    'total_litres_of_pure_alcohol': 6.3
  },
  {
    'country': 'Romania',
    'beer_servings': 297,
    'spirit_servings': 122,
    'wine_servings': 167,
    'total_litres_of_pure_alcohol': 10.4
  },
  {
    'country': 'Russian Federation',
    'beer_servings': 247,
    'spirit_servings': 326,
    'wine_servings': 73,
    'total_litres_of_pure_alcohol': 11.5
  },
  {
    'country': 'Rwanda',
    'beer_servings': 43,
    'spirit_servings': 2,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 6.8
  },
  {
    'country': 'St. Kitts & Nevis',
    'beer_servings': 194,
    'spirit_servings': 205,
    'wine_servings': 32,
    'total_litres_of_pure_alcohol': 7.7
  },
  {
    'country': 'St. Lucia',
    'beer_servings': 171,
    'spirit_servings': 315,
    'wine_servings': 71,
    'total_litres_of_pure_alcohol': 10.1
  },
  {
    'country': 'St. Vincent & the Grenadines',
    'beer_servings': 120,
    'spirit_servings': 221,
    'wine_servings': 11,
    'total_litres_of_pure_alcohol': 6.3
  },
  {
    'country': 'Samoa',
    'beer_servings': 105,
    'spirit_servings': 18,
    'wine_servings': 24,
    'total_litres_of_pure_alcohol': 2.6
  },
  {
    'country': 'San Marino',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'Sao Tome & Principe',
    'beer_servings': 56,
    'spirit_servings': 38,
    'wine_servings': 140,
    'total_litres_of_pure_alcohol': 4.2
  },
  {
    'country': 'Saudi Arabia',
    'beer_servings': 0,
    'spirit_servings': 5,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.1
  },
  {
    'country': 'Senegal',
    'beer_servings': 9,
    'spirit_servings': 1,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 0.3
  },
  {
    'country': 'Serbia',
    'beer_servings': 283,
    'spirit_servings': 131,
    'wine_servings': 127,
    'total_litres_of_pure_alcohol': 9.6
  },
  {
    'country': 'Seychelles',
    'beer_servings': 157,
    'spirit_servings': 25,
    'wine_servings': 51,
    'total_litres_of_pure_alcohol': 4.1
  },
  {
    'country': 'Sierra Leone',
    'beer_servings': 25,
    'spirit_servings': 3,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 6.7
  },
  {
    'country': 'Singapore',
    'beer_servings': 60,
    'spirit_servings': 12,
    'wine_servings': 11,
    'total_litres_of_pure_alcohol': 1.5
  },
  {
    'country': 'Slovakia',
    'beer_servings': 196,
    'spirit_servings': 293,
    'wine_servings': 116,
    'total_litres_of_pure_alcohol': 11.4
  },
  {
    'country': 'Slovenia',
    'beer_servings': 270,
    'spirit_servings': 51,
    'wine_servings': 276,
    'total_litres_of_pure_alcohol': 10.6
  },
  {
    'country': 'Solomon Islands',
    'beer_servings': 56,
    'spirit_servings': 11,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 1.2
  },
  {
    'country': 'Somalia',
    'beer_servings': 0,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0
  },
  {
    'country': 'South Africa',
    'beer_servings': 225,
    'spirit_servings': 76,
    'wine_servings': 81,
    'total_litres_of_pure_alcohol': 8.2
  },
  {
    'country': 'Spain',
    'beer_servings': 284,
    'spirit_servings': 157,
    'wine_servings': 112,
    'total_litres_of_pure_alcohol': 10
  },
  {
    'country': 'Sri Lanka',
    'beer_servings': 16,
    'spirit_servings': 104,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 2.2
  },
  {
    'country': 'Sudan',
    'beer_servings': 8,
    'spirit_servings': 13,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 1.7
  },
  {
    'country': 'Suriname',
    'beer_servings': 128,
    'spirit_servings': 178,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 5.6
  },
  {
    'country': 'Swaziland',
    'beer_servings': 90,
    'spirit_servings': 2,
    'wine_servings': 2,
    'total_litres_of_pure_alcohol': 4.7
  },
  {
    'country': 'Sweden',
    'beer_servings': 152,
    'spirit_servings': 60,
    'wine_servings': 186,
    'total_litres_of_pure_alcohol': 7.2
  },
  {
    'country': 'Switzerland',
    'beer_servings': 185,
    'spirit_servings': 100,
    'wine_servings': 280,
    'total_litres_of_pure_alcohol': 10.2
  },
  {
    'country': 'Syria',
    'beer_servings': 5,
    'spirit_servings': 35,
    'wine_servings': 16,
    'total_litres_of_pure_alcohol': 1
  },
  {
    'country': 'Tajikistan',
    'beer_servings': 2,
    'spirit_servings': 15,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.3
  },
  {
    'country': 'Thailand',
    'beer_servings': 99,
    'spirit_servings': 258,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 6.4
  },
  {
    'country': 'Macedonia',
    'beer_servings': 106,
    'spirit_servings': 27,
    'wine_servings': 86,
    'total_litres_of_pure_alcohol': 3.9
  },
  {
    'country': 'Timor-Leste',
    'beer_servings': 1,
    'spirit_servings': 1,
    'wine_servings': 4,
    'total_litres_of_pure_alcohol': 0.1
  },
  {
    'country': 'Togo',
    'beer_servings': 36,
    'spirit_servings': 2,
    'wine_servings': 19,
    'total_litres_of_pure_alcohol': 1.3
  },
  {
    'country': 'Tonga',
    'beer_servings': 36,
    'spirit_servings': 21,
    'wine_servings': 5,
    'total_litres_of_pure_alcohol': 1.1
  },
  {
    'country': 'Trinidad & Tobago',
    'beer_servings': 197,
    'spirit_servings': 156,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 6.4
  },
  {
    'country': 'Tunisia',
    'beer_servings': 51,
    'spirit_servings': 3,
    'wine_servings': 20,
    'total_litres_of_pure_alcohol': 1.3
  },
  {
    'country': 'Turkey',
    'beer_servings': 51,
    'spirit_servings': 22,
    'wine_servings': 7,
    'total_litres_of_pure_alcohol': 1.4
  },
  {
    'country': 'Turkmenistan',
    'beer_servings': 19,
    'spirit_servings': 71,
    'wine_servings': 32,
    'total_litres_of_pure_alcohol': 2.2
  },
  {
    'country': 'Tuvalu',
    'beer_servings': 6,
    'spirit_servings': 41,
    'wine_servings': 9,
    'total_litres_of_pure_alcohol': 1
  },
  {
    'country': 'Uganda',
    'beer_servings': 45,
    'spirit_servings': 9,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 8.3
  },
  {
    'country': 'Ukraine',
    'beer_servings': 206,
    'spirit_servings': 237,
    'wine_servings': 45,
    'total_litres_of_pure_alcohol': 8.9
  },
  {
    'country': 'United Arab Emirates',
    'beer_servings': 16,
    'spirit_servings': 135,
    'wine_servings': 5,
    'total_litres_of_pure_alcohol': 2.8
  },
  {
    'country': 'United Kingdom',
    'beer_servings': 219,
    'spirit_servings': 126,
    'wine_servings': 195,
    'total_litres_of_pure_alcohol': 10.4
  },
  {
    'country': 'Tanzania',
    'beer_servings': 36,
    'spirit_servings': 6,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 5.7
  },
  {
    'country': 'USA',
    'beer_servings': 249,
    'spirit_servings': 158,
    'wine_servings': 84,
    'total_litres_of_pure_alcohol': 8.7
  },
  {
    'country': 'Uruguay',
    'beer_servings': 115,
    'spirit_servings': 35,
    'wine_servings': 220,
    'total_litres_of_pure_alcohol': 6.6
  },
  {
    'country': 'Uzbekistan',
    'beer_servings': 25,
    'spirit_servings': 101,
    'wine_servings': 8,
    'total_litres_of_pure_alcohol': 2.4
  },
  {
    'country': 'Vanuatu',
    'beer_servings': 21,
    'spirit_servings': 18,
    'wine_servings': 11,
    'total_litres_of_pure_alcohol': 0.9
  },
  {
    'country': 'Venezuela',
    'beer_servings': 333,
    'spirit_servings': 100,
    'wine_servings': 3,
    'total_litres_of_pure_alcohol': 7.7
  },
  {
    'country': 'Vietnam',
    'beer_servings': 111,
    'spirit_servings': 2,
    'wine_servings': 1,
    'total_litres_of_pure_alcohol': 2
  },
  {
    'country': 'Yemen',
    'beer_servings': 6,
    'spirit_servings': 0,
    'wine_servings': 0,
    'total_litres_of_pure_alcohol': 0.1
  },
  {
    'country': 'Zambia',
    'beer_servings': 32,
    'spirit_servings': 19,
    'wine_servings': 4,
    'total_litres_of_pure_alcohol': 2.5
  },
  {
    'country': 'Zimbabwe',
    'beer_servings': 64,
    'spirit_servings': 18,
    'wine_servings': 4,
    'total_litres_of_pure_alcohol': 4.7
  }
]

export default { data }
