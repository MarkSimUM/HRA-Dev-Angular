'use strict';

app.factory('OrgService', ['$http','RESTService',  function ($http, RESTService) {
    var org = {} ;

    org.JSONDataList = ['organizationList','organization']  ; //list of JSON data models
    org.JSONDataName = '';    // selected JSON data model

    org.responseStatus = '';
    org.response = {};

    // set the following using sg.initialize();
    org.DFBaseUrl = '';
    org.restDFApp = '' ;
    org.restHeaders = {};
    org.restHost = '' ;
    org.restRequestURL = '';  // current request
	org.currentAccount = 532;  // 532 for testing

    org.tables = {};
    org.organizationList = {};
    org.organization = {};
    org.tableCalled = '';
	org.gridData = {};
  		 
   
    org.getOrganizationList = function(acctID){
        var _this = this;
        var urlid = org.restHost+'csim6.organization' ; 
        var headers = org.restHeaders;
        //***!!! ORACLE FIELD NAMES ARE CASE SENSITIVE
        // var params = {order:'organizationNAME', limit:'20'} ;
	   //  var filter = {'filter[field][0]':'subtype','filter[operator][0]':'=','filter[value][0]':'Standard Survey'};
      //  var params = filter ;
	    var params = {filter:'ACCOUNT_ID='+acctID ,order:'ORGNAME'} ;
        var dataid = 'record' ;

   
        org.restRequestURL = urlid ;
        RESTService.get(urlid,params,headers).then(function(response) {
           
            org.organizationList =  response.data[dataid];
            org.responseStatus = response.status ;
			org.gridData = new kendo.data.DataSource({
             // data: org.organizationList ;
			  pageSize: 7
             });
            
    	})		
       
    };
    org.getOrganization = function(id){
        var _this = this;
        var urlid = org.restHost+'csim6.organization' ; 
        var headers = org.restHeaders;
        //***!!! ORACLE FIELD NAMES ARE CASE SENSITIVE
        // var params = {order:'organizationNAME', limit:'20'} ;
		 var params = {ids:id} ;
        var dataid = 'record' ;

      //  var filter = {'filter[field][0]':'subtype','filter[operator][0]':'=','filter[value][0]':'Standard Survey'};
      //  var params = filter ;

        org.restRequestURL = urlid ;
        RESTService.get(urlid,params,headers).then(function(response) {
           
            org.organization=  response.data[dataid];
            org.responseStatus = response.status ;
			
            
    	})		
       
    };
    org.initialize = function(baseurl, model, acctID){
        org.DFBaseUrl = baseurl;
        org.restDFApp = model ;
        org.restHeaders = {'X-DreamFactory-Application-Name': org.restDFApp};
        org.restHost = org.DFBaseUrl ;
        org.currentAccount = acctID ;
        org.getOrganizationList(org.currentAccount);

    }

    return org   ;
}]);



