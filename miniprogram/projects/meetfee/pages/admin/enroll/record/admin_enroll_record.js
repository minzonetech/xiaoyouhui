const cloudHelper = require('../../../../../../helper/cloud_helper.js');
const pageHelper = require('../../../../../../helper/page_helper.js');
const timeHelper = require('../../../../../../helper/time_helper.js');
const AdminBiz = require('../../../../../../comm/biz/admin_biz.js');
const EnrollBiz = require('../../../../biz/enroll_biz.js');

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false,
		cateId: '1',

		dateCmtpEndDay: '',

		day: timeHelper.time('Y-M-D'),
		used: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		if (!AdminBiz.isAdmin(this)) return;


		//	if (!await PassportBiz.loginMustBackWin(this)) return;


		if (options && options.day) {
			this.setData({ day: options.day });
		}


		if (options && options.id) {
			this.setData({ cateId: options.id });
		}

		EnrollBiz.setCateTitle(this.data.cateId);

		this.setData({ isLoad: false });
		await this._loadEnroll();
		await this._loadDayUsed(this.data.day);
		this.setData({ isLoad: true });
	},

	_loadEnroll: async function () {
		let day = this.data.day;

		let params = {
			cateId: this.data.cateId,
			day,
		};
		let opt = {
			title: 'bar'
		};
		await cloudHelper.callCloudSumbit('enroll/all', params, opt).then(res => {
			this.setData({
				columns: res.data,
				dateCmtpEndDay: res.data.maxDay,
			})
			return;
		});


	},


	_loadDayUsed: async function (day) {
		if (!day) return;

		let params = {
			cateId: this.data.cateId,
			day,
		};
		let opt = {
			title: 'bar'
		};
		await cloudHelper.callCloudSumbit('enroll/day_used', params, opt).then(res => {
			this.setData({
				used: res.data
			});
		});

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: async function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () { },

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () { },

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: async function () {


	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () { },

	bindDateSelectCmpt: function (e) {
		this.setData({
			day: e.detail
		}, async () => {
			this.setData({ isLoad: false });
			await this._loadEnroll();
			await this._loadDayUsed(e.detail);
			this.setData({ isLoad: true });
		});
	},


	url: function (e) {
		pageHelper.url(e, this);
	},


	onPageScroll: function (e) {
		// 回页首按钮
		pageHelper.showTopBtn(e, this);

	},

	bindCancelCmpt: async function (e) {
		if (!AdminBiz.isAdmin(this)) return;

		let callback = async () => {

			let params = {
				enrollJoinId: e.detail.joinId
			}
			let opts = {
				title: '取消中'
			}
			try {
				await cloudHelper.callCloudSumbit('admin/enroll_join_del', params, opts).then(res => {

					let cb = async () => {
						this.setData({ isLoad: false });
						await this._loadDayUsed(this.data.day);
						this.setData({ isLoad: true });
					}

					pageHelper.showSuccToast('取消成功', 1000, cb);
				});
			} catch (err) {
				console.error(err);
			}
		}

		pageHelper.showConfirm('确认取消该记录？ 取消后不可恢复', callback);
	},

	onShareAppMessage: function (res) {

	}
})