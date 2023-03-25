module.exports = { //meetfee
	PROJECT_COLOR: '#4988FD',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#4988FD',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	NEWS_NAME: '最新通知',
	NEWS_CATE: [
		{ id: 1, title: '最新通知', style: 'leftpic' },
	],
	NEWS_FIELDS: [

	],

	ENROLL_NAME: '场地',
	ENROLL_CATE: [
		{ id: 1, title: '羽毛球场' }, 
		{ id: 2, title: '乒乓球场' }, 
		{ id: 3, title: '网球场' }, 
		{ id: 4, title: '篮球场' }, 
		{ id: 5, title: '足球场' }, 
		{ id: 6, title: '台球桌' }, 
		{ id: 7, title: '棋牌室' }, 
	],
	ENROLL_FIELDS: [


	],
	ENROLL_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
	],

	ENROLL_TIME_NODE: {
		mark: 'mark-no',
		start: 9, //开始
		end: 22, // 结束
		price: 120, //价格 
		succ: false //是否已预订 
	},
	ENROLL_FREE_DAY_NODE: [ //平时
		{
			mark: 'mark-no',
			start: 9, //开始
			end: 13, // 结束
			price: 120, //价格 
			succ: false //是否已预订 
		},
		{
			mark: 'mark-no',
			start: 14, //开始
			end: 22, // 结束
			price: 180, //价格 
			succ: false //是否已预订 
		}
	],
	ENROLL_BUSY_DAY_NODE: [ //周末 
		{
			mark: 'mark-no',
			start: 9, //开始
			end: 22, // 结束
			price: 180, //价格 
			succ: false //是否已预订 
		}
	]


}