$(document).ready(function(){jQuery.validator.addMethod("notEqualTo",function(value,element)
{if(value==$('#mobile1').val()&&$('#mobile1').val()!="")
{return!1}
else{return!0}},"");jQuery.validator.addMethod("lessThanBrothers",function(value,element)
{if(value<=$('#no_of_brothers').val())
{return!0}
else{return!1}},"");jQuery.validator.addMethod("lessThanSisters",function(value,element)
{if(value<=$('#no_of_sisters').val())
{return!0}
else{return!1}},"");jQuery.validator.addMethod("selected",function(value,element)
{if(value==0){return!1}
else{return!0}},"This field is required.");jQuery.validator.addMethod("greaterThan",function(value,element)
{var value=parseFloat(value);var smaller=parseFloat($("#part_anual_income_from").val());if(value<smaller)
{return!1}
else{return!0}},"To Salary is must greater than from.");jQuery.validator.addMethod("acceptImgExtension",function(value,element)
{if(value=="")
{return!0}
else{var extension=(value.substring(value.lastIndexOf('.')+1)).toLowerCase();if(extension=='jpg'||extension=='png'||extension=="jpeg"||extension=="gif")
{return!0}
else{return!1}}},"");jQuery.validator.addMethod("acceptDocExtension",function(value,element)
{if(value=="")
{return!0}
else{var extension=(value.substring(value.lastIndexOf('.')+1)).toLowerCase();if(extension=='jpg'||extension=='png'||extension=="jpeg"||extension=="gif")
{return!0}
else{return!1}}},"");jQuery.validator.addMethod("checkUsername",function(value,element)
{var response;var post_url_check_username=baseurl+"user/checkUsernameExist/";$.ajax({type:"POST",url:post_url_check_username,data:{username:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0){response=!1}else{response=!0}});return response},"Username already taken.");jQuery.validator.addMethod("checkEmailExist",function(value,element)
{var response=!1;var post_url_check_email=baseurl+"user/checkEmailExist/";$.ajax({type:"POST",url:post_url_check_email,data:{email:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0){response=!1}else{response=!0}});return response},"Email already taken.");jQuery.validator.addMethod("checkMobileExist",function(value,element)
{var response=!1;var post_url_check_mobile=baseurl+"user/checkMobileExist/";$.ajax({type:"POST",url:post_url_check_mobile,data:{mob:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0){response=!1}else{response=!0}});return response},"Mobile number already registered.");jQuery.validator.addMethod("checkMobileExist2",function(value,element)
{var response=!1;var post_url_check_mobile2=baseurl+"user/checkMobileExist2/";if(value=="")
{response=!0}
else{$.ajax({type:"POST",url:post_url_check_mobile2,data:{mob:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0)
{response=!1}else{response=!0}})}
return response},"Mobile number already registered.");jQuery.validator.addMethod("checkPhoneExist",function(value,element)
{var response=!1;var post_url_check_phone=baseurl+"user/checkPhoneExist/";if(value=="")
{response=!0}
else{$.ajax({type:"POST",url:post_url_check_phone,data:{mob:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0)
{response=!1}else{response=!0}})}
return response},"Phone number already registered.");jQuery.validator.addMethod('checkMobileExist1Same',function(value,element)
{var response=!1;var post_url_check_phone=baseurl+"profile/checkMobileExist1Same/";if(value=="")
{response=!0}
else{$.ajax({type:"POST",url:post_url_check_phone,data:{mob:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0)
{response=!1}else{response=!0}})}
return response},"Mobile number already registered.");jQuery.validator.addMethod('checkMobileExist2Same',function(value,element)
{var response=!1;var post_url_check_mobile2=baseurl+"profile/checkMobileExist2Same/";if(value=="")
{response=!0}
else{$.ajax({type:"POST",url:post_url_check_mobile2,data:{mob:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0)
{response=!1}else{response=!0}})}
return response},"Mobile number already registered.");jQuery.validator.addMethod('checkPhoneExistSame',function(value,element)
{var response=!1;var post_url_check_mobile2=baseurl+"profile/checkPhoneExistSame/";if(value=="")
{response=!0}
else{$.ajax({type:"POST",url:post_url_check_mobile2,data:{mob:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0)
{response=!1}else{response=!0}})}
return response},"Phone number already registered.");jQuery.validator.addMethod('checkDateFormat',function(value,element){var stringPattern=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;if(stringPattern.test(value))
{return!0}
else{return!1}},"Please enter correct date.");jQuery.validator.addMethod('checkWhiteSpaces',function(value,element){var stringPattern=/\s/;if(stringPattern.test(value))
{return!1}
else{return!0}},"Spaces are not allowed in username.");jQuery.validator.addMethod('checkDateDifference',function(value,element){var birthYear=parseInt(value.substring(value.lastIndexOf('/')+1)),dateNow=new Date(),dateDiff=dateNow.getFullYear()-birthYear;if(dateDiff<17)
{return!1}
else{return!0}},"Please enter less than 18 years of current date.");$('#physical_status').prop('disabled',!0);$('#chk_physical_status').click(function()
{if($('#chk_physical_status').prop('checked')==!1)
{$('#physical_status').prop('disabled',!0)}
else{$('#physical_status').prop('disabled',!1)}});jQuery.validator.addMethod("checkEmailExistFranchise",function(value,element)
{var response=!1;var post_url_check_email_franchise=baseurl+"franchise/franchise/checkEmailExist/";$.ajax({type:"POST",url:post_url_check_email_franchise,data:{email:value},dataType:"json",async:!1}).done(function(result){if(result.status==!0){response=!1}else{response=!0}});return response},"Email already taken.")})
