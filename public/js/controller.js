'use strict';

var app = angular.module('formApp');

app.controller('formCtrl', function($scope) {

  $scope.submitUserForm = function(formInvalid) {
    if(formInvalid){
      swal("Oops...", "Please fill out all fields!", "error");
      return;
    } else {
      console.log('username: ', $scope.user.username);
      console.log('password: ', $scope.user.password);
      console.log('passwordCheck: ', $scope.user.passwordCheck);
      console.log('email: ', $scope.user.email);
      console.log('nameOnCard: ', $scope.user.nameOnCard);
      console.log('number: ', $scope.user.number);
      console.log('cvc: ', $scope.user.cvc);
      console.log('expiry: ', $scope.user.expiry);
      console.log('country: ', $scope.country);
      console.log('zipCode: ', $scope.user.zipCode);
    };
  };

// swal("Oops...", "Something went wrong!", "error");
  $scope.passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  $scope.ccRegex = /(\d\s*){14,16}/

  $scope.pwCheck = function() {
    $scope.userForm.passwordCheck.$error.noMatch = passwordCheck($scope.user.passwordCheck);
  }

  var passwordCheck = function(pwc) {
    var pw = $scope.user.password;
    if(pw !== pwc){
      return true;
    }
  }

  $scope.cardChange = function() {
    $scope.userForm.number.$error.luhn = luhnCheck($scope.user.number);
  }

  var luhnCheck = function(sixteenDigitString) {
    var numSum = 0;
    var value;
    for (var i = 0; i < 16; ++i) {
        if (i % 2 == 0) {
            value = 2 * sixteenDigitString[i];
            if (value >= 10) {
                value = (Math.floor(value / 10) + value % 10);
            }
        } else {
            value = +sixteenDigitString[i];
        }
        numSum += value;
    }
    return (numSum % 10 !== 0);
}
  //
  // $scope.expiry = function(val){
  //   var month, year, obj;
  //   if(!val) return true;
  //
  //   obj = Common.parseExpiry(val);
  //
  //   month = obj.month;
  //   year = obj.year;
  //
  //   var currentTime, expiry, prefix;
  //
  //   if (!(month && year)) {
  //     return false;
  //   }
  //
  //   if (!/^\d+$/.test(month)) {
  //     return false;
  //   }
  //
  //   if (!/^\d+$/.test(year)) {
  //     return false;
  //   }
  //
  //   if (parseInt(month, 10) > 12) {
  //     return false;
  //   }
  //
  //   if (year.length === 2) {
  //     prefix = (new Date()).getFullYear();
  //     prefix = prefix.toString().slice(0, 2);
  //     year = prefix + year;
  //   }
  //
  //   expiry = new Date(year, month);
  //   currentTime = new Date();
  //   expiry.setMonth(expiry.getMonth() - 1);
  //   expiry.setMonth(expiry.getMonth() + 1, 1);
  //
  //   return expiry > currentTime;
  // };


  $scope.countries = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, Republic Of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French Part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch Part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
})
