
$(function() {
  var $user = $('#user'),
      $telephone = $('#telephone'),
      $password = $('#password'),
      $code = $('#code'),
      $acquire = $('#acquire'),
      $register = $('#register'),
      i = 6,
      timer;
  var user = false,
      pwd = false,
      tele = false,
      code = false;
  $user.focus(function(){
    console.log('d');
    $('#user-validation-message').html('设置后不可更改，中英文均可，最长14个英文或7个汉字');
  });
  $user.focusout(function(){
    console.log('a');
    var $msg = $('#user-validation-message');
    if($user.val() === ''){
      $msg.html('不能为空!');
      return false;                 
    }
    if(/[^\w\u4e00-\u9fa5]|^\d+$/.test($user.val())){
      $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
      return false;                       
    }
    $msg.html('');
    user = true;
  });
  $telephone.focusout(function(){
    console.log('b');
    var $msg = $('#telephone-validation-message');
    if($telephone.val() === ''){
      $msg.html('不能为空!');
      return false;       
    }
    if(!/^1[3456789]\d{9}$/.test($telephone.val())){
      $msg.html('手机号码格式不正确');
      return false;                  
    }
    $msg.html('');
      tele = true;
  });
  $password.focus(function(){
    $('#password-validation-message').html('长度为8~14个字符，字母/数字以及标点符号至少两种，不允许有中文、空格');            
  });
  $password.focusout(function(){
    var $msg = $('#password-validation-message');
    if($password.val() === ''){
      $msg.html('不能为空!');
      return false;        
    }
    if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/).test($password.val())){
      $msg.html('密码设置不符合要求');
      return false;                     
    }
    $msg.html('');
    pwd = true;              
  })
  $code.focusout(function(){
    var $msg = $('#code-validation-message');
    if($code.val() === ''){
      $msg.html('不能为空!');
      return false;      
    }
    $msg.html('');
    code = true;
  })

  $acquire.click(function(){
    $acquire.attr("disabled",true);
    timer = setInterval(function(){
      i--;
      if(i == 0){
        $acquire.attr("disabled",false);
        clearInterval(timer);
        $acquire.val('获取验证码');
        $('#code-validation-message').html('请求超时，请稍后再试');
        i = 6;
      }else{
        $acquire.val('获取中('+i+'s)');
      }
    },1000)
  });

  $register.click(function(){
    if(user && pwd && tele && code){
      alert('注册成功!');
    }else{
      $user.attr("autofocus",true);
    }
  })
})
