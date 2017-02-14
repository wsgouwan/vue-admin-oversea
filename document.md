# [1登录 - `POST /www/login`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  登录

+ Request:

		{
			'username' : 'admin',
			'password' : 'admin'
		}

+ Response Succ:
+ 
	     {
		 	"status":"OK",
			"data": (required, int, '0', '返回码'),
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [2登出 - `GET /www/logout`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  登出

+ Request:

		{
		}

+ Response Succ:
+ 
	     {
		 	"status":"OK",
			"data": (required, int, '0', '返回码'),
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '401', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [3查询用户 - `GET /www/users`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  根据用户nick/email/uid查询用户

+ Request:

		{
			"user_type" : 0所有   1正常用户   2机器人
			"user_info" : "xxx" #可以是nick/email/uid
			"page_size" : 1     #请求页的条目数
			"page_num" :  1     #请求第几页（页数从1开始）
		}

+ Response Succ:
+ 

	     {
		 	"status":"OK",
			"data": [
				{
					"uid": 用户id
	        		"nick": (optional, string, '', '姓名'),
	        		"gender": (optional, int, '', '性别'),
	        		"email": (optional, string, '', '邮箱'),
					"birthday":(optional, string, '', '生日'),
					"bio":(optional, string, '', '个性签名'),
					"avatar": (optional, string, '', '头像'),
		    		"height": (optional, float, '', '身高'),
		    		"weight": (optional, float, '', '体重'),
					"timezone":(optional, string, '', '时区'),
					"language"(optional, string, '', '语言'),
					"device"(optional, string, '', '设备类型'),
	        		"os"	(optional, string, '', '操作系统'),
					"os_version"(optional, string, '', '操作系统版本'),
					"user_agent"(optional, string, '', '用户软件版本'),
					"age"  (optional, int, '', '年龄'),
					"weight_type": (optional, int, '', 体重单位“0:kg, 1:lb”),
	        		"height_type": (optional, int, '', 身高单位“0:cm, 1:inch”),
					"back_ground"  (optional, string, '', ‘背景图'),
				},
				{...},
				{...},
			]
			"total_num" : 1000 #查询到的用户总数
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [4禁用用户 - `PUT /www/user/foul/<user_id>`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  根据用户id禁用某个用户

+ Request:

		{
		}

+ Response Succ:
+ 
	     {
		 	"status":"OK",
			"data": (required, int, '0', '返回码'),
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [5更新用户信息 - `PUT /www/user/<user_id>`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  根据用户id修改用户的信息

+ Request:

		{
			"age"    : 30,  	     (optional, int, 用户年龄） 
			"gender" : "female"  	 (optional, string, 性别 "female"/"male") 
			"email"  :  "123@qq.com" (optional, string, 用户邮箱）
			"height" : 165.5         (optional, float, 身高cm)
			"weight" : 75.5          (optional, float, 体重kg)
			"nick"   : "test"        (optional, string, 昵称）
		}

+ Response Succ:
+ 
	     {
		 	"status":"OK",
			"data": (required, int, '0', '返回码'),
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [6拉取用户信息 - `GET /www/user/<user_id>`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  根据用户id拉取用户信息

+ Request:

		{
		}

+ Response Succ:
+ 
	     {
		 	"status":"OK",
			"data": {
				"avatar" : "http://codoon-image.s3.amazonaws.com/2015/06/25/52_01_37_54_160097347_raw.webp",
				"nick" : "codoon",
				"email" : "123@qq.com",
				"gender" : "male",
				"age" : 45,
				"city" : "成都",
				"country" : "中国",
				"height" : 165.5, #单位cm
				"weight" : 65.7   #单位kg
				"user_id" : 123,
				"weight_type": (int, '', 体重单位“0:kg, 1:lb”)
	            "height_type": (int, '', 身高单位“0:cm, 1:inch”)
                "os": (string, 'iPhone', 系统)
                "os_version": (string, '', 系统版本)
                "app_version": (string, '1.8.0', app版本)
	            "new_user": (bool, true/false, 是否是新用户 -- 30天内注册)
                "create_time": (string, '2006-01-02 15:04:05')
                "user_set_not_recommend": (bool, true/false, 用户设置隐私不能推荐)
			}
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}



# [7激活用户 - `PUT /www/user/free/<user_id>`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  根据用户id激活被屏蔽的用户

+ Request:

		{
		}

+ Response Succ:
+ 
	     {
		 	"status":"OK",
			"data": (required, int, '0', '返回码'),
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [8小编上传图片 - `POST /www/user/picture`](#)


+ **变更**(``)

+ Description

		上传图片(现在只支持上传jpeg图片,默认的压缩大小是750)

+ Request:
 + header

	        "x-gmkerl-value": (required, string, '', '缩略类型对应的参数值，单位为像素'), 
	        "x-file-type": (required, string, 'png''jpeg', '图片类型'),

 + body:
			imagedata

+ Response Succ:

	     {
		 "status":"OK",
		  "data":
		        {
		         "raw_jpeg_picture_url":"http://ds1fyyl505bax.cloudfront.net/2015/08/19/8351_07_27_21_992308456_raw.jpeg?1000*500",
		         "com_jpeg_picture_url":"http://ds1fyyl505bax.cloudfront.net/2015/08/19/8351_07_27_21_992308456.jpeg?100*50",
		         },
		   "desc":"\u6210\u529f"
	      }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		
# [小编上传文件 （html） - `POST /www/user/file`](#)


+ **变更**(``)

+ Description

		上传文件

+ Request:
 + header



 + body:
			formfile  key为"file"

+ Response Succ:

	     {
		 "status":"OK",
		  "data":
		        {
		         "file_url":"http://ds1fyyl505bax.cloudfront.net/2015/08/19/8351_07_27_21_992308456_raw.html,
				"hash":""
		         },
		   "desc":"\u6210\u529f"
	      }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}


# [删除blast - `DELETE /www/blast/<blast_id>`](测试链接)
+ Description

		删除blast

+ Request:



 
+ Response Succ:

		{
		"status": (required, string, 'OK', '返回状态 OK/Error'),
		"data": (required, int, '1', 'blast id'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, int, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

# [获取blast详情 - `GET /www/blast/<blast_id>`](测试链接)
+ Description

		获取blast详情

+ Request:

		{
		  “blast_id”: , (required, int64)
		}

 
+ Response Succ:

		{
			"status":'OK',
	 		"data":{
			    'user':{
						"user_id": 用户id
				        "nick": (optional, string, '', '姓名'),
				        "gender": (optional, string, '', '性别'),
				        "email": (optional, string, '', '邮箱'),
						"birthday":(optional, string, '', '生日'),
						"bio":(optional, string, '', '个性签名'),
						"avatar": (optional, string, '', '头像'),
					    "height": (optional, float, '', '身高'),
					    "weight": (optional, float, '', '体重'),
						"timezone":(optional, string, '', '时区'),
						"language"(optional, string, '', '语言'),
						"device"(optional, string, '', '设备类型'),
				        "os"	(optional, string, '', '操作系统'),
						"os_version"(optional, string, '', '操作系统版本'),
				}
		        'blast_id': int64, 
				'praise_num':num
				'is_praised':num  自己是否赞过
				'comment_num':num
				'reblast_num':num
				'is_delete':-1 表示删除   0正常
			    'position':'30.543933,104.072562',
	            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
	            'content':u'哈哈',
	            'address':u'九眼桥',
				'topic':[{'topic_id':int64,'topic_content':string}....]
		        'create_time':'', //创建时间 时间戳

				'reblast':{
			        'user':{
						"user_id": int64 用户id
				        "nick": (optional, string, '', '姓名'),
				        "gender": (optional, string, '', '性别'),
				        "email": (optional, string, '', '邮箱'),
						"birthday":(optional, string, '', '生日'),
						"bio":(optional, string, '', '个性签名'),
						"avatar": (optional, string, '', '头像'),
					    "height": (optional, float, '', '身高'),
					    "weight": (optional, float, '', '体重'),
						"timezone":(optional, string, '', '时区'),
						"language"(optional, string, '', '语言'),
						"device"(optional, string, '', '设备类型'),
				        "os"	(optional, string, '', '操作系统'),
						"os_version"(optional, string, '', '操作系统版本'),
					}
			        'blast_id': int64, 
					'praise_num':num
					'is_praised':num  自己是否赞过
					'comment_num':num
					'reblast_num':num
					'is_delete':-1 表示删除   0正常	
				    'position':'30.543933,104.072562',
		            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
		            'content':u'哈哈',
		            'address':u'九眼桥',			        
					'topic':[{'topic_id':int64,'topic_content':string}....]
			        'create_time':'', //创建时间 时间戳
				}
	         },
			'desc':''
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}


# [获取所有blast - `GET /www/blast?page_num=?&page_size=?&type=?&people_id=?`](测试链接)
+ Description

		获取我的动态

+ Request:
+ 
	＃type  ：0 all, 1 recommend ,-1 埋掉的 ,2 robot,3 public,4 用户feed,5 hot
 
+ Response Succ:


		{
		"status":'OK',
		"data": {
			blasts:[{
			    'user':{
						"user_id": 用户id
				        "nick": (optional, string, '', '姓名'),
				        "gender": (optional, string, '', '性别'),
				        "email": (optional, string, '', '邮箱'),
						"birthday":(optional, string, '', '生日'),
						"bio":(optional, string, '', '个性签名'),
						"avatar": (optional, string, '', '头像'),
					    "height": (optional, float, '', '身高'),
					    "weight": (optional, float, '', '体重'),
						"timezone":(optional, string, '', '时区'),
						"language"(optional, string, '', '语言'),
						"device"(optional, string, '', '设备类型'),
				        "os"	(optional, string, '', '操作系统'),
						"os_version"(optional, string, '', '操作系统版本'),
                        "recommend_tags": [strings], // if (this.length == 0) { It is not the recommend user. }
                        "user_set_not_recommend_feeds": (true/false, 用户是否设置了不要推荐feed)
				}
		        'blast_id': , 
			    'position':'30.543933,104.072562',
	            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
                'pic_link':'url':'http://www.baidu.com',
                'is_top':1,   //0取消置顶  1 置顶
                'top_order':1,   //越大越靠前
	            'content':u'哈哈',
	            'address':u'九眼桥',		        
				'topic':[{'topic_id':int64,'topic_content':string}....]
				'praise_num':num
				'is_praised':num  自己是否赞过
				'is_recommend':num  自己是被推荐的  //0 no ,1 yes,-1 埋掉的
				'is_r':num      0非全教授，1全教授
				'comment_num':num
				'reblast_num':num
		        'create_time':'', //创建时间 时间戳

				'reblast':{
			        'user':{
						"user_id": 用户id
				        "nick": (optional, string, '', '姓名'),
				        "gender": (optional, string, '', '性别'),
				        "email": (optional, string, '', '邮箱'),
						"birthday":(optional, string, '', '生日'),
						"bio":(optional, string, '', '个性签名'),
						"avatar": (optional, string, '', '头像'),
					    "height": (optional, float, '', '身高'),
					    "weight": (optional, float, '', '体重'),
						"timezone":(optional, string, '', '时区'),
						"language"(optional, string, '', '语言'),
						"device"(optional, string, '', '设备类型'),
				        "os"	(optional, string, '', '操作系统'),
						"os_version"(optional, string, '', '操作系统版本'),
					}
			        'blast_id': , 	
				    'position':'30.543933,104.072562',
		            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
		            'content':u'哈哈',
		            'address':u'九眼桥',
			        'topic':[{'topic_id':int64,'topic_content':string}....]
					'praise_num':num
					'is_praised':num  自己是否赞过
					'comment_num':num
					'reblast_num':num
			        'create_time':'', //创建时间 时间戳
				}
	         },
			}],	
			total_count: 1000,
		}		
		"desc":""
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}



# [获取被举报的blast - `GET /www/blast/accused?page_num=?&page_size=?&type=?`](测试链接)
+ Description

		获取我的动态

+ Request:
+ 
	＃type  ：//0:other,1:inappropriate,2:violent,3:porno,4:spam
 
+ Response Succ:


		{
		"status":'OK',
		"data": {
			blasts:[{
			    'user':{
						"user_id": 用户id
				        "nick": (optional, string, '', '姓名'),
				        "gender": (optional, string, '', '性别'),
				        "email": (optional, string, '', '邮箱'),
						"birthday":(optional, string, '', '生日'),
						"bio":(optional, string, '', '个性签名'),
						"avatar": (optional, string, '', '头像'),
					    "height": (optional, float, '', '身高'),
					    "weight": (optional, float, '', '体重'),
						"timezone":(optional, string, '', '时区'),
						"language"(optional, string, '', '语言'),
						"device"(optional, string, '', '设备类型'),
				        "os"	(optional, string, '', '操作系统'),
						"os_version"(optional, string, '', '操作系统版本'),
				}
		        'blast_id': , 
			    'position':'30.543933,104.072562',
	            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
	            'content':u'哈哈',
	            'address':u'九眼桥',		        
				'topic':[{'topic_id':int64,'topic_content':string}....]
				'praise_num':num
				'is_praised':num  自己是否赞过
				'is_recommend':num  自己是被推荐的  //0 no ,1 yes,-1 埋掉的
				'is_r':num      0非全教授，1全教授
				'comment_num':num
				'reblast_num':num
		        'create_time':'', //创建时间 时间戳

				'reblast':{
			        'user':{
						"user_id": 用户id
				        "nick": (optional, string, '', '姓名'),
				        "gender": (optional, string, '', '性别'),
				        "email": (optional, string, '', '邮箱'),
						"birthday":(optional, string, '', '生日'),
						"bio":(optional, string, '', '个性签名'),
						"avatar": (optional, string, '', '头像'),
					    "height": (optional, float, '', '身高'),
					    "weight": (optional, float, '', '体重'),
						"timezone":(optional, string, '', '时区'),
						"language"(optional, string, '', '语言'),
						"device"(optional, string, '', '设备类型'),
				        "os"	(optional, string, '', '操作系统'),
						"os_version"(optional, string, '', '操作系统版本'),
					}
			        'blast_id': , 	
				    'position':'30.543933,104.072562',
		            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
		            'content':u'哈哈',
		            'address':u'九眼桥',
			        'topic':[{'topic_id':int64,'topic_content':string}....]
					'praise_num':num
					'is_praised':num  自己是否赞过
					'comment_num':num
					'reblast_num':num
			        'create_time':'', //创建时间 时间戳
				}
	         },
			}],	
			total_count: 1000,
		}		
		"desc":""
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

# [忽略举报blast - `DELETE /www/blast/accused?blast_id=?&type=?`](测试链接)
+ Description

		忽略举报blast

+ Request:



 
+ Response Succ:

		{
		"status": (required, string, 'OK', '返回状态 OK/Error'),
		"data": (required, int, '1', 'blast id'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, int, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

# [获取评论 - `GET /www/blast/comments?blast_id=?page_num=?&page_size=?`](测试链接)
+ Description

		获取评论

+ Request:

		{
		  “blast_id”: (required, number, 动态ID，0表示拉取本人获得的所有评论，非0表示拉取该条blash的评论)
		  “pagesize”: (optional, number, 获取条数，默认10)
		  “pagenum”: (optional, number, 获取页码，默认1)
		}

 
+ Response Succ:

		{
		 "status":'OK',
		 "data":[{
		         “user_id”:””,    //评论者id
		         “comment_id”:””,  //评论id
		         “blast_id”:””,  //评论id
		         “comment_or_praise”:””,  //评论还是赞 （0为评论,1为赞）
		         “content”:””, //回复内容
		         “create_time”:””, //创建时间 时间戳
		         “nick”:””,   //昵称
		         “avatar”:””, //评论头像
		         “to_user_id”:””, //被回复人user_id,
		         “to_user_nick”:””, //被回复人nick,
		         “blast_pic”:””, //只在请求参数 blast_id为0时（拉取某人获得的所有评论） 才返回,
		         “is_r”:””, //是否机器人,
		       },...
		       ]
		 “desc”:(required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}



# [删除评论 - `DELETE /www/blast/comments?user_id=?comment_id=?`](测试链接)
+ Description

		删除评论

+ Request:

		{
		  "user_id": (required, number, 评论用户Id)
		  "comment_id": (required, number, comment Id)
		}

 
+ Response Succ:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, int, 0),
		"desc": (required, string, '', '返回描述，错误时描述')
		}




# [获取评论 - `GET /www/blast/all_comments?page_num=?&page_size=?`](测试链接)
+ Description

		获取评论

+ Request:

		{
		  “pagesize”: (optional, number, 获取条数，默认10)
		  “pagenum”: (optional, number, 获取页码，默认1)
          "comment_type": (optional, number, 获取评论类型，默认0，H5请求时暂先高为1 //0:所有，1:评论，2:赞)
		}

 
+ Response Succ:

		{
		 "status":'OK',
		 "data":{
         	data: [{
		         “user_id”:””,    //评论者id
		         “comment_id”:””,  //评论id
		         “blast_id”:””,  //评论id
		         “comment_or_praise”:””,  //评论还是赞 （0为评论,1为赞）
		         “content”:””, //回复内容
		         “create_time”:””, //创建时间 时间戳
		         “nick”:””,   //昵称
		         “avatar”:””, //评论头像
		         “to_user_id”:””, //被回复人user_id,
		         “to_user_nick”:””, //被回复人nick,
		         “blast_pic”:””, //只在请求参数 blast_id为0时（拉取某人获得的所有评论） 才返回,
		         “is_r”:””, //该评论是否机器人,
		       },...
		       ],
            total_count: 100, // 总评论数，用于分页
            robot_ids: [123, 456] // 机器人id，判断评论者与被回复人是否是机器人
         },
		 “desc”:(required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}



# [删除一个人的所有blast - `DELETE /www/blast/deleteuserfeed/<user_id>`](测试链接)
+ Description

		删除一个人的所有blast

+ Request:



 
+ Response Succ:

		{
		"status": (required, string, 'OK', '返回状态 OK/Error'),
		"data": (required, int, '1', 'blast id'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, int, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

# [删除一个人的所有comment - `DELETE /www/blast/deleteusercomment/<user_id>`](测试链接)
+ Description

		删除一个人的所有评论

+ Request:



 
+ Response Succ:

		{
		"status": (required, string, 'OK', '返回状态 OK/Error'),
		"data": (required, int, '1', 'blast id'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, int, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}




# [发送邮件 - `POST /www/users/email`](测试链接)
+ Description

		删除一个人的所有评论

+ Request:

	{
			"user_id" : 30,  	     (optional, int64, 用户id） 
			"subject" : "主题"  	     (optional, string, 邮件主题) 
			"body"    : "内容"       (optional, string, 邮件内容）
	}

 
+ Response Succ:

		{
		"status": (required, string, 'OK', '返回状态 OK/Error'),
		"data": (required, int, '1', 'blast id'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, int, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
# [查询新用户 - `GET /www/new_user`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  根据用户nick/email/uid查询用户

+ Request:

		{
			"start_time" : (required, string, "2015-07-06", "开始时间")
			"end_time" : (required, string, "2015-07-06", "结束时间")
			"stat_type" :  (required, string, "day/week/month", "统计类型（天/周/月）")
		}

+ Response Succ:

	     {
		 	"status":"OK",
			"data": [
				 "times": ["2015-07", "2015-08"], //天:［“2015-07-31”。。。］，周:["2015-07-31"。。。]
    			 "value": [1,30]
			]
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
	
# [查询活跃用户 - `GET /www/active_user`](#)

+ **创建**(`Unknown`, `2015-07-06`)
+ **变更**(``)

+ Description

	  根据用户nick/email/uid查询用户

+ Request:

		{
			"start_time" : (required, string, "2015-07-06", "开始时间")
			"end_time" : (required, string, "2015-07-06", "结束时间")
			"stat_type" :  (required, string, "day/week/month", "统计类型（天/周/月）")
		}

+ Response Succ:

	     {
		 	"status":"OK",
			"data": [
				 "times": ["2015-07", "2015-08"], //天:［“2015-07-31”。。。］，周:["2015-07-31"。。。]
    			 "value": [1,30]
			]
		   	"desc":"\u6210\u529f"
	      }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		


# [推荐blast - `POST /www/blast/recommend/<blast_id>`](测试链接)
+ Description

		删除blast

+ Request:

		{
			"oper":num   0:取消  1:推荐 －1:埋
		}

 
+ Response Succ:

		{
		"status": (required, string, 'OK', '返回状态 OK/Error'),
		"data": (required, int, '1', 'blast id'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, int, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}



# [发布feed - `POST /www/blast`](测试链接)
+ Description

		发布feed

+ Request:

		{
		    'position':'30.543933,104.072562', "经度，纬度"
            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_small':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_jpeg':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_jpeg_small':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_link':'url':'http://www.baidu.com',
            'content':u'我喜欢看哈哈',
            'address':u'九眼桥',
            'country_code':string '国家名' ,
            'city':string '城市名',
			'ref_url':u''
			'user_id':  bigint '发布者id'
            'is_top':1,   //
            'top_order':1,   //越大越靠前
		}

 
+ Response Succ:
+ 
	     {
		 "status":"OK",
		  "data":
		        {
		         "blast_id":1432,      int64       //blast id
		         },
		   "desc":"\u6210\u529f"
	      }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
# [更新feed - `POST /www/blast/update`](测试链接)
+ Description

		发布feed

+ Request:

		{
		    ‘id’:int  "feedid"
		    'position':'30.543933,104.072562', "经度，纬度"
            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_small':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_jpeg':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_jpeg_small':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_link':'url':'http://www.baidu.com',
            'content':u'我喜欢看哈哈',
            'address':u'九眼桥',
            'country_code':string '国家名' ,
            'city':string '城市名',
			'ref_url':u''
			‘sort_key’:  热度
			'user_id':  bigint '发布者id'
            'is_top':1,   //
            'top_order':1,   //越大越靠前
		}

 
+ Response Succ:
+ 
	     {
		 "status":"OK",
		  "data":
		        {
		         "blast_id":1432,      int64       //blast id
		         },
		   "desc":"\u6210\u529f"
	      }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}



# [设置feed置顶 - `POST /www/blast/top`](测试链接)
+ Description

		发布feed

+ Request:

		{
		    'feed_id':1
		    'is_top':0    //0取消置顶  1 置顶
		}

 
+ Response Succ:
+ 
	     {
		  "status":"OK",
		  "data":0
		  "desc":"\u6210\u529f"
	      }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

# [赞blast - `POST /www/blast/praise`](测试链接)
+ Description

		赞blast

+ Request:

		{
		  “value”: ,(required, number, 默认1, 1代表点赞，0取消)
		  “blast_id”:, (reqired, number,默认0)
		}

 
+ Response Succ:

		{
			"status":'OK',
			"data": {
	        	“praise_num”: , //点赞数
			}
			"desc":""
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),   
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		error_code:{		
			"301":feed不存在
			"304":重复点赞或重复取消
		}
		
		
# [发布blast评论 - `POST /www/blast/comment`](测试链接)
+ Description

		发布blast评论

+ Request:

		{
            "to_user_id": , int64（评论user）
            "blast_id":12, (required, int64, blast标号)
            "content":'aaa' （required, string, 内容）
            "user_id":0    (1小编，其它。。。。)
		}

 
+ Response Succ:
+ 
     	 {
		   "status":"OK",
		   "data":{
		           "comment_num":6,
		           "comment_id":4535,
		            },
		    "desc":(required, string, '', '返回描述，错误时描述')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

		error_code:{		
			"301":feed不存在
		}
		
# [查询用户运动记录 - `GET /www/gps/all`](#)

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description

	  根据用户id查询用户的运动历史纪录

+ Request:
		{
			"user_id" :  1      #用户id
			"page_size" : 1     #请求页的条目数
			"page_num" :  1     #请求第几页（页数从1开始）
		}

+ Response Succ:

		{
		"data": [
        	{
            	"user_id": 98, //当前用户id
            	"location": "成都", //当前用户所在城市
            	"sports_type": 2, //运动类型
            	"start_time": "2015-09-08T20:03:41+0800", //运动开始时间
            	"end_time": "1970-01-01T08:00:00+0800", //运动截至时间
            	"total_length": 560, //运动距离, 单位 米
            	"total_calories": 33.81312362733845, //运动消耗的卡路里
            	"points": [
                	{
                    	"endTime": 1.441714232095309e+09, //当前运动路段截止时间
                    	"gpsPointsBuffer": [
                        	{
                            	"calories": 0, //当前点和上个点之间消耗的卡路里
                            	"distance": 0, //当前点和上个点之间的距离
                            	"elevation": 0, //海拔
                            	"kmStone": false, //是否是公里牌点
                            	"kmStoneIndex": 0, //公里牌索引
                            	"latitude": 30.51195725323077, //打点纬度
                            	"longitude": 104.0712182078528, //打点精度
                            	"time_stamp": 1.441713824055173e+09 //打点时间戳
                        	},

                    	],
                    	"isActivePath": true, //是否是当前活动的路段
                    	"startCalories": 33.81312362733845, //当前运动路段开始的卡路里
                    	"startDistance": 560.6714936647935, //当前运动路段开始的距离
                    	"startTime": 1.441713821782187e+09 //当前运动路段开始的时间
                	}
            	],
            	"product_id": "BlastIOS", //产品id
            	"average_pace": 732, //当前运动平均配速
            	"highest_speed_perkm": 732, //当前运动速度
            	"pace_per_m": "732", //当前运动每公里配速集合 如果有多个配速用逗号分割: 732,732,732
            	"total_time": 410, //运动消耗总时间
            	"pause": 0 //是否暂停
        	},
    	],
    	"desc": "success",
    	"status": "OK",
    	"total_num": 132
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		

# [获取开屏广告 - `GET /www/blast/screen_ads`](#)

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description

+ Request:
		

+ Response Succ:

		{
		"data": [{
			"id":int 
			 "ios_640_960": (required, string, '', '图片链接')
			 "ios_640_1136": (required, string, '', '图片链接')
			 "ios_750_1334": (required, string, '', '图片链接')
			 "ios_1242_2208": (required, string, '', '图片链接')
			 "android_xh": (required, string, '', '图片链接')
			 "android_xxh": (required, string, '', '图片链接')
			 "ref_url": (required, string, '', '跳转链接')
			 "start_time":(required, int, '', 开始时间戳)
			 "end_time":(required, int, '', 结束时间戳)
		}]
    	"desc": "success",
    	"status": "OK",
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		

# [配置开屏广告 - `POST /www/blast/screen_ads/<id>`](#)  新建id为0更新id为对应id

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description

+ Request:

		{
			 "ios_640_960": (required, string, '', '图片链接')
			 "ios_640_1136": (required, string, '', '图片链接')
			 "ios_750_1134": (required, string, '', '图片链接')
			 "ios_1242_2208": (required, string, '', '图片链接')
			 "android_xh": (required, string, '', '图片链接')
			 "android_xxh": (required, string, '', '图片链接')
			 "ref_url": (required, string, '', '跳转链接')
			 "start_time":(required, int, '', 开始时间戳)
			 "end_time":(required, int, '', 结束时间戳)
		}

+ Response Succ:

		{
		"data": ID
    	"desc": "success",
    	"status": "OK",
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [删除开屏广告 - `DELETE /www/blast/screen_ads/<id>`](#)  id为对应id

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description

+ Request:
		{
		}

+ Response Succ:

		{
		"data": 0
    	"desc": "success",
    	"status": "OK",
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		

# [添加推送 - `POST /www/blast/push`](#)  

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description


+ Request:

		1. 单独推送或标签筛选推送，Content-Type: application/json
		{
			"target_ids":string  "推送用户"  "1,2,3"或者"all"或者"tags"(标签筛选)
			"content":string  "内容"
			"alarm_time":string  "2016-01-06T08:00:00"   "now"为立即推送
			"ref_url":string  "跳转链接"
			"save_template":int  "是否保存模版"  0:保存  1:不保存
			"tags": {
				"os": []string, {"ios", "android"},
				"gender": []int, {1, 2}, // 1:male, 2:female,
				"registery_type": []string, {"mail", "phone", "facebook", "google"},
				"country_code": []string, {"cn", "us", "ca"...}, // 具体code看UE, 中国的code是cn
				"language": []string, {"en", "ru", "pt"...}, // 具体code看UE
				"version": []string, {"1.9.0", "1.8.0"...}
			}
		}
		2. 批量导入excel推送, Content-Type: multipart/form-data
		{
			"excel": (excel文件, 文件扩展名必须是.xlsx),
			"content":string  "内容",
			"alarm_time":string  "2016-01-06T08:00:00"   "now"为立即推送
			"ref_url":string  "跳转链接"
			"save_template":int  "是否保存模版"  0:保存  1:不保存
		}

+ Response Succ:

		{
			"data": 0
	    	"desc": "success",
	    	"status": "OK",
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
# [获取推送模板 - `GET /www/blast/push/template`](#)  

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description


+ Request:

		{
		}

+ Response Succ:

		{
		"data": [{
			"id": int 
			"content":string  "内容"
			"ref_url":string  "跳转链接"
			}
			....
		]
    	"desc": "success",
    	"status": "OK",
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
# [删除推送模板 - `DELETE /www/blast/push/template/<id>`](#)  

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description


+ Request:

		{
		}

+ Response Succ:

		{
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [获取feedback - `GET /www/blast/feedback`](#)  

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description

+ Request:

		{
			order_type : int 0 create_time  1 state (优先显示未恢复的)
			pagenum :int
			pagesize:int
		}

+ Response Succ:

		{
		"data":{ 
			feedbacks:[{
			"id":int
			"user_id": int
			"user_nick":string
	        "device": (required, string, ‘iphone 6s’, 设备),
	        "platform": (required, int, 0, android：0   ios：1),
	        "app_version": (required, string, '1.0.0','版本号'),
	        "sys_version": (required, string, '4.4.4', '操作系统版本号'),
	        "create_time": (required, bigint, , '创建时间戳'),
			"content":"" (required, string, '...打不开', '反馈内容'),
			"pic":"" (required, string, 'http://', '图片地址'),
			"state":int   0 未回复  1 已回复   2 已完成
			"replys":[{
					"content":"" (required, string, '', '回复内容'),
	        		"create_time": (required, bigint, , '创建时间戳'),
				}
				.....
			],
			total_count: 1000,
			noreply_count: 1000,
		}
    	"desc": "success",
    	"status": "OK",
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
# [回复feedback - `POST /www/blast/feedback/reply`](#)  

+ **创建**(`Unknown`, `2015-10-08`)
+ **变更**(``)

+ Description

+ Request:

		{
			"feedback_id":int feedback id
			"content":string 回复内容
		}

+ Response Succ:

		{
		"data":0
    	"desc": "success",
    	"status": "OK",
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		
# [关闭feedback - `POST /www/blast/feedback/ignore`](#)  

+ **创建**(`yanglin`, `2016-05-25`)
+ **变更**(``)

+ Description

+ Request:

		{
			"feedback_id":int feedback id
		}

+ Response Succ:

		{
    	"status": "OK",
		"data":0,
    	"desc": "success"
    	}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, int, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		

		
# [激活 - `POST /api/users/active/<code>`](#)

+ **创建**(`Unknown`, `2012-01-01`)
+ **变更**(``)

+ Description

		手机登录

+ Request:

		{
			"code": (required, string, '', '激活码'),
		}
		
+ Response Succ:

		{
		"status": (required, string, 'Error', '返回错误概要描述'),
		"data": {
			"ciphertext": (required, string, '88584821a5956fc7b68ab87b0cb16d2a', '加密后字符串'),
			"phone"  (optional, string, '', ‘手机号'),
			}, ///user_profile
		},
		"desc": (required, string, '', '返回错误详细描述')

		}



+ Response Error:

		{
		"status": (required, string, 'Error', '返回错误概要描述'),
		"data": (required, int, '', '返回的错误码'),
		"desc": (required, string, '', '返回错误详细描述')
		}

		error_code:{
			"105":"This mobile number is already registerd!",
		}



# [发布/更新配件 - `POST /www/blast/pendant`](测试链接)
+ Description

		发布挂件

+ Request:

		{
			'id':int  0, //0为创建 非0为更新
            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_small':'url':'http://img3.codoon.com/awefawef.jpg',
			'ref_url':u''
			'start_time':1470101919 时间戳
			'end_time':1470101919 时间戳
			'user_id':  bigint '发布者id'
            'type':0   :int 0 配件 1 popular 广告,
            'top_order':1,   //越大越靠前
		}

 
+ Response Succ:

	     {
		  "status":"OK",
		  "data":1  id
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		

# [获取所有配件 - `Get /www/blast/pendant?type=?`](测试链接)
+ Description

		发布挂件

+ Request:

		{		
			type   0:配件  1:popular页广告
		}
 
+ Response Succ:

	     {
		  "status":"OK",
		  "data":[
		    {
			'id':int  0, //0为创建 非0为更新
            'pics':'url':'http://img3.codoon.com/awefawef.jpg',
            'pic_small':'url':'http://img3.codoon.com/awefawef.jpg',
			'ref_url':u''
			'start_time':1470101919 时间戳
			'end_time':1470101919 时间戳
			'user_id':  bigint '发布者id'
            'type':0   :int 0 配件 1 popular 广告,
            'top_order':1,   //越大越靠前
		    }
		    .....
		  ]
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		
# [删除配件 - `DELETE /www/blast/pendant`](测试链接)
+ Description

		发布挂件

+ Request:

		{
		   id:1
		}
 
+ Response Succ:

	     {
		  "status":"OK",
		  "data":0
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		
# [添加奖励任务 - `POST /www/balance/task`](测试链接)
+ Description

		发布挂件

+ Request:

		{
			"title"      	string
			"description"  string
			"start_time"   INT64  时间戳
			"ref_url"    string
			"pic"			string
			"end_time"		INT64	时间戳
			"target_type"  int    //"1,3,4"  1 距离 (2 时间, 废除) 3 卡路里  4 距离+时间
			"target_value" float64   // 单类型时，只填此目标值；多类型时，此值填距离(米)，距离类型只能是【3000.0，5000.0，10000.0，21097.5，42195.0】
			"target_value2" float64  // 只有多类型时可用，此值填时间（秒）
			"split_infos":[
				{
					"amount": int64  数量
					"value": int64  奖励值
				}
				{}
				.......
			]
		}
 
+ Response Succ:
+ 
	     {
		  "status":"OK",
		  "data":0
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}


# [编辑奖励任务 - `POST /www/balance/task/<id>`](测试链接)
+ Description

		发布挂件

+ Request:

		{
			"title"      	string
			"description"  string
			"start_time"   INT64  时间戳
			"ref_url"    string
			"pic"			string
			"end_time"		INT64	时间戳
			"target_type"  int    //"1,3,4"  1 距离 (2 时间, 废除) 3 卡路里  4 距离+时间
			"target_value" float64   // 单类型时，只填此目标值；多类型时，此值填距离(米)，距离类型只能是【3000.0，5000.0，10000.0，21097.5，42195.0】
			"target_value2" float64  // 只有多类型时可用，此值填时间（秒）
			"split_infos":[
				{
					"amount": int64  数量
					"value": int64  奖励值
				}
				{}
				.......
			]
		}
 
+ Response Succ:
+ 
	     {
		  "status":"OK",
		  "data":0
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

		
# [删除奖励任务 - `DELETE /www/balance/task/<id>`](测试链接)
+ Description

		发布挂件

+ Request:

		{
		}
 
+ Response Succ:

	     {
		  "status":"OK",
		  "data":0
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}

# [获取参加任务的人 - `GET /www/balance/task/users?task_id=?&type=?&page_num=?&page_size=?`](测试链接)
+ Description

		type : 1参加的人    2完成的人   3已领红包的人

+ Request:

		{
		}
 
+ Response Succ:

	     {
		  "status":"OK",
		  "data":
				"data":[{
					"user_id": 用户id
					"nick": (optional, string, '', '姓名'),
					"gender": (optional, int, '', '性别'),
					"avatar": (optional, string, '', '头像'),
					"award": (required, int64, 获得的奖励数),
				  	}
				  	...
				 ],
				"total_num": int, 总数,
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		
		
# [获取任务 - `GET /www/balance/task?page_num=?&page_size=?`](测试链接)
+ Description


+ Request:

		{
		}
 
+ Response Succ:

	     {
		  "status":"OK",
		  "data":{
				"data": [{
					"id": int64, 任务Id
					"title": (string, '', '标题'),
					"start_time": (int64),
					"end_time": int64,
					"joined_num": int64,参与人数,
					"compeleted_num": int64, 完成人数,
				  	}
				  	...
				 ],
				"total_num": int, 总任务数,
		 },
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		


# [保存Me广告（后台） - `PUT /www/save_user_ad`](#)

+ **创建**(`zhouhang`, `2016-05-03`)
+ **变更**(``)

+ Description

		

+ Request:

		{
			"start_time": (required, int64, 开始时间),
			"end_time": (rquired, int64, 结束时间),
			"pic": (required, string, 图片地址),
			"ref_url": (required, string, 图片链接),
		}
		
+ Response Succ:

		{
			"status": (required, string, 'OK', '返回错误概要描述'),
			"data": (required, int, Ad ID),
			"desc": (required, string, '', '返回错误详细描述')
		}

+ Response Error:
		{
			"status": (required, string, "Error", '返回错误概要描述'),
			"desc": (required, string, '', '返回错误详细描述')
		}


# [获取个人页广告列表 - `GET /www/get_user_ads`](#)

+ **创建**(`Unknown`, `2012-01-01`)
+ **变更**(``)

+ Description

		

+ Request:

		{
			page_num: int,
			page_size: int,
		}
		
+ Response Succ:

		{
		"status": (required, string, 'Error', '返回错误概要描述'),
		"data": {
			"total_num": (int, 总数), 
			"ads_info": [{
				id:
				pic :(required, string,广告图片),
				ref_url :(required, string,广告链接),
				desc :(required, string,广告描述),
				title :(required, string,广告标题),
				start_time: (required, int64, 开始时间),
				end_time: (required, int64, 结束时间),
			}],
		},
		"desc": (required, string, '', '返回错误详细描述')

		}


# [删除个人页广告 - `POST /www/delete_user_ad`](#)

+ **创建**(`Unknown`, `2012-01-01`)
+ **变更**(``)

+ Description

		

+ Request:

		{
			id: (required, int64, 广告id)
		}
		
+ Response Succ:

		{
		"status": (required, string, 'Error', '返回错误概要描述'),
		"desc": (required, string, '', '返回错误详细描述')
		}



# [获取提现列表（后台） - `GET /www/balance/withdraw?page_num=?&page_size=?`](#)

+ **创建**(`zhouhang`, `2016-05-07`)
+ **变更**(``)

+ Description

+ Request:

		{
		}
 
+ Response Succ:

	     {
		  "status":"OK",
		  "data":{
			  "data": [{
					"trans_id": int64, 交易Id,
					"paypal_account": string,
					"nick": (optional, string, '', '姓名'),
					"avatar": (optional, string, '', '头像'),
					"create_time": (required, int64, 申请时间戳),
					"value": (required, int64, 金额(单位为'美分')),
					"ext_state": (required, int, 交易状态 1-待付款；2-已付款（交易成功）；3-交易取消；4-已退款',),
			  	}
			  ],
			  "total_num": int, 总提现数,
			  "total_wait_handle_num": int, 未处理的总数,
			  "total_reward": (required, int64, 总计发出金额(单位为'美分')),
			  "total_withdraw": (required, int64, 总计提现金额(单位为'美分')),
		   },

		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		

# [完成转账（后台） - `POST /www/balance/withdraw/complete?`](#)

+ **创建**(`zhouhang`, `2016-05-07`)
+ **变更**(``)

+ Description

+ Request:

		{
			"trans_id": int64, 交易Id(提现列表返回的交易id),
			"trans_id_ext": string, 外部交易流水id,
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": 0,
		  "desc":"\u6210\u529f"
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}



# [更新代码（后台） - `GET /www/internal_code_update`](#)

+ **创建**(`yanglin`, `2016-05-27`)
+ **变更**(``)

+ Description
    	请求该接口后，后台执行git pull和nginx reload
        仅限于以下两个目录
        /var/www/codoon/static_root/backend
		/var/www/codoon/static_root/test_overseasActivity

+ Warning
		该接口可能耗时较长，请耐心等待，且仅在开发环境(dev)下开放
        另外，不支持并行，所有请求串行处理

+ Request:

		{
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": 0,
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		


# [文章列表 - `POST /www/news_articles/articles_list?page_num=?&page_size=?`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"page_num": int,
			"page_size": int,
			"date": string, "2016-08-04",
			"language": string, "English",
			"tag_id": int64,	
			"state": int, 1:待审核，2:已发布，3:已过期, 4:待上线（已审核还未上线的），
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": {
		  	"articles_list": [{
		  		"id": int64, 专题id,
		  		"editor": string, 编辑者,
		  		"source_author": string, 原作者,
		  		"source_url": string, 来源, url地址, 
		  		"title": string, 文章名,
		  		"summary": string, 摘要,
		  		"head_pic_url": string,  头图地址,
		  		"type_setting": int, 排版编号,
		  		"has_video": int, 是否有视频, 1: 有 0: 无,
		  		"tags": []string, 专题名, "training,sports..."
		  		"language": string, 语言,
		  		"start_time": int64, 开始时间,
				"end_time": int64, 结束时间,
				"read_num": int64, 阅读量,
				"comment_num": int64, 评论量,
				"submit_time": int64, 审核提交时间, (只有待审核文章列表有此字段),
				"expired_time": int64, 过期时间, (只有过期文章才有此字段),
				"create_time": int64, 创建时间,
		  		"modify_time": int64, 修改时间,
		  		"pic_word_type": int, // 0:传统模式，图文混编；1:图文卡片式
		  	}],
		  },
		  "desc":""
	     }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		
# [文章下线 - `POST /www/news_articles/offline_article`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"id": int64, 
		}
		
+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"desc": (required, string, '')
		}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		

# [回复 - `POST /www/news_articles/comment`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"from_user_id", int64, 评论者id,
			"id": int64, 评论id, 对评论的回复填id，二者取其一
			"article_id": int64, 文章id, 对文章的回复填article_id，二者取其一,
			"comment": string, 评论内容,
			"timestamp": int64, 评论的时间// 后台配置定时评论，没有的话填0
		}
		
+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"desc": (required, string, '')
		}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}


# [删除回复 - `POST /www/news_articles/delete_comment`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"id": int64, 评论id,
		}
		
+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"desc": (required, string, '')
		}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}


# [评论列表 - `POST /www/news_articles/comments_list`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)
+ Description

+ Request:

		{
			"article_id": int64, 文章id,
			"page_num": int,
			"page_size": int,
		}

+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"data": {
				"comments": [{
					"main_comment": {
						"id": int64, 评论id,
						"parent_id": int64, 父评论id, 主评论的父评论Id都为0,
						"user_id": int64, 用户id,
						"user_name": string, 用户名,
						"portrait": string, 用户头像,
						"to_user_id": int64,
						"to_user_name": string,
						"create_time": int64, 评论的时间,
						"content": string, 评论内容,
					},
					"sub_comments": [{
						"id": int64, 评论id,
						"parent_id": int64, 父评论id, 指向main_comment id，
						"user_id": int64, 用户id,
						"user_name": string, 用户名,
						"portrait": string, 用户头像,
						"to_user_id": int64,
						"to_user_name": string,
						"create_time": int64, 评论的时间,
						"content": string, 评论内容,
					}],
					"has_more_sub_comment": int, 是否有更多子评论, 0：无， 1：有,
				],
			}
		}


# [获取更多子评论列表 - `POST /www/news_articles/sub_comments_list`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)
+ Description

+ Request:

		{
			"parent_id": int64, 父评论id,
			"page_num": int,
			"page_size": int,
		}

+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"data": {
				"sub_comments": [{
					"id": int64, 评论id,
					"parent_id": int64, 父评论id, 指向main_comment id，
					"user_id": int64, 用户id,
					"user_name": string, 用户名,
					"portrait": string, 用户头像,
					"to_user_id": int64,
					"to_user_name": string,
					"create_time": int64, 评论的时间,
					"content": string, 评论内容,
				}],
				"has_more_sub_comment": int, 是否有更多子评论, 0：无， 1：有
			}
		}
		
# [查看文章详情 - `POST /www/news_articles/view_article`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"id": int64, 文章id
		}
		
+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"data" : {
				"id": int64, 文章id,
				"type": string, "伤痛防护",
				"credit": string, // 原创、重写、转载
		  		"editor": string, 编辑者,
		  		"source_author": string, 原作者,
		  		"source_url": string, 来源, url地址, 
		  		"title": string, 文章名,
		  		"summary": string, 摘要,
		  		"content": string, 文章内容,
		  		"head_pic_url": string,  头图地址,
		  		"type_setting": int, 排版编号, 1,2,3,4，分别代表UE上的4种排版编号,
		  		"has_video": int, 是否有视频, 1: 有 0: 无,
		  		"tags": [{
		  			"id": int64, tag id,
		  			"name": string, tag名,
		  		}],
		  		"language": string, 语言,
		  		"reviewer": string, 审核人,
		  		"start_time": int64, 开始时间,
				"end_time": int64, 结束时间,
				"read_num": int64, 阅读数,
				"comment_num": int64, 评论数,
				"create_time": int64, 创建时间,
		  		"modify_time": int64, 修改时间,
		  		"pic_word_type": int, // 0:传统模式，图文混编；1:图文卡片式
			},
			"desc": (required, string, '')
		}

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		
# [编辑发布 - `POST /www/news_articles/edit_publish`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"id": int64, 文章id,
			"credit": string, // 原创、重写、转载
		  	"source_author": string, 原作者,
		  	"source_url": string, 来源, url地址, 
			"title": string, 文章名,
			"summary": string, 摘要,
			"content": string, 文章内容,
			"head_pic_url": string,  头图地址,
			"type_setting": int, 排版编号, 1,2,3,4，分别代表UE上的4种排版编号,
			"has_video": int, 是否有视频, 1: 有 0: 无,
			"tag_ids": []int64, 专题id列表, {1,2,3},
			"language": string, 语言,
			"start_time": int64, 开始时间,
			"end_time": int64, 结束时间,
			"pic_word_type": int, // 0:传统模式，图文混编；1:图文卡片式
			"pic_num": int, // 图文卡片的图片个数
		}
		
+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"data" : {},
			"desc": (required, string, '')
		}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}


# [获取可选的tag - `GET /www/news_articles/select_tag?`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"lan": "en", string // 文章的语言, en:英语，zh_sc:简体, zh_tc:繁体, ru:俄语，pt:葡萄语，fr:法语, de: 德语，ja:日语，ko:韩语，es:西班牙语
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": {
		  	"topic_list": [{
		  		"id": int64, 专题id，
		  		"name": string, 专题名,（根据文章语言返回相应语言的tag）
		  		"desc": string, 描述,
		  		"pic_url": string,  专题图片地址,
		  		"call_state": int, 征稿状态, 0: 未征稿, 1: 征稿中,
		  		"online_state": int, 上线状态, 0: 未上线, 1: 已上线,
		  		"create_time": int64, 创建时间,
		  		"modify_time": int64, 修改时间,
		  	}],
		  },
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}
		

# [拒绝发布 - `POST /www/news_articles/reject_publish`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"id": int64, 文章id,
			"reject_content": string, 拒绝原因,
		}
		
+ Response Succ:

		{
			"status": "OK",
			"desc": ""
		}
		
+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}


# [评分评价 - `POST /www/news_articles/score_mark_article`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"id": int64, 文章id,
			"score": float64, 评分,
			"mark": string, 评价,
		}
		
+ Response Succ:

		{
			"status": "OK",
			"desc": ""
		}
		
+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}



# [专题分类列表 - `GET /www/news_articles/topic_list?page_num=?&page_size=?` ](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": {
		  	"topic_list": [{
		  		"id": int64, 专题id，
		  		"name": string, 专题名, //（默认英语）
		  		"desc": string, 描述,
		  		"pic_url": string,  专题图片地址,
		  		"call_state": int, 征稿状态, 0: 未征稿, 1: 征稿中,
		  		"online_state": int, 上线状态, 0: 未上线, 1: 已上线,
		  		"create_time": int64, 创建时间,
		  		"modify_time": int64, 修改时间,
		  		"en_topic_name": string, 英语名,
		  		"zhsc_topic_name": string, 中文简体,
				"zhtc_topic_name": string, 中文繁体,
		  		"fr_topic_name": string, 法语名,
		  		"pt_topic_name": string, 葡萄牙语名,
		  		"ru_topic_name": string, 俄罗斯语名,
		  		"de_topic_name": string, 德语,
				"ja_topic_name": string, 日语,
				"ko_topic_name": string, 韩语,
				"es_topic_name": string, 西班牙语,
		  		"en_articles_num": int, 英语文章数,
		  		"fr_articles_num": int, 法语文章数,
		  		"pt_articles_num": int, 葡萄牙语文章数,
		  		"ru_articles_num": int, 俄罗斯语文章数,
		  	}],
		  },
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}


# [新建更新专题分类 - `POST /www/news_articles/create_update_topic` ](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"id": (required, int64), 更新时传此值,
			"en_topic_name": string, 英语专题名,
			"zhsc_topic_name": string, 中文简体,
			"zhtc_topic_name": string, 中文繁体,
			"fr_topic_name": string, 法语专题名,
			"pt_topic_name": string, 葡萄牙语专题名,
			"ru_topic_name": string, 俄罗斯语专题名,
			"de_topic_name": string, 德语,
			"ja_topic_name": string, 日语,
			"ko_topic_name": string, 韩语,
			"es_topic_name": string, 西班牙语,
			"pic_url": string, 图片地址,
			"desc": string, 描述,
		}
		
+ Response Succ:

		{
			"status": "OK",
			"desc": ""
		}
		
+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}


# [删除专题分类 - `post /www/news_articles/delete_topic`](#)

+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

		删除专题

+ Request:

		{
			"id": (required, int64),
		}

+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"desc": (required, string, '')
		}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回错误概要描述'),
			"desc": (required, string, '', '返回错误详细描述')
		}
		
	
# [征稿(停止征稿) - `post /www/news_articles/call_for_topic`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"id": (required, int64),
			"start_or_stop": int, 0: stop, 1: start,
		}
		
+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"desc": (required, string, '')
		}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回错误概要描述'),
			"desc": (required, string, '', '返回错误详细描述')
		}



# [专题上（下）线 - `post /www/news_articles/online_topic`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description


+ Request:

		{
			"id": (required, int64),
			"is_online": int, 0: offline; 1: online
		}
		
+ Response Succ:

		{
			"status": (required, string, 'OK'),
			"desc": (required, string, '')
		}

+ Response Error:

		{
			"status": (required, string, 'Error', '返回错误概要描述'),
			"desc": (required, string, '', '返回错误详细描述')
		}



# [水印相机（后台）列表 - `GET /www/picture/watermark/list`](#)

+ **创建**(`yanglin`, `2016-08-27`)
+ **变更**(``)

+ Description
    	水印列表

+ Warning

+ Request:

		{
            “pagesize”: (optional, number, 获取条数，默认1),
            “pagenum”: (optional, number, 获取页码)
        }

+ Response Succ:

		{
		  "status":"OK",
		  "data": {
            "data": [
                 {
                    "id": (int, 1),
                    "pic": (string, 'url'),
                    "icon": (string, 'url'),
                    "start_time": (int, unix时间戳),
                    "end_time": (int, unix时间戳),
                    "top": (int, 0~100),
                    "left": (int, 0~100),
                    "sort": (int, >0)
                    "datas": [{
                        "data": (required, string, 'distance', 'pace', 'speed', 'calorie', 'date', 'weekday', 'city', 'country'),
                        "upper": (required, bool, 是否大写),
                        "font": (required, string, 字体),
                        "font_size": (required, int, 18px),
                        "top": (required, int, 0~100),
                        "left": (required, int, 0~100)
                    }]
                }       
            ],
            "total:" 123
          },
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}


# [水印相机（后台）更新 - `POST /www/picture/watermark/update`](#)

+ **创建**(`yanglin`, `2016-08-27`)
+ **变更**(``)

+ Description
    	水印创建、更新、更新排序

+ Warning

+ Request:

		{
            "id": (int, 1), // 0为新建，1为更新
			"pic": (required, string, 'url'),
			"icon": (required, string, 'url'),
			"start_time": (int, unix时间戳),
			"end_time": (int, unix时间戳),
			"top": (required, int, 0~100),
			"left": (required, int, 0~100),
			"sort": (int, >0),
            "datas": [{
                "data": (required, string, 'distance', 'pace', 'speed', 'calorie', 'date', 'weekday', 'city', 'country'),
                "upper": (required, bool, 是否大写),
                "font": (required, string, 字体),
                "font_size": (required, int, 18px),
                "top": (required, int, 0~100),
                "left": (required, int, 0~100)
            }]
		}

+ Response Succ:
	     {
		  "status":"OK",
		  "data": 0,
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}


# [水印相机（后台）删除 - `DELETE /www/picture/watermark/delete`](#)

+ **创建**(`yanglin`, `2016-08-27`)
+ **变更**(``)

+ Description
    	水印删除

+ Warning

+ Request:

		{
            "id": (required, int, 1)
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": 0,
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}



# [推荐用户（后台 - `POST /www/user/recommend`](#)

+ **创建**(`yanglin`, `2016-08-27`)
+ **变更**(``)

+ Description
    	推荐用户

+ Warning

+ Request:

		{
            "user_id": (required, int, 1),
            "create": (required, bool, true),
            "tags": ["abc", "Runner"], // 不要有Neighbor
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": 0,
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}



# [所有推荐用户（后台 - `GET /www/user/recommend`](#)

+ **创建**(`yanglin`, `2016-08-27`)
+ **变更**(``)

+ Description
    	获取所有推荐用户

+ Warning

+ Request:

		{
            "pagenum": (required, int, 1)
            "pagesize": (required, int, 10)
            "keyword": (string, "")
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": {
            "data": [{
                "user_id": (required, int, 1),
                "tags": ["abc", "Runner"], // 不要有Neighbor
                "create_time": ("2016-08-11")
                "new_user": (bool, true/false, 是不是新用户 -- 30天以内注册用户)
                "not_recommend": (bool, true/false, 用户是否设置了不要推荐)
            }],
            "total": 100
          },
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}


# [删除推荐用户（后台 - `DELETE /www/user/recommend`](#)

+ **创建**(`yanglin`, `2016-08-27`)
+ **变更**(``)

+ Description
    	删除推荐用户

+ Warning

+ Request:

		{
            "user_id": (required, int, 1)
		}

+ Response Succ:

	     {
		  "status":"OK",
		  "data": "",
		  "desc":""
	     }

+ Response Error:

		{
		"status": (required, string, 'Error', '返回状态 OK/Error'),
		"data": (required, string, '', '返回错误code'),
		"desc": (required, string, '', '返回描述，错误时描述')
		}


# [推送率统计（后台）- `GET /www/push_info/push_statistics_list?page_size=&page_num=`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description


+ Request:

		{
		}

+ Response Succ:

		{
			"status":"OK",
			"data": {
				"total_num": int,
				"push_list": [{
					"id": int64,
					"alarm_time": string,
					"receiver": string,
					"content": string,
					"push_click_num_ios": int,
					"push_click_num_andriod": int,
					"push_arrive_num_andriod": int,
					"push_arrive_rate_andriod": float32,
					"push_arrive_rate_total": float32,
				}],
			},
			"desc":""
	    }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
		
# [给奖励（后台）- `POST /www/reward/grand_reward`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description


+ Request:

		{
			"to_user_id": int64, 
			"grand_value": int64,
			"grand_reason": string,
			"msg": string,
			"tip_url": string,
		}

+ Response Succ:

		{
			"status":"OK",
			"data": {
				"grand_value": int64,
			},
			"desc":""
	    }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}
		
# [给任务奖励（后台）- `POST /www/reward/grand_task_reward`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description

+ Request:

		{
			"to_user_id": int64, 
			"task_id": int64, 对应的奖励任务,
			"msg": string,
			"tip_url": string,
		}

+ Response Succ:

		{
			"status":"OK",
			"data": {
				"grand_value": int64,
			},
			"desc":""
	    }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}



# [给任务奖励列表（后台）- `GET /www/reward/grand_reward_list?page_size=&page_num=`](#)
+ **创建**(`zhouhang`, ``)
+ **变更**(``)

+ Description


+ Request:

		{
		}

+ Response Succ:

		{
			"status":"OK",
			"data": {
				"total_num": int,
				"reward_list": [{
					"id": int64,
					"user_id": int64,
					"nick": string,
					"avatar": string,
					"value": int64,
					"create_time": int64,
				}],
			},
			"desc":""
	    }

+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}


# [创建系统账号 (后台) - `POST /www/message_gate/new_sys_user`](#)
+ **创建**(`yanglin`, ``)

+ Request:

        {
            "nick": (string)
            "avatar": (头像, http://...)
            "email": (邮箱)
            "password": (string)
        }

+ Response Succ:

        {
            "user_id": (int, 新建系统账号的Id)
        }


# [获取系统账号信息 (后台) - `GET /www/message_gate/fetch_sys_params`](#)
+ **创建**(`yanglin`, ``)

+ Request:

        {}

+ Response Succ:

        {
            "sys_users": [{
                "user_id": 7, // between 1 ~ 50
                "nick": "My nick",
                "avatar": "http://"
            }],
            "countries": [{"中国":"cn"}, {"美国":"us"}],
            "languages": [{"英语":"en"}, {"中文(简体)":"zh_st"}, {"中文(繁体)":"zh_tc"}],
        }


# [后台发送系统消息 (后台) - `POST /www/message_gate/send_sys_msg`](#)
+ **创建**(`yanglin`, ``)

+ Request:

        {
            "sys_user_id": (int, 7, 用哪个系统账号)
            "send_time": (string, 格式: "2006-01-02 15:04:05", 不填默认为立即发送, 请发送"重庆"时区的时间)
            "last_login_time": (int, 24, 单位: 小时(h))
            "oss": ["ios", "android"],
            "genders": ["male", "female", "unknown"],
            "account_types": ["facebook", "phone", "email", "google"],
            "countries": ["cn", "us"], // 国家对应关系见: https://www.tapd.cn/20042931/prong/stories/view/1120042931001004232?url_cache_key=d402fdd367c998e10d77de954d59a75a&action_entry_type=story_tree_list
            "languages": ["en", "zh_sc", "zh_tc", "ru", "pt", "de", "fr", "ja", "ko", "es"],
                //对应 -> "英", "简",    "繁",    "俄", "葡", "德", "法", "日", "韩", "西班牙"
            "version": (string, "2.0.0", 没要求不要填写),
            "title": (string, "this is the title"),
            "text": (string, "message to send"),
            "pic": (string, "http://...", 图片),
            "url": (string, "runtopia://..."),
            "style": (int, [0-4], 0:text, 1:pic, 2:url, 3:task, 4:card)
        }

        // oss, genders, account_types 只能选上面几个

+ Response Succ:

        {
            "user_ids": [99, 123], // 所有发送的用户Id
            "fail_reasons": ["fail reason 1", "fail reason 2"]
        }
        

        
   
# [获取版本升级信息 (后台) - `GET /www/settings/get_version_infos?platform=?`](#)
platform int, 0, android：0   ios：1     所有:2
+ **创建**(`duhb`, ``)

+ Request:

        {
        }


+ Response Succ:

        {
			"status":"OK",
			"data": {
				"list": [{
	        		"id": ( int64, 0 版本升级信息id)
	        		"platform": (, int, 0, android：0   ios：1),
	        		"app_version": (, string, '1.0.0','版本号'),
	        		"app_start_version": (string, '1.0.0','最低支持版本号'),
					"start_time": (required, int,  时间戳  生效时间),
					"desc": {
						"en": string,
						"zh_sc": string,
						"zh_tc": string,
						"de": string,
						"ko": string,
						"pt": string,
					}
				}],
			},
			"desc":""
	    }

# [删除版本升级信息 (后台) - `DELETE /www/settings/delete_version_info?id=?`](#)

+ **创建**(`duhb`, ``)

+ Request:

        {
        }


+ Response Succ:

        {
			"status":"OK",
			"data": {,
			},
			"desc":""
	    }

# [保存版本升级信息 (后台) - `post /www/settings/set_version_info`](#)
+ **创建**(`yanglin`, ``)

+ Request:

        {
        	"id": ( int64, 0 版本升级信息id)   0为新建  其它为更新
	        "platform": (, int, 0, android：0   ios：1),
	        "app_version": (, string, '1.0.0','版本号'),
	        "app_start_version": (, string, '1.0.0','最低支持版本号'),
			"start_time": (required, int,  时间戳  生效时间),
			"desc": {
				"en": string,
				"zh_sc": string,
				"zh_tc": string,
				"de": string,
				"ko": string,
				"pt": string,
			}
        }

+ Response Succ:

        {
			"status":"OK",
			"data": {
			},
			"desc":""
	    }
	    
	    
	   
	   
# [获取热补丁信息 (后台) - `GET /www/settings/get_hotfix？platform=?`](#)
+ **创建**(`duhb`, ``)

+ Request:

        {
        }


+ Response Succ:

        {
			"status":"OK",
			"data": {
				"list": [{
	      			"id": ( int64, 0 热补丁信息id)
	        		"platform": ( int, 0, android：0   ios：1),
	        		"app_version": ( string, '1.0.0','版本号'),
	       		    "user_tail_num": ( string, '1.0.0','版本号'),
					"state": (int,  0, u'撤回', 1, 生效),
					"start_time": ( int,  时间戳  生效时间),
					"desc": ( string, '', '描述')
					"url": ( string, '', '文件地址')
					"secret_key": ( string, '', '文件key')
				}],
			},
			"desc":""
	    }


# [保存热补丁信息 (后台) - `POST /www/settings/set_hotfix`](#)
+ **创建**(`duhb`, ``)

+ Request:

        {
        	    "id": ( int64, 0 热补丁信息id)      0为新建  其它为更新
	       	    "platform": ( int, 0, android：0   ios：1),
	        	"app_version": ( string, '1.0.0','版本号'),
	     		"user_tail_num": ( string, '1.0.0','版本号'),
				"state": (int,  0, u'撤回', 1, 生效),
				"start_time": ( int,  时间戳  生效时间),
				"desc": ( string, '', '描述')
				"url": ( string, '', '文件地址')
				"secret_key": ( string, '', '文件key')
        }


+ Response Succ:

        {
			"status":"OK",
			"data": {
			},
		}

# [创建/修改奖章（后台）- `POST /www/medal/create_update_medal`](#)
+ **创建**(`zhouhang`)

+ Request:

		{
			"id": int64, 奖章id, 创建时填0,
			"type": int8, 奖章类型, 0: 系统奖章; 4: 活动奖章,
			"icon": string, 奖章大图,
			"gray_icon": string, 奖章大图灰,
			"middle_icon": string, 奖章中图,
			"middle_gray_icon": string, 奖章中图灰，
			"multi_lan_json": {
				"en_name": string,
				"zh_sc_name": string,
				"zh_tc_name": string,
				"de_name": string,
				"ja_name": string,
				"ko_name": string,
				"pt_name": string,
				"en_des": string,
				"zh_sc_des": string,
				"zh_tc_des": string,
				"de_des": string,
				"ja_des": string,
				"ko_des": string,
				"pt_des": string,
			}
		}

+ Response Succ:

		{
			"data": int64, 奖章id,
			"status": "OK",
			"desc": ""
		}
		
#[获取奖章列表（后台）- `GET /www/medal/get_medal_list`](#)
+ **创建** (`zhouhang`)

+ Request:

		{
			"type": int8, 奖章类型, 0: 系统奖章; 4: 活动奖章,
			//"start_id": int64, 上一页的最后一个id，若是起始页，则填0，
			//"limit": int32, 分页大小,
			"page_num": int32,
			"page_size": int32,
			"exclude_associate_act": int, 是否排除关联了活动的奖章, 0:不排除， 1:排除
		}
		
+ Response:

		{		
			"data": {
				"total_num": int,
				"medal_list": [
					{
						"id": int64, 奖章id, 创建时填0,
						"type": int8, 奖章类型, 0: 系统奖章; 4: 活动奖章,
						"icon": string, 奖章大图,
						"gray_icon": string, 奖章大图灰,
						"middle_icon": string, 奖章中图,
						"middle_gray_icon": string, 奖章中图灰，
						"multi_lan_json": {
							"en_name": string,
							"zh_sc_name": string,
							"zh_tc_name": string,
							"de_name": string,
							"ja_name": string,
							"ko_name": string,
							"pt_name": string,
							"en_des": string,
							"zh_sc_des": string,
							"zh_tc_des": string,
							"de_des": string,
							"ja_des": string,
							"ko_des": string,
							"pt_des": string,
						},
						"create_time": int64,
						"update_time": int64,
						"is_associate_act": int, 是否关联了活动, 0: 否， 1:是
					},
				],
			},
			"status": "OK",
			"desc": ""
		}
		
#[删除奖章-`DELETE /www/medal/:medal_id`](#)
+ **创建** (`zhouhang`)

+ Request:

		{
		}
		
+ Response Succ:

		{
			"status": "OK",
			"desc": ""
		}
		
+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [获取feed标签 `GET /www/blast/feed_tags?keyword=?&pagenum=?&pagesize=?&sort_key=?`](#)

+ **创建** (`lyn young`)

+ Description:

		获取feed标签
		keyword 搜索标签
		sort_key 0时间，1真实热度，2热度

+ Request:

		{
			"keyword": (string, "" if not search),
			"pagenum": (int, 1),
			"pagesize": (int, 10),
			"sort_key": (int, 0, 1, 2)
		}

+ Response:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": {
				"data": [{
					"tag_name": (string, "fuck"),
					"create_time": (int, timestamp),
					"total_use": (int, 总使用量),
					"recent_use": (int, 最近30天使用量),
					"hot_num": (int, 热度),
					"real_hot_num": (int, 真实热度)
				}],
				"total": (int)
			},
			"desc": (required, string, '', '返回描述，错误时描述')
		}


# [修改标签热度 `POST /www/blast/feed_tag_hot`](#)

+ **创建** (`lyn young`)

+ Description:

		修改标签热度

+ Request:

		{
			"tag_name": (string, "fuck"),
			"hot_delta": (int, 可正可负)
		}


# [获取服务器已有的多语言 `GET /www/honor/languages`](#)

+ **创建**(`lyn young`)

+ Request:

+ Response:

		{
			"data": {
				"en": "英语",
				"zh_sc": "中文(简体)",
				"zh_tc": "中文(繁体)",
				"ja": "日语",
				"pt": "葡萄牙语",
				"de": "德语"
			},
			"desc": "success",
			"status": "OK"
		} // 保持相同的顺序

# [新建或更新荣誉 `POST /www/honor`](#)

+ **创建**(`lyn young`)

+ Request:

		{
			"honor_id": (int, 0创建, 非0更新),
			"icon": (string, 图标),
			"title": {
				"en": (string, 英文标题),
				"zh_sc": (string),
				... // 顺序不必保持一致
			},
			"desc": {
				"en": (string, 英文描述),
				"zh_sc": (string),
				... // 顺序不必保持一致，没有描述的可以为""
			},
		}

+ Response:

		{
			"honor_id": (int)
		}

# [删除荣誉 `DELETE /www/honor`](#)

+ **创建**(`lyn young`)

+ Request:

		{
			"honor_id": (int)
		}

+ Response:

		{
			"affect_num": (int, 成功为1)
		}


# [获取荣誉列表 `GET /www/honor`](#)

+ **创建**(`lyn young`)

+ Request:

		{
			"pagenum": (int),
			"pagesize": (int)
		}

+ Response:

		{
			"total": (int),
			"data": [{
				"id": (int, honor id),
				"title": (string),
				"icon": (string),
				"grant_num": (int, 授予人数)
			}],
		}

# [授予荣誉 `POST /www/honor/grant`](#)

+ **创建**(`lyn young`)

+ Request:

		!!!请用Form表单提交!!!
		1. 单独授予, Content-Type: application/x-www-form-urlencoded
		{
			"user_id": (int),
			"honor_id": (int),
			"grant_time": (格式 "2016-12-27 10:23:45"),
			"deadline": (格式 "2016-12-27 10:23:45")
		}
		
		2. 批量授予, Content-Type: multipart/form-data
		{
			"excel": (excel文件, 文件扩展名必须是.xlsx),
			"honor_id": (int),
			"grant_time": (格式 "2016-12-27 10:23:45"),
			"deadline": (格式 "2016-12-27 10:23:45")
		}

+ Response:

		{
			"success": (int, 成功人数),
			"fails": ["fail reason 1", "fail reason 2"...]
		}

# [取消荣誉 `POST /www/honor/cancel`](#)

+ **创建**(`lyn young`)

+ Request:

		{
			"user_ids": (string, "1,2,3,4,5"),
			"honor_id": (int),
			"time": (格式 "2016-12-27 10:23:45"), // 如果不需要，传""或没有该字段
			"reason": (string, 取消的原因)
		}

+ Response:

		{
			"affect_num": (int, 成功为user_ids个数)
		}


# [创建/修改奖章（后台）- `POST /www/medal/create_update_medal`](#)
+ **创建**(`zhouhang`)

+ Request:

		{
			"id": int64, 奖章id, 创建时填0,
			"type": int8, 奖章类型, 0: 系统奖章; 4: 活动奖章,
			"icon": string, 奖章大图,
			"gray_icon": string, 奖章大图灰,
			"middle_icon": string, 奖章中图,
			"middle_gray_icon": string, 奖章中图灰，
			"multi_lan_json": {
				"en_name": string,
				"zh_sc_name": string,
				"zh_tc_name": string,
				"de_name": string,
				"ja_name": string,
				"ko_name": string,
				"pt_name": string,
				"en_des": string,
				"zh_sc_des": string,
				"zh_tc_des": string,
				"de_des": string,
				"ja_des": string,
				"ko_des": string,
				"pt_des": string,
			}
		}

+ Response Succ:

		{
			"data": int64, 奖章id,
			"status": "OK",
			"desc": ""
		}
		
#[获取奖章列表（后台）- `GET /www/medal/get_medal_list`](#)
+ **创建** (`zhouhang`)

+ Request:

		{
			"type": int8, 奖章类型, 0: 系统奖章; 4: 活动奖章,
			//"start_id": int64, 上一页的最后一个id，若是起始页，则填0，
			//"limit": int32, 分页大小,
			"page_num": int32,
			"page_size": int32,
			"exclude_associate_act": int, 是否排除关联了活动的奖章, 0:不排除， 1:排除
		}
		
+ Response:

		{		
			"data": {
				"total_num": int,
				"medal_list": [
					{
						"id": int64, 奖章id, 创建时填0,
						"type": int8, 奖章类型, 0: 系统奖章; 4: 活动奖章,
						"icon": string, 奖章大图,
						"gray_icon": string, 奖章大图灰,
						"middle_icon": string, 奖章中图,
						"middle_gray_icon": string, 奖章中图灰，
						"multi_lan_json": {
							"en_name": string,
							"zh_sc_name": string,
							"zh_tc_name": string,
							"de_name": string,
							"ja_name": string,
							"ko_name": string,
							"pt_name": string,
							"en_des": string,
							"zh_sc_des": string,
							"zh_tc_des": string,
							"de_des": string,
							"ja_des": string,
							"ko_des": string,
							"pt_des": string,
						},
						"create_time": int64,
						"update_time": int64,
						"is_associate_act": int, 是否关联了活动, 0: 否， 1:是
					},
				],
			},
			"status": "OK",
			"desc": ""
		}
		
#[删除奖章-`DELETE /www/medal/:medal_id`](#)
+ **创建** (`zhouhang`)

+ Request:

		{
		}
		
+ Response Succ:

		{
			"status": "OK",
			"desc": ""
		}
		
+ Response Error:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": (required, string, '', '返回错误code'),
			"desc": (required, string, '', '返回描述，错误时描述')
		}

# [获取feed标签 `GET /www/blast/feed_tags?keyword=?&pagenum=?&pagesize=?&sort_key=?`](#)

+ **创建** (`lyn young`)

+ Description:

		获取feed标签
		keyword 搜索标签
		sort_key 0时间，1真实热度，2热度

+ Request:

		{
			"keyword": (string, "" if not search),
			"pagenum": (int, 1),
			"pagesize": (int, 10),
			"sort_key": (int, 0, 1, 2)
		}

+ Response:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"data": {
				"data": [{
					"tag_name": (string, "fuck"),
					"create_time": (int, timestamp),
					"total_use": (int, 总使用量),
					"recent_use": (int, 最近30天使用量),
					"hot_num": (int, 热度),
					"real_hot_num": (int, 真实热度)
				}],
				"total": (int)
			},
			"desc": (required, string, '', '返回描述，错误时描述')
		}


# [修改标签热度 `POST /www/blast/feed_tag_hot`](#)

+ **创建** (`lyn young`)

+ Description:

		修改标签热度

+ Request:

		{
			"tag_name": (string, "fuck"),
			"hot_delta": (int, 可正可负)
		}


# [获取服务器已有的多语言 `GET /www/honor/languages`](#)

+ **创建**(`lyn young`)

+ Request:

+ Response:

		{
			"data": {
				"en": "英语",
				"zh_sc": "中文(简体)",
				"zh_tc": "中文(繁体)",
				"ja": "日语",
				"pt": "葡萄牙语",
				"de": "德语"
			},
			"desc": "success",
			"status": "OK"
		} // 保持相同的顺序

# [新建或更新荣誉 `POST /www/honor`](#)

+ **创建**(`lyn young`)

+ Request:

		{
			"honor_id": (int, 0创建, 非0更新),
			"icon": (string, 图标),
			"icon_large": (string, 大图标),
			"title": {
				"en": (string, 英文标题),
				"zh_sc": (string),
				... // 顺序不必保持一致
			},
			"desc": {
				"en": (string, 英文描述),
				"zh_sc": (string),
				... // 顺序不必保持一致，没有描述的可以为""
			},
		}

+ Response:

		{
			"honor_id": (int)
		}

# [删除荣誉 `DELETE /www/honor`](#)

+ **创建**(`lyn young`)

+ Request:

		{
			"honor_id": (int)
		}

+ Response:

		{
			"affect_num": (int, 成功为1)
		}


# [获取荣誉列表 `GET /www/honor`](#)

+ **创建**(`lyn young`)

+ Request:

		{
			"pagenum": (int),
			"pagesize": (int)
		}

+ Response:

		{
			"total": (int),
			"data": [{
				"id": (int, honor id),
				"title": (string),
				"icon": (string),
				"icon_large": (string),
				"grant_num": (int, 授予人数)
			}],
		}

# [授予荣誉 `POST /www/honor/grant`](#)

+ **创建**(`lyn young`)

+ Request:

		!!!请用Form表单提交!!!
		1. 单独授予, Content-Type: application/x-www-form-urlencoded
		{
			"user_id": (int),
			"honor_id": (int),
			"grant_time": (格式 "2016-12-27 10:23:45"),
			"deadline": (格式 "2016-12-27 10:23:45")
		}
		
		2. 批量授予, Content-Type: multipart/form-data
		{
			"excel": (excel文件, 文件扩展名必须是.xlsx),
			"honor_id": (int),
			"grant_time": (格式 "2016-12-27 10:23:45"),
			"deadline": (格式 "2016-12-27 10:23:45")
		}

+ Response:

		{
			"success": (int, 成功人数),
			"fails": ["fail reason 1", "fail reason 2"...]
		}

# [取消荣誉 `POST /www/honor/cancel`](#)

+ **创建**(`lyn young`)

+ Request:

		{
			"user_ids": (string, "1,2,3,4"),
			"honor_id": (int),
			"time": (格式 "2016-12-27 10:23:45"), // 如果不需要，传""或没有该字段
			"reason": (string, 取消的原因)
		}

+ Response:

		{
			"success": (int, 成功人数),
			"fails": ["fail reason 1", "fail reason 2"...]
		}

# [GPS设备配置列表 `GET /www/third_gps/device/get_list`](#)

+ **创建**(`zhouhang`, ``)

+ Description

		获取第三方GPS设备列表

+ Request:

		{
		}

+ Response:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"desc": (required, string, '', '返回描述，错误时描述')
			"data": {
				"device_id_list": [{
					"device_id": int,
					"device_id_name": "",
				}],
				"device_list": [{
					"id": int64,
					"device_name": "",
					"device_pic": "",
					"device_id": int, // 1: TomTom
					"device_type": "", // 设备类型，例如：GPS智能运动手表
					"create_time": int64,
					"redirect_client_url": "",
				}],
			},
		}

# [添加/编辑 GPS设备 `POST /www/third_gps/device/:id`](#)

+ **创建**(`zhouhang`, ``)

+ Description

		添加/编辑 GPS设备;
		添加时id填0，编辑时带上id

+ Request:

		{
			"device_name": "",
			"device_pic": "",
			"device_id": int, // 1: TomTom
			"device_type": "", // 设备类型，例如：GPS智能运动手表
			"redirect_client_url": "",
		}

+ Response:

		{
			"status": (required, string, 'Error', '返回状态 OK/Error'),
			"desc": (required, string, '', '返回描述，错误时描述')
			"data": int,
		}