app.factory('AccountService', ['$http','RESTService',  function ($http, RESTService) {
    var acct = {} ;

    acct.JSONDataList = ['accountList','account']  ; //list of JSON data models
    acct.JSONDataName = '';    // selected JSON data model

    acct.responseStatus = '';
    acct.response = {};

    // set the following using sg.initialize();
    acct.DFBaseUrl = '';
    acct.restDFApp = '' ;
    acct.restHeaders = {};
    acct.restHost = '' ;
    acct.restRequestURL = '';  // current request

    acct.tables = {};
    acct.accountList = {};
    acct.account = {};
    acct.tableCalled = '';
	acct.gridData = {};
    acct.mainGridOptions = {
    			dataSource: {
                            // data: account.model.accountList,
							//data: response.data[dataid] ,
                            schema: {
                                model: {
                                    fields: {
                                        ACCOUNTNAME: { type: "string" },
                                        ACCOUNTTYPE: { type: "number" },
                                        ISTEXT: { type: "boolean" }
                                    }
                                }
                            },
/*                     serverPaging: true,
                       serverSorting: true
 */                            pageSize: 10
                        },
                sortable: true,
                pageable: true,
				//autoBind: false ,
				// height: 300,
				// selectable: true ,
             
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
    acct.getTables = function(){
        var _this = this;
        _this.tableCalled = 'Yes';
        var urlid = acct.restHost ;
        var headers = acct.restHeaders;
        var params = {} ;
        var dataid = 'record' ;

        //  var filter = {'filter[field][0]':'subtype','filter[operator][0]':'=','filter[value][0]':'Standard Survey'};
        //  var params = filter ;

        acct.restRequestURL = urlid ;
        RESTService.get(urlid,params,headers).then(function(response) {
            acct.tables = response.data ;

            acct.responseStatus = response.status ;
        } );
    };
    acct.getAccountList = function(){
        var _this = this;
        var urlid = acct.restHost+'csim6.account' ; 
        var headers = acct.restHeaders;
        //***!!! ORACLE FIELD NAMES ARE CASE SENSITIVE
        // var params = {order:'ACCOUNTNAME', limit:'20'} ;
		 var params = {order:'ACCOUNTNAME'} ;
        var dataid = 'record' ;

      //  var filter = {'filter[field][0]':'subtype','filter[operator][0]':'=','filter[value][0]':'Standard Survey'};
      //  var params = filter ;

        acct.restRequestURL = urlid ;
        RESTService.get(urlid,params,headers).then(function(response) {
            //acct.response = response ;
            acct.accountList =  response.data[dataid];
            acct.responseStatus = response.status ;
			acct.gridData = new kendo.data.DataSource({
             // data: acct.accountList ;
			  pageSize: 7
             });
			 
			 
            
    	})		
       
    };
    acct.getSurveyPageList= function(){
        var urlid = acct.restHost+acct.surveyID+'/surveypage/';
        var headers = acct.restHeaders;
        var params = {} ;
        var dataid = 'record' ;

        RESTService.get(urlid,params,headers).then(function(response) {
            acct.surveyPageList =  response.data[dataid] ;
            acct.responseStatus = response.status ;

        } );
    };
    acct.getSurveyQuestionList= function(){
        var urlid = acct.restHost+acct.surveyID+'/surveyquestion';
        var headers = acct.restHeaders;
        var params = {} ;
        var dataid = 'record' ;

        RESTService.get(urlid,params,headers).then(function(response) {
            acct.surveyQuestionList =  response.data[dataid] ;
            acct.responseStatus = response.status ;

        } );
    };
    acct.newSurveyPage= function(pageTitle,pageAfter){
        var urlid = acct.restHost+acct.surveyID+'/surveypage' ;
        var headers = acct.restHeaders;
        var data =    {} ;
        var params = {title:pageTitle,after:pageAfter} ;
        //  var dataid = 'data' ;

        RESTService.put(urlid,data,params,headers).then(function(response) {
            acct.surveyPage_New =  response.data;
            acct.responseStatus = response.status ;//status
            //_this.debugResponse(response, 'newSurveyPage: newpage ['+urlid+']');
        } );
    };
    acct.initialize = function(baseurl, model){
        acct.DFBaseUrl = baseurl;
        acct.restDFApp = model ;
        acct.restHeaders = {'X-DreamFactory-Application-Name': acct.restDFApp};
        acct.restHost = acct.DFBaseUrl ;

        acct.getAccountList();

    }

    return acct   ;
}]);



app.factory('DFAuthService', function($http) {
    //"session_id":"sbgnt4tslvdd2m00ud9ntn4hnd7trbtp7d075vr84f141lo2npb1"

    var DFAuthService = {
        async: function(email,password,appname) {
            // $http returns a promise, which has a then function, which also returns a promise
            var urlRequest = 'https://dsp-simonsona2.cloud.dreamfactory.com/rest/user/session/' ;

            var authData = {};
            authData = {"email":email,"password":password,"app_name":appname};
            var promise =
                $http({
                    method  : 'POST',
                    url     : urlRequest ,
                    data    : authData,
//                    params  : paramObj,
                    headers : {"X-DreamFactory-Application-Name":appname}
                }).then(function (response) {
                        // The then function here is an opportunity to modify the response
                        //  console.log(response);
                        // The return value gets picked up by the then in the controller.

                        return response;
                    } , function(error){
                        return(error);
                    }
                );
            // Return the promise to the controller
            return promise;
        }
    };
    return DFAuthService;
});


app.factory('localStorage', function () {
    return {
        get: function (storage_id) {
            return JSON.parse(localStorage.getItem(storage_id) || '[]');
        },

        put: function (storage_id, datamodel) {
            localStorage.setItem(storage_id, JSON.stringify(datamodel));
        }
    };
});

app.directive('itemFocus', function itemFocus($timeout) {
    'use strict';

    return function (scope, elem, attrs) {
        scope.$watch(attrs.itemFocus, function (newVal) {
            if (newVal) {
                $timeout(function () {
                    elem[0].focus();
                }, 0, false);
            }
        });
    };
});
app.directive('keyEscape', function () {
    'use strict';

    var ESCAPE_KEY = 27;

    return function (scope, elem, attrs) {
        elem.bind('keydown', function (event) {
            if (event.keyCode === ESCAPE_KEY) {
                scope.$apply(attrs.keyEscape);
            }
        });
    };
});
app.factory('RESTService', function($http) {
    var RESTService = {
        jsonp: function(url,params,headers) {
            var method = 'JSONP'; //GET, POST
            params.format  = "json";
            params.callback = "JSON_CALLBACK";

            var promise =  $http({
                method  : method
                , url     : url
                , params  : params      //{key:"0c9c1",ip:ipaddress, format:"json",callback:"JSON_CALLBACK"}
                , headers : headers
            }).then(function (response) {
                return response;   //*Returns entire response (data, status, etc.)
            } , function(error){
                return(error);
            } );
            return promise;
        },
        get: function(url,params,headers) {
            var method = 'GET'; //GET, POST, JSONP
            var promise =  $http({
                method  : method
                , url     : url
                , params  : params
                , headers : headers
            }).then(function (response) {
                return response;   //*Returns entire response (data, status, headers, config)
            } , function(error){
                return(error);
            } );
            return promise;
        } ,
        post: function(url,data,params, headers) {
            var method = 'POST'; //GET, POST, JSONP
            var promise =  $http({
                method  : method
                , url     : url
                , data  : data
                , params : params
                , headers : headers
            }).then(function (response) {
                return response;   //*Returns entire response (data, status, etc.)
            } , function(error){
                return(error);
            } );
            return promise;
        }  ,
        put: function(url,data,params, headers) {
            var method = 'PUT'; //GET, POST, JSONP
            var promise =  $http({
                method  : method
                , url     : url
                , data  : data
                , params : params
                , headers : headers
            }).then(function (response) {
                return response;   //*Returns entire response (data, status, etc.)
            } , function(error){
                return(error);
            } );
            return promise;
        } ,
        patch: function(url,data,params, headers) {
            var method = 'PATCH'; //GET, POST, JSONP
            var promise =  $http({
                method  : method
                , url     : url
                , data  : data
                , params : params
                , headers : headers
            }).then(function (response) {
                return response;   //*Returns entire response (data, status, etc.)
            } , function(error){
                return(error);
            } );
            return promise;
        }
    };


    return RESTService;
});

