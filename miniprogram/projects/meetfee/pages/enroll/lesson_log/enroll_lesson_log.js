
const pageHelper = require('../../../../../helper/page_helper.js');
const helper = require('../../../../../helper/helper.js'); 
const ProjectBiz = require('../../../biz/project_biz.js');  

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		isLogin: true
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		ProjectBiz.initPage(this);  

		if (options && helper.isDefined(options.id)) {
			this.setData({
				isAdmin:true,
				isLoad: true,
				_params: {
					userId: options.id 
				}
			});
		}

		this._getSearchMenu();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	url: async function (e) {
		pageHelper.url(e, this);
	},

	bindCommListCmpt: function (e) {
		pageHelper.commListListener(this, e);
	},

	/** 搜索菜单设置 */
	_getSearchMenu: function () {
		

		let sortItems = [];

		let sortMenus = [{ label: '全部', type: '', value: '' }];
 

		sortMenus = sortMenus.concat([
			{ label: '初始赠送', type: 'type', value: '0' },
			{ label: '用户预订', type: 'type', value: '1' },
			{ label: '用户取消预订', type: 'type', value: '2' },
			{ label: '系统增加金额', type: 'type', value: '10' },
			{ label: '系统减少金额', type: 'type', value: '11' },
			{ label: '系统取消预订', type: 'type', value: '12' },  
		 
		]);



		this.setData({
			search: '',
			sortItems,
			sortMenus,
			isLoad: true
		});

	},
 
})