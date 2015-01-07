angular.module('merchello.mocks')
    .factory('settingMock', ['mockHelper', function(mockHelper) {

        function setting() {
            return mockHelper.downCasePropertiesInObjectArray(
            {"CurrencyCode":"USD","NextOrderNumber":1201,"NextInvoiceNumber":1201,"NextShipmentNumber":29,"DateFormat":"dd-MM-yyyy","TimeFormat":"am-pm","UnitSystem":"Imperial","GlobalShippable":false,"GlobalTaxable":false,"GlobalTrackInventory":false,"GlobalShippingIsTaxable":false}
            );
        }

        function allCurrencies() {
            return mockHelper.downCasePropertiesInObjectArray(
                [{"$id":"1","CurrencyCode":"SAR","Symbol":"ر.س.‏","Name":"Saudi Riyal"},{"$id":"2","CurrencyCode":"BGN","Symbol":"лв.","Name":"Bulgarian Lev"},{"$id":"3","CurrencyCode":"EUR","Symbol":"€","Name":"Euro"},{"$id":"4","CurrencyCode":"TWD","Symbol":"NT$","Name":"New Taiwan Dollar"},{"$id":"5","CurrencyCode":"CZK","Symbol":"Kč","Name":"Czech Koruna"},{"$id":"6","CurrencyCode":"DKK","Symbol":"kr.","Name":"Danish Krone"},{"$id":"7","CurrencyCode":"USD","Symbol":"$","Name":"US Dollar"},{"$id":"8","CurrencyCode":"ILS","Symbol":"₪","Name":"Israeli New Shekel"},{"$id":"9","CurrencyCode":"HUF","Symbol":"Ft","Name":"Hungarian Forint"},{"$id":"10","CurrencyCode":"ISK","Symbol":"kr.","Name":"Icelandic Krona"},{"$id":"11","CurrencyCode":"JPY","Symbol":"¥","Name":"Japanese Yen"},{"$id":"12","CurrencyCode":"KRW","Symbol":"₩","Name":"Korean Won"},{"$id":"13","CurrencyCode":"NOK","Symbol":"kr","Name":"Norwegian Krone"},{"$id":"14","CurrencyCode":"PLN","Symbol":"zł","Name":"Polish Zloty"},{"$id":"15","CurrencyCode":"BRL","Symbol":"R$","Name":"Real"},{"$id":"16","CurrencyCode":"CHF","Symbol":"fr.","Name":"Swiss Franc"},{"$id":"17","CurrencyCode":"RON","Symbol":"lei","Name":"Romanian Leu"},{"$id":"18","CurrencyCode":"RUB","Symbol":"₽","Name":"Russian Ruble"},{"$id":"19","CurrencyCode":"HRK","Symbol":"kn","Name":"Croatian Kuna"},{"$id":"20","CurrencyCode":"ALL","Symbol":"Lek","Name":"Albanian Lek"},{"$id":"21","CurrencyCode":"SEK","Symbol":"kr","Name":"Swedish Krona"},{"$id":"22","CurrencyCode":"THB","Symbol":"฿","Name":"Thai Baht"},{"$id":"23","CurrencyCode":"TRY","Symbol":"₺","Name":"Turkish Lira"},{"$id":"24","CurrencyCode":"PKR","Symbol":"Rs","Name":"Pakistan Rupee"},{"$id":"25","CurrencyCode":"IDR","Symbol":"Rp","Name":"Indonesian Rupiah"},{"$id":"26","CurrencyCode":"UAH","Symbol":"₴","Name":"Ukrainian Grivna"},{"$id":"27","CurrencyCode":"BYR","Symbol":"р.","Name":"Belarusian Ruble"},{"$id":"28","CurrencyCode":"LTL","Symbol":"Lt","Name":"Lithuanian Litas"},{"$id":"29","CurrencyCode":"TJS","Symbol":"т.р.","Name":"Ruble"},{"$id":"30","CurrencyCode":"IRR","Symbol":"ريال","Name":"Iranian Rial"},{"$id":"31","CurrencyCode":"VND","Symbol":"₫","Name":"Vietnamese Dong"},{"$id":"32","CurrencyCode":"AMD","Symbol":"դր.","Name":"Armenian Dram"},{"$id":"33","CurrencyCode":"AZN","Symbol":"man.","Name":"Azerbaijanian Manat"},{"$id":"34","CurrencyCode":"MKD","Symbol":"ден.","Name":"Macedonian Denar"},{"$id":"35","CurrencyCode":"ZAR","Symbol":"R","Name":"South African Rand"},{"$id":"36","CurrencyCode":"GEL","Symbol":"Lari","Name":"Lari"},{"$id":"37","CurrencyCode":"INR","Symbol":"₹","Name":"Indian Rupee"},{"$id":"38","CurrencyCode":"MYR","Symbol":"RM","Name":"Malaysian Ringgit"},{"$id":"39","CurrencyCode":"KZT","Symbol":"Т","Name":"Tenge"},{"$id":"40","CurrencyCode":"KGS","Symbol":"сом","Name":"som"},{"$id":"41","CurrencyCode":"KES","Symbol":"S","Name":"Kenyan Shilling"},{"$id":"42","CurrencyCode":"TMT","Symbol":"m.","Name":"Turkmen manat"},{"$id":"43","CurrencyCode":"UZS","Symbol":"so'm","Name":"Uzbekistan Som"},{"$id":"44","CurrencyCode":"MNT","Symbol":"₮","Name":"Tugrik"},{"$id":"45","CurrencyCode":"CNY","Symbol":"¥","Name":"PRC Renminbi"},{"$id":"46","CurrencyCode":"GBP","Symbol":"£","Name":"UK Pound Sterling"},{"$id":"47","CurrencyCode":"KHR","Symbol":"៛","Name":"Riel"},{"$id":"48","CurrencyCode":"LAK","Symbol":"₭","Name":"Kip"},{"$id":"49","CurrencyCode":"SYP","Symbol":"ل.س.‏","Name":"Syrian Pound"},{"$id":"50","CurrencyCode":"LKR","Symbol":"රු.","Name":"Sri Lanka Rupee"},{"$id":"51","CurrencyCode":"CAD","Symbol":"$","Name":"Canadian Dollar"},{"$id":"52","CurrencyCode":"ETB","Symbol":"ETB","Name":"Ethiopian Birr"},{"$id":"53","CurrencyCode":"NPR","Symbol":"रु","Name":"Nepalese Rupees"},{"$id":"54","CurrencyCode":"AFN","Symbol":"؋","Name":"Afghani"},{"$id":"55","CurrencyCode":"PHP","Symbol":"PhP","Name":"Philippine Peso"},{"$id":"56","CurrencyCode":"MVR","Symbol":"ރ.","Name":"Rufiyaa"},{"$id":"57","CurrencyCode":"NIO","Symbol":"N","Name":"Nigerian Naira"},{"$id":"58","CurrencyCode":"BOB","Symbol":"$b","Name":"Boliviano"},{"$id":"59","CurrencyCode":"CLP","Symbol":"$","Name":"Chilean Peso"},{"$id":"60","CurrencyCode":"NZD","Symbol":"$","Name":"New Zealand Dollar"},{"$id":"61","CurrencyCode":"GTQ","Symbol":"Q","Name":"Guatemalan Quetzal"},{"$id":"62","CurrencyCode":"RWF","Symbol":"RWF","Name":"Rwandan Franc"},{"$id":"63","CurrencyCode":"XOF","Symbol":"XOF","Name":"XOF Senegal"},{"$id":"64","CurrencyCode":"IQD","Symbol":"د.ع.‏","Name":"Iraqi Dinar"},{"$id":"65","CurrencyCode":"MXN","Symbol":"$","Name":"Mexican Peso"},{"$id":"66","CurrencyCode":"CSD","Symbol":"Din.","Name":"Serbian Dinar"},{"$id":"67","CurrencyCode":"BND","Symbol":"$","Name":"Brunei Dollar"},{"$id":"68","CurrencyCode":"BDT","Symbol":"৳","Name":"Bangladeshi Taka"},{"$id":"69","CurrencyCode":"DZD","Symbol":"DZD","Name":"Algerian Dinar"},{"$id":"70","CurrencyCode":"EGP","Symbol":"ج.م.‏","Name":"Egyptian Pound"},{"$id":"71","CurrencyCode":"HKD","Symbol":"HK$","Name":"Hong Kong Dollar"},{"$id":"72","CurrencyCode":"AUD","Symbol":"$","Name":"Australian Dollar"},{"$id":"73","CurrencyCode":"PEN","Symbol":"S/.","Name":"Peruvian Nuevo Sol"},{"$id":"74","CurrencyCode":"LYD","Symbol":"د.ل.‏","Name":"Libyan Dinar"},{"$id":"75","CurrencyCode":"SGD","Symbol":"$","Name":"Singapore Dollar"},{"$id":"76","CurrencyCode":"BAM","Symbol":"KM","Name":"Convertible Marks"},{"$id":"77","CurrencyCode":"MOP","Symbol":"MOP","Name":"Macao Pataca"},{"$id":"78","CurrencyCode":"CRC","Symbol":"₡","Name":"Costa Rican Colon"},{"$id":"79","CurrencyCode":"MAD","Symbol":"د.م.‏","Name":"Moroccan Dirham"},{"$id":"80","CurrencyCode":"PAB","Symbol":"B/.","Name":"Panamanian Balboa"},{"$id":"81","CurrencyCode":"TND","Symbol":"د.ت.‏","Name":"Tunisian Dinar"},{"$id":"82","CurrencyCode":"DOP","Symbol":"RD$","Name":"Dominican Peso"},{"$id":"83","CurrencyCode":"OMR","Symbol":"ر.ع.‏","Name":"Omani Rial"},{"$id":"84","CurrencyCode":"JMD","Symbol":"J$","Name":"Jamaican Dollar"},{"$id":"85","CurrencyCode":"VEF","Symbol":"Bs. F.","Name":"Venezuelan Bolivar"},{"$id":"86","CurrencyCode":"YER","Symbol":"ر.ي.‏","Name":"Yemeni Rial"},{"$id":"87","CurrencyCode":"COP","Symbol":"$","Name":"Colombian Peso"},{"$id":"88","CurrencyCode":"RSD","Symbol":"Din.","Name":"Serbian Dinar"},{"$id":"89","CurrencyCode":"BZD","Symbol":"BZ$","Name":"Belize Dollar"},{"$id":"90","CurrencyCode":"JOD","Symbol":"د.ا.‏","Name":"Jordanian Dinar"},{"$id":"91","CurrencyCode":"TTD","Symbol":"TT$","Name":"Trinidad Dollar"},{"$id":"92","CurrencyCode":"ARS","Symbol":"$","Name":"Argentine Peso"},{"$id":"93","CurrencyCode":"LBP","Symbol":"ل.ل.‏","Name":"Lebanese Pound"},{"$id":"94","CurrencyCode":"ZWL","Symbol":"Z$","Name":"Zimbabwe Dollar"},{"$id":"95","CurrencyCode":"KWD","Symbol":"د.ك.‏","Name":"Kuwaiti Dinar"},{"$id":"96","CurrencyCode":"AED","Symbol":"د.إ.‏","Name":"UAE Dirham"},{"$id":"97","CurrencyCode":"UYU","Symbol":"$U","Name":"Peso Uruguayo"},{"$id":"98","CurrencyCode":"BHD","Symbol":"د.ب.‏","Name":"Bahraini Dinar"},{"$id":"99","CurrencyCode":"PYG","Symbol":"Gs","Name":"Paraguay Guarani"},{"$id":"100","CurrencyCode":"QAR","Symbol":"ر.ق.‏","Name":"Qatari Rial"},{"$id":"101","CurrencyCode":"HNL","Symbol":"L.","Name":"Honduran Lempira"}]
            );
        }

        function usdCurrency() {
            return mockHelper.downCaseProperties({"$id":"7","CurrencyCode":"USD","Symbol":"$","Name":"US Dollar"});
        }

        function allCountries() {
            return mockHelper.downCasePropertiesInObjectArray(
                [{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SA","Name":"Saudi Arabia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BG","Name":"Bulgaria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ES","Name":"Spain","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TW","Name":"Taiwan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CZ","Name":"Czech Republic","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"DK","Name":"Denmark","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"DE","Name":"Germany","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GR","Name":"Greece","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"US","Name":"United States","ProvinceLabel":"Provinces","Provinces":[{"Name":"Alabama","Code":"AL"},{"Name":"Alaska","Code":"AK"},{"Name":"Arizona","Code":"AZ"},{"Name":"Arkansas","Code":"AR"},{"Name":"California","Code":"CA"},{"Name":"Colorado","Code":"CO"},{"Name":"Connecticut","Code":"CT"},{"Name":"Delaware","Code":"DE"},{"Name":"Florida","Code":"FL"},{"Name":"Georgia","Code":"GA"},{"Name":"Hawaii","Code":"HI"},{"Name":"Idaho","Code":"ID"},{"Name":"Illinois","Code":"IL"},{"Name":"Indiana","Code":"IN"},{"Name":"Iowa","Code":"IA"},{"Name":"Kansas","Code":"KS"},{"Name":"Kentucky","Code":"KY"},{"Name":"Louisiana","Code":"LA"},{"Name":"Maine","Code":"ME"},{"Name":"Maryland","Code":"MD"},{"Name":"Massachusetts","Code":"MA"},{"Name":"Michigan","Code":"MI"},{"Name":"Minnesota","Code":"MN"},{"Name":"Mississippi","Code":"MS"},{"Name":"Missouri","Code":"MO"},{"Name":"Montana","Code":"MT"},{"Name":"Nebraska","Code":"NE"},{"Name":"Nevada","Code":"NV"},{"Name":"New Hampshire","Code":"NH"},{"Name":"New Jersey","Code":"NJ"},{"Name":"New Mexico","Code":"NM"},{"Name":"New York","Code":"NY"},{"Name":"North Carolina","Code":"NC"},{"Name":"North Dakota","Code":"ND"},{"Name":"Ohio","Code":"OH"},{"Name":"Oklahoma","Code":"OK"},{"Name":"Oregon","Code":"OR"},{"Name":"Pennsylvania","Code":"PA"},{"Name":"Rhode Island","Code":"RI"},{"Name":"South Carolina","Code":"SC"},{"Name":"South Dakota","Code":"SD"},{"Name":"Tennessee","Code":"TN"},{"Name":"Texas","Code":"TX"},{"Name":"Utah","Code":"UT"},{"Name":"Vermont","Code":"VT"},{"Name":"Virginia","Code":"VA"},{"Name":"Washington","Code":"WA"},{"Name":"West Virginia","Code":"WV"},{"Name":"Wisconsin","Code":"WI"},{"Name":"Wyoming","Code":"WY"},{"Name":"American Samoa","Code":"AS"},{"Name":"District of Columbia","Code":"DC"},{"Name":"Federated States of Micronesia","Code":"FM"},{"Name":"Guam","Code":"GU"},{"Name":"Marshall Islands","Code":"MH"},{"Name":"Northern Mariana Islands","Code":"MP"},{"Name":"Palau","Code":"PW"},{"Name":"Puerto Rico","Code":"PR"},{"Name":"Virgin Islands","Code":"VI"},{"Name":"Armed Forces - Africa, Canada, Europe","Code":"AE"},{"Name":"Armed Forces Americas","Code":"AA"},{"Name":"Armed Forces Pacific","Code":"AP"}]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"FI","Name":"Finland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"FR","Name":"France","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IL","Name":"Israel","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"HU","Name":"Hungary","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IS","Name":"Iceland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IT","Name":"Italy","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"JP","Name":"Japan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KR","Name":"Korea","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NL","Name":"Netherlands","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NO","Name":"Norway","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PL","Name":"Poland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BR","Name":"Brazil","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CH","Name":"Switzerland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"RO","Name":"Romania","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"RU","Name":"Russia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"HR","Name":"Croatia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SK","Name":"Slovakia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AL","Name":"Albania","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SE","Name":"Sweden","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TH","Name":"Thailand","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TR","Name":"Turkey","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PK","Name":"Islamic Republic of Pakistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ID","Name":"Indonesia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"UA","Name":"Ukraine","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BY","Name":"Belarus","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SI","Name":"Slovenia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"EE","Name":"Estonia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LV","Name":"Latvia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LT","Name":"Lithuania","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TJ","Name":"Tajikistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IR","Name":"Iran","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"VN","Name":"Vietnam","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AM","Name":"Armenia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AZ","Name":"Azerbaijan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MK","Name":"Macedonia (FYROM)","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ZA","Name":"South Africa","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GE","Name":"Georgia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"FO","Name":"Faroe Islands","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IN","Name":"India","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MT","Name":"Malta","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MY","Name":"Malaysia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KZ","Name":"Kazakhstan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KG","Name":"Kyrgyzstan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KE","Name":"Kenya","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TM","Name":"Turkmenistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"UZ","Name":"Uzbekistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MN","Name":"Mongolia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CN","Name":"People's Republic of China","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GB","Name":"United Kingdom","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KH","Name":"Cambodia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LA","Name":"Lao P.D.R.","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SY","Name":"Syria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LK","Name":"Sri Lanka","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CA","Name":"Canada","ProvinceLabel":"Provinces","Provinces":[{"Name":"Alberta","Code":"AB"},{"Name":"British Columbia","Code":"BC"},{"Name":"Manitoba","Code":"MB"},{"Name":"New Brunswick","Code":"NB"},{"Name":"Newfoundland and Labrador","Code":"NL"},{"Name":"Northwest Territories","Code":"NT"},{"Name":"Nova Scotia","Code":"NS"},{"Name":"Nunavut","Code":"NU"},{"Name":"Ontario","Code":"ON"},{"Name":"Prince Edward Island","Code":"PE"},{"Name":"Quebec","Code":"QC"},{"Name":"Saskatchewan","Code":"SK"},{"Name":"Yukon","Code":"YT"}]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ET","Name":"Ethiopia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NP","Name":"Nepal","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AF","Name":"Afghanistan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PH","Name":"Republic of the Philippines","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MV","Name":"Maldives","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NG","Name":"Nigeria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BO","Name":"Bolivia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LU","Name":"Luxembourg","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GL","Name":"Greenland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CL","Name":"Chile","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NZ","Name":"New Zealand","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"GT","Name":"Guatemala","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"RW","Name":"Rwanda","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SN","Name":"Senegal","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IQ","Name":"Iraq","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MX","Name":"Mexico","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BE","Name":"Belgium","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PT","Name":"Portugal","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CS","Name":"Serbia and Montenegro (Former)","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"IE","Name":"Ireland","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BN","Name":"Brunei Darussalam","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BD","Name":"Bangladesh","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"DZ","Name":"Algeria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"EC","Name":"Ecuador","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"EG","Name":"Egypt","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"HK","Name":"Hong Kong S.A.R.","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AT","Name":"Austria","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AU","Name":"Australia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PE","Name":"Peru","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LY","Name":"Libya","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SG","Name":"Singapore","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BA","Name":"Bosnia and Herzegovina","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MO","Name":"Macao S.A.R.","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LI","Name":"Liechtenstein","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CR","Name":"Costa Rica","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MA","Name":"Morocco","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PA","Name":"Panama","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"MC","Name":"Principality of Monaco","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TN","Name":"Tunisia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"DO","Name":"Dominican Republic","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"OM","Name":"Oman","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"JM","Name":"Jamaica","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"VE","Name":"Bolivarian Republic of Venezuela","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"YE","Name":"Yemen","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"029","Name":"Caribbean","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"CO","Name":"Colombia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"RS","Name":"Serbia","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BZ","Name":"Belize","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"JO","Name":"Jordan","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"TT","Name":"Trinidad and Tobago","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AR","Name":"Argentina","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ME","Name":"Montenegro","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"LB","Name":"Lebanon","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"ZW","Name":"Zimbabwe","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"KW","Name":"Kuwait","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"AE","Name":"U.A.E.","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"UY","Name":"Uruguay","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"BH","Name":"Bahrain","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PY","Name":"Paraguay","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"QA","Name":"Qatar","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"SV","Name":"El Salvador","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"HN","Name":"Honduras","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"NI","Name":"Nicaragua","ProvinceLabel":"","Provinces":[]},{"Key":"00000000-0000-0000-0000-000000000000","CountryCode":"PR","Name":"Puerto Rico","ProvinceLabel":"","Provinces":[]}]
            );
        }

        return {
            setting: setting,
            allCurrencies: allCurrencies,
            allCountries: allCountries,
            usdCurrency: usdCurrency
        }
    }]);
