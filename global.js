var BBGlobal = {
  env : 'LOCAL',
};

switch(BBGlobal.env) {
  case 'LIVE':
    BBGlobal.apiUrl = 'http://api.betterbutter.in/';
    BBGlobal.FACEBOOK_APP_ID = '398727833608067';
    BBGlobal.FACEBOOK_APP_SECRET = '40f40c997951774b79b9e1cdd98ca288';
    BBGlobal.CALLBACK_URL = 'http://localhost:3000/login/facebook/callback';
    BBGlobal.S3BUCKET = 'butternode';
    BBGlobal.S3BUCKET_VIDEO = 'butterupload';
    BBGlobal.port_number = 3000;
    BBGlobal.small_pagination_limit = 6;
    BBGlobal.ga_id = 'UA-64824543-1';
    BBGlobal.mixpanel_id = '9782b4b76f73c4fc377c967546913333';
  break;
  case 'DEV':
    BBGlobal.apiUrl = 'http://risky.betterbutter.in/api/';
    BBGlobal.FACEBOOK_APP_ID = '398727833608067';
    BBGlobal.FACEBOOK_APP_SECRET = '40f40c997951774b79b9e1cdd98ca288';
    BBGlobal.CALLBACK_URL = 'http://localhost:3000/login/facebook/callback';
    BBGlobal.S3BUCKET = 'butternode';
    BBGlobal.S3BUCKET_VIDEO = 'butterupload';
    BBGlobal.port_number = 3000;
    BBGlobal.small_pagination_limit = 6;
    BBGlobal.ga_id = 'UA-69660279-1';
    BBGlobal.mixpanel_id = 'f3a73b846f3a15ddc230b31da9bf340f';
  break;
  case 'LOCAL':
    //BBGlobal.apiUrl = 'http://api.betterbutter.in/api/';
    BBGlobal.apiUrl = 'http://risky.betterbutter.in/api/';
    BBGlobal.FACEBOOK_APP_ID = '1667848090145648';
    BBGlobal.FACEBOOK_APP_SECRET = 'b5338c828cf79b9a1300aff24974305d';
    //BBGlobal.CALLBACK_URL = 'http://localhost:3000/login/facebook/callback';
    BBGlobal.CALLBACK_URL = 'http://localhost:3000/users/login/facebook/callback/';
    BBGlobal.S3BUCKET = 'butternode';
    BBGlobal.S3BUCKET_VIDEO = 'butterupload';
    BBGlobal.port_number = 3000;
    BBGlobal.small_pagination_limit = 6;
    BBGlobal.ga_id = 'UA-69660279-1';
    BBGlobal.mixpanel_id = 'f3a73b846f3a15ddc230b31da9bf340f';
  break;
}

module.exports = BBGlobal;
