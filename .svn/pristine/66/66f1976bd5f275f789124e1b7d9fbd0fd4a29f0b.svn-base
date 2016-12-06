
// Make sure to include the `ui.router` module as a dependency
// jsonService is Services.js returns data from data/resume.json
var app = angular.module('HMRCDev',  ['ui.router','ui.bootstrap','ui.utils','kendo.directives','ui.grid']);

var loaded;

app
    //.constant('DSP_URL', 'https://dsp-simonsona2.cloud.dreamfactory.com')
    .constant('DSP_URL', 'http://localhost:88/rest/HMRCDevDB/')
    .constant('DSP_API_KEY', 'HMRCDev')
    .constant('DSP_API_KEY2', 'HMRCDev')
    .config(['$httpProvider', 'DSP_API_KEY', 'DSP_API_KEY2',
     function($httpProvider, DSP_API_KEY, DSP_API_KEY2) {

        $httpProvider.defaults.headers.common['X-DreamFactory-Application-Name'] = DSP_API_KEY2;
    }])

    .run(
                    ['$rootScope',  '$state', '$stateParams','$location','$anchorScroll','RESTService','$http',
            function ($rootScope,   $state,   $stateParams,   $location,  $anchorScroll,  RESTService, $http) {

               // $uiViewScrollProvider,
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $state.current.name = 'home';
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;


//                *** FOR angular-google-analytics
//                $rootScope.$on('$stateChangeSuccess' , function(){
//                    window.ga('send', 'pageview', {page: $state.current.url, title: $state.current.url });
//                });
                $rootScope.gotoTop= function (){
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash('top');
                    // call $anchorScroll()
                    $anchorScroll();
                }
            }])



    .controller('StartupController'
             ,        ['$rootScope','$scope','sharedProperties','$location','$state','$window','RESTService'
             ,function($rootScope,   $scope,  sharedProperties,   $location, $state,  $window, RESTService){
          // this.headerfile = headerfileService.getheaderFile();
        $scope.isShow = true;

         setTimeout(function(){
            //If page content was loaded, set the false to $scope.isShow.
            $scope.isShow = false;
            $scope.$apply();
           },'2000')


            this.debug = false ;
            this.debugmode = 'off';
            this.viewstate = false;
            this.message ='Startup';
            this.debugmsg = 'Off'
            $scope.debugmode ='on';
            $scope.debugmsg = 'msgon'  ;

             //NOT WORKING??
            $scope.$watch("debugmode",
                function(newValue, oldValue){
                  $scope.debugmsg = newValue+': '+oldValue;
//                    alert('hey, debugmode has changed to'+newValue);
                }

            ) ;

        var self = this;
        $scope.$watch(function() {
            return self.debugmode },
            function (is, was)
              {   if (was='off')
                  {this.debugmsg = 'On';
                  }
                  else
                  {
                      this.debugmsg = 'Other';
                  }
              }
         );


        $scope.sharedProperties = sharedProperties;
            $scope.prop1 = 'HeaderMain.html'
            sharedProperties.setProperty($scope.prop1);
            $scope.$watch('sharedProperties.getProperty()', function(newValue) {
                 $scope.prop1 = newValue ;
                 this.headerfile = $scope.prop1;
              //  alert('StartupController this.headerfile: '+     this.headerfile) ;
             });
             $scope.gotoTop= function (){
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('top');
                 // call $anchorScroll()
                 $anchorScroll();
             };


    }])

    .controller('MainController',['$scope','$location','RESTService', function($scope,$location,$state){

        //var DFBaseUrl = 'https://dfvm3.cloudapp.net:443/rest/HMRCDev/';
        var DFBaseUrl = 'http://localhost:88/rest/HMRCDevDB/';
		this.restDFApp = 'HMRCDev';
        this.restHeaders = {'X-DreamFactory-Application-Name': 'HMRCDev'};
        this.restHost = DFBaseUrl;
		
        this.dataList = {'empty':'empty'};
        this.dataSchema = {};
        this.listTables = {};
        this.selectedTable = '';

        this.lookupSampleData = {};
        this.lookupSampleSchema = {};
        this.lookupSampleModel = {};
        this.selectedSampleData = '';

        this.restMethod = 'GET';
      
        this.restPath = '';
        $scope.response = {};
        $scope.responseData = {};
        $scope.responseConfig = {};
        $scope.responseHeaders = {};
        $scope.responseStatus ={};
        $scope.testVar = "HelloWorld";
        var init = function ()
        {
      // alert("hello") ;
         };
         // and fire it after definition
        init();
        //$scope.navigate = function(statename){
        //    $state.go(statename);
        //};
    }]);


