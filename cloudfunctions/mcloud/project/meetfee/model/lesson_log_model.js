/**
 * Notes: 金额变动记录实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2023-03-08 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');
class LessonLogModel extends BaseProjectModel { }

// 集合名
LessonLogModel.CL = BaseProjectModel.C('lesson_log');

LessonLogModel.DB_STRUCTURE = {
	_pid: 'string|true',
	LESSON_LOG_ID: 'string|true',


	LESSON_LOG_USER_ID: 'string|true|comment=用户ID',

	LESSON_LOG_ENROLL_ID: 'string|false|comment=预订项目PK',

	LESSON_LOG_DESC: 'string|false|comment=备注',

	LESSON_LOG_TYPE: 'int|true|default=1|comment=类型 0=用户预订-,1=用户取消预订+,10=系统增加金额+,11=系统减少金额-,12=系统取消预订+',

	LESSON_LOG_EDIT_ADMIN_ID: 'string|false|comment=最近修改的管理员ID',
	LESSON_LOG_EDIT_ADMIN_NAME: 'string|false|comment=最近修改的管理员名',
	LESSON_LOG_EDIT_ADMIN_TIME: 'int|true|default=0|comment=管理员最近修改的时间',


	LESSON_LOG_CHANGE_CNT: 'int|true|default=0|comment=当变动金额数(可正负)',
	LESSON_LOG_LAST_CNT: 'int|true|default=0|comment=变动前次数',
	LESSON_LOG_NOW_CNT: 'int|true|default=0|comment=当前次数', 

	LESSON_LOG_ADD_TIME: 'int|true',
	LESSON_LOG_ADD_IP: 'string|false',

	LESSON_LOG_EDIT_TIME: 'int|true',
	LESSON_LOG_EDIT_IP: 'string|false',
}

// 字段前缀
LessonLogModel.FIELD_PREFIX = "LESSON_LOG_";

/**
 * 类型 0=初始赠送，1=用户预订,2=用户取消预订,10=系统增加,11=系统减少,12=系统取消预订 
 */
LessonLogModel.TYPE = {
	INIT: 0,
	USER_APPT: 1,
	USER_CANCEL: 2,
	ADMIN_ADD: 10,
	ADMIN_REDUCE: 11,
	ADMIN_CANCEL: 12, 
};

LessonLogModel.TYPE_DESC = {
	INIT: '初始赠送',
	USER_APPT: '用户预订',
	USER_CANCEL: '用户取消预订',
	ADMIN_ADD: '系统增加金额',
	ADMIN_REDUCE: '系统减少金额',
	ADMIN_CANCEL: '系统取消预订', 
};


module.exports = LessonLogModel;