app.controller('NavController', ['$scope' , function ($scope) {
    $scope.aMethod = function () {
    };
}]);

app.controller("MyCtrl", function($scope){
    $scope.mainGridOptions = {
        dataSource: {
            type: "odata",
            transport: {
                read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
            },
            pageSize: 5,
            serverPaging: true,
            serverSorting: true
        },
        sortable: true,
        pageable: true,
        dataBound: function() {
            this.expandRow(this.tbody.find("tr.k-master-row").first());
        },
        columns: [{
            field: "FirstName",
            title: "First Name",
            width: "120px"
        },{
            field: "LastName",
            title: "Last Name",
            width: "120px"
        },{
            field: "Country",
            width: "120px"
        },{
            field: "City",
            width: "120px"
        },{
            field: "Title"
        }]
    };

    $scope.detailGridOptions = function(dataItem) {
        return {
            dataSource: {
                type: "odata",
                transport: {
                    read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders"
                },
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true,
                pageSize: 5,
                filter: { field: "EmployeeID", operator: "eq", value: dataItem.EmployeeID }
            },
            scrollable: false,
            sortable: true,
            pageable: true,
            columns: [
                { field: "OrderID", title:"ID", width: "56px" },
                { field: "ShipCountry", title:"Ship Country", width: "110px" },
                { field: "ShipAddress", title:"Ship Address" },
                { field: "ShipName", title: "Ship Name", width: "190px" }
            ]
        };
    };
})  ;
app.service('sharedProperties', function () {
    var property = "HeaderMain.html";
    return {
        getProperty:function () {
            return property;
        },
        setProperty:function (value) {
            property = value;

        }
    };
});

app.filter('pretty', function() {
    return function (input) {
        var temp;
        try {
            temp = angular.fromJson(input);
        }
        catch (e) {
            temp = input;
        }

        return angular.toJson(temp, true);
    };
});
angular.module('HMRCDev')
    .controller('autocomplete', function($scope){
        $scope.countryNames = [
            "Albania",
            "Andorra",
            "Armenia",
            "Austria",
            "Azerbaijan",
            "Belarus",
            "Belgium",
            "Bosnia & Herzegovina",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Georgia",
            "Germany",
            "Greece",
            "Hungary",
            "Iceland",
            "Ireland",
            "Italy",
            "Kosovo",
            "Latvia",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
            "Malta",
            "Moldova",
            "Monaco",
            "Montenegro",
            "Netherlands",
            "Norway",
            "Poland",
            "Portugal",
            "Romania",
            "Russia",
            "San Marino",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Switzerland",
            "Turkey",
            "Ukraine",
            "United Kingdom",
            "Vatican City"
        ];
    })
;

//** Add this code to app.js --->
app.controller('accountController', ['$scope','AccountService','RESTService','uiGridConstants',  function ($scope, AccountService, RESTService, uiGridConstants) {
    account = this;
    account.viewdebug = false;
    account.dataList ={};

    account.model = AccountService ;    //this is persistent factory object
    model = account.model ;
    account.gridOptions = {};
	account.gridView = false ;
 
    //account.model.initialize('https://dfvm3.cloudapp.net:443/rest/HMRCDev/', 'HMRCDev');
     account.model.initialize('http://localhost:88/rest/HMRCDevDB/','HMRCDev');
    // KENDO expects this:
    // {[
    //    {"Id":17,"Name":"Bill"},
    //    {"Id":17,"Name":"Bob"}
    // ]}
	
	
	 

    account.getAccountList = function(){

      // account.dataList  = '{'+account.model.accountList +'}';
         account.accountListDS = new kendo.data.DataSource({
                data: account.model.accountList,
                pageSize: 10
            });
			
		account.gridOptions.data = account.model.accountList ;
       				
    };
   
	account.viewGrid = function(){
		
		account.gridOptions.data = account.model.accountList ;
		account.gridView = true ;
       				
    };
	

    //account.DS1.read();
	account.mainGridOptions = {
    		  schema: {
                                model: {
                                    fields: {
                                        ACCOUNTNAME: { type: "string" },
                                        ACCOUNTTYPE: { type: "number" },
                                        ISTEXT: { type: "boolean" }
                                    }
                                }
                            },	
                //sortable: true,
                pageable: true,
				// autoBind: false ,
	            // selectable: true,
    /*             dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                }, */
                columns: [
				   {
                    field: "ACCOUNTNAME",
                    title: "Account Name",
                    width: "120px"
                    },{
                    field: "ACCOUNTTYPE",
                    title: "Account type",
                    width: "20px"
                    },{
                    field: "ISTEST",
                    width: "20px"
                    }
                 ]
            };
           
    account.getAccountList();
	
	$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
	
	//account.model.accountList ;
  account.gridOptions.enableFiltering = true ;
  account.gridOptions.enableColumnResizing = true ; 
  
 
	
    account.gridOptions.columnDefs = [
      // default
      { name:'Account name', field: 'ACCOUNTNAME' },
      // pre-populated search field
	  { name:'Type', field: 'ACCOUNTTYPE', enableCellEdit:false },
      // pre-populated search field
	  
      { name:'Test Acct', field: 'ISTEST'}
	  ];
      // no filter input
    /*   { field: 'company', enableFiltering: false, filter: {
        noTerm: true,
        condition: function(searchTerm, cellValue) {
          return cellValue.match(/a/);
        }
      }}, */
      // specifies one of the built-in conditions
      // and a placeholder for the input
      /* {
        field: 'email',
        filter: {
          condition: uiGridConstants.filter.ENDS_WITH,
          placeholder: 'ends with'
        }
      }, */
      // custom condition function
/*       {
        field: 'phone',
        filter: {
          condition: function(searchTerm, cellValue) {
            var strippedValue = (cellValue + '').replace(/[^\d]/g, '');
            return strippedValue.indexOf(searchTerm) >= 0;
          }
        }
      },
 */      // multiple filters
   /*    { field: 'age', filters: [
        {
          condition: uiGridConstants.filter.GREATER_THAN,
          placeholder: 'greater than'
        },
        {
          condition: uiGridConstants.filter.LESS_THAN,
          placeholder: 'less than'
        }
      ]} */
  
 /* 
  $http.get('/lib/testdata/500_complex.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
    }); */
}]);


app.controller('orgController', ['$scope','OrgService','RESTService','uiGridConstants',  function ($scope, OrgService, RESTService, uiGridConstants) {
    organization = this;
    organization.viewdebug = false;
    organization.dataList ={};

    organization.model = OrgService ;    //this is persistent factory object
    model = organization.model ;
    organization.gridOptions = {};
	organization.gridView = false ;
	
	organization.currentAccount = 532;
 
    organization.model.initialize('http://localhost:88/rest/HMRCDevDB/','HMRCDev',organization.currentAccount);
    organization.getOrganizationList = function(){

		organization.gridOptions.data = organization.model.organizationList ;
       				
    };
   
	organization.viewGrid = function(){
		
		organization.gridOptions.data = organization.model.organizationList ;
		organization.gridView = true ;
       				
    };
	

    //KENDO GRID
	organization.mainGridOptions = {
    		  schema: {
                      model: {
                           fields: {
                                    ORGNAME: { type: "string" },
                                    ORGFULLNAME: { type: "string" },
									ACCOUNT_ID: { type: "number" },
							        ISSUBGROUP: { type: "boolean" }
                                    }
                                }
                            },	
                //sortable: true,
                pageable: true,
				// autoBind: false ,
	            // selectable: true,
    /*             dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                }, */
                columns: [
				    {
                    field: "ORGNAME",
                    title: "Organization Name",
                    width: "60px"
                    },
					{
                    field: "ORGFULLNAME",
                    title: "Organization Full Name",
                    width: "120px"
                    },
					{
                    field: "organizationTYPE",
                    title: "organization type",
                    width: "20px"
                    },
					{
                    field: "ACCOUNT_ID",
                    title: "ACCOUNT ID",
                    width: "20px"
                    },
					{
                    field: "ISSUBGROUP",
                    width: "20px"
                    }
                 ]
            };
           
    organization.getOrganizationList();
  //** UI-GRID		
	//organization.model.organizationList ;
  organization.gridOptions.enableFiltering = true ;
  organization.gridOptions.enableColumnResizing = true ; 
  
 
	
    organization.gridOptions.columnDefs = [
      // default
      { name:'Organization name', field: 'ORGNAME' , width: 100},
      { name:'Organization Fullname', field: 'ORGFULLNAME' }, 
      { name:'AccountID', field: 'ACCOUNT_ID' }, 
	  { name:'Subgroup', field: 'ISSUBGROUP', enableCellEdit:false },
      { name:'ParentID', field: 'PARENT_ID' }, 
	
	  ];
     
}]);