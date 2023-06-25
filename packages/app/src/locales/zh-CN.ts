export default {
  /** aside */
  datasets: '数据集',
  projects: '项目',
  annotator: '标注器',
  annotate: '标注',
  lab: '实验室',
  docs: '文档',

  /** menu */
  'menu.Home': '首页',
  'menu.Dataset': '数据集',
  'menu.Dataset.Dataset': '数据集',
  'menu.Dataset.Datasets': '数据集',
  'menu.Project': '项目',
  'menu.Project.Projects': '项目列表',
  'menu.Project.ProjectDetail': '项目详情',
  'menu.Project.ProjectTaskWorkspace': '任务工作站',
  'menu.Login': '登录',
  'menu.Annotator': '标注',
  'menu.Lab': '实验室',
  'menu.Lab.Lab': '实验室',
  'menu.Lab.Datasets': '数据集',
  'menu.Lab.flagtool': '标记工具',

  /** user */
  login: '登录',
  logout: '退出登录',
  loginSuccess: '登录成功',
  loginAuthenticationFailed: '鉴权失败，请检查你的用户名或密码是否正确.',
  logoutSuccess: '登出成功',
  logoutFailed: '登出失败',
  username: '用户名',
  password: '密码',
  usernameTip: '请输入用户名',
  passwordTip: '请输入密码',
  getStart: '开 始',

  /** dataset */
  'dataset.images': '张图片',
  'dataset.detail.category': '分类',
  'dataset.detail.labelSets': '标注集',
  'dataset.diffMode.overlay': '覆盖',
  'dataset.diffMode.tiled': '平铺',
  'dataset.detail.labelSetsName': '名称',
  'dataset.detail.confidence': '置信度',
  'dataset.detail.style': '样式',
  'dataset.detail.displayOptions': '展示选项',
  'dataset.detail.showAnnotations': '显示选定类型的标注',
  'dataset.detail.displayType': '类别',
  'dataset.detail.analysis': '分析',
  'dataset.detail.analModal.title': '分析',
  'dataset.detail.analModal.btn': '分析 FN/FP',
  'dataset.detail.analModal.select': '选择一个预标注集',
  'dataset.detail.analModal.precision': '精度',
  'dataset.detail.analModal.sort': '排序',
  'dataset.detail.analModal.display': '展示',
  'dataset.detail.analModal.diff': '对比',
  'dataset.detail.analModal.score': '分数',
  'dataset.detail.analModal.exit': '退出分析',
  'dataset.detail.columnSetting.title': '最大展示列数',

  'dataset.toAnalysis.unSupportWarn': '您应该先加载包含目标检测结果的预标注集',
  'dataset.toAnalysis.unSelectWarn': '请选择一个预标注集',
  'dataset.onClickCopyLink.success': '复制链接成功!',
  'dataset.detail.overlay': '覆盖',

  /** Annotate */
  'annotate.quick': '快速标注',
  'annotate.quick.desc': '上传本地图片集，进行快速标注体验',
  'annotate.collaborative': '协同标注',
  'annotate.collaborative.desc': '创建标注项目，进行多人协同标注管理',

  /** Annotator */
  'annotator.setting': '设置',
  'annotator.annotate': '标注',
  'annotator.export': '导出标注',
  'annotator.formModal.title': '开始之前',
  'annotator.formModal.importImages': '导入图片',
  'annotator.formModal.imageTips':
    '注意：最多导入{count}张图片，每张图片不超过{size}MB。',
  'annotator.formModal.categories': '导入标注类别',
  'annotator.formModal.addCategory': '添加',
  'annotator.formModal.categoryPlaceholder':
    '请输入类别名称, 多个类别可以换行分隔, 例如: \n person \n dog \n car',
  'annotator.formModal.categoriesCount': '当前类别标签数量',
  'annotator.formModal.fileRequiredMsg': '请至少导入一张图片',
  'annotator.formModal.fileCountLimitMsg': '图片量不能超过{count}张',
  'annotator.formModal.fileSizeLimitMsg': '单张图片不能超过{size}MB',
  'annotator.formModal.categoryRequiredMsg': '请至少输入一个类别标签',
  'annotator.formModal.deleteCategory.titlt': '注意',
  'annotator.formModal.deleteCategory.desc':
    '有标注中使用了这个类别，请先手动删除这些标注或修改它们的类别',

  /** SmartAnnotation */
  'smartAnnotation.infoModal.title': '体验智能标注',
  'smartAnnotation.infoModal.content':
    '抱歉, DeepDataSpace的本地版本暂时不支持智能标注功能, 您可以前往官网了解更多信息或联系我们（deepdataspace_dm@idea.edu.cn）获取智能标注的体验通道。',
  'smartAnnotation.infoModal.action': '前往官网',
  'smartAnnotation.detection.name': '智能目标检测',
  'smartAnnotation.segmentation.name': '智能图像分割',
  'smartAnnotation.pose.name': '智能姿态估计',
  'smartAnnotation.annotate': '生成标注',
  'smartAnnotation.detection.input': '选择或输入类别',
  'smartAnnotation.pose.input': '选择模版',
  'smartAnnotation.pose.apply': '保留当前结果',
  'smartAnnotation.segmentation.tipsInitial':
    '提示：在目标对象周围拉一个包围框或单击其中心点，生成初始结果。',
  'smartAnnotation.segmentation.tipsNext':
    '请修正标注结果: 请单击左键添加正点（目标包含该点），单击右键添加负点（目标不包含该点）。',
  'smartAnnotation.pose.tipsNext':
    '请修正标注结果: 请单击左键添加正点（目标包含该点），单击右键添加负点（目标不包含该点）。',
  'smartAnnotation.msg.loading': '正在请求智能标注结果...',
  'smartAnnotation.msg.success': '智能标注请求成功',
  'smartAnnotation.msg.error': '智能标注请求失败',
  'smartAnnotation.msg.labelRequired': '请至少选择一个目标类别',
  'smartAnnotation.msg.confResults': '共有{count}条标注符合目标置信区间',
  'smartAnnotation.msg.applyConf': '已保留{count}条标注，其他标注已移除',

  /** Editor */
  'editor.save': '保存',
  'editor.cancel': '取消',
  'editor.delete': '删除',
  'editor.reject': '拒绝',
  'editor.approve': '通过',
  'editor.prev': '上一张',
  'editor.next': '下一张',
  'editor.exit': '退出',
  'editor.shortcuts': '快捷键',
  'editor.confidence': '置信区间',
  'editor.annotsList.categories': '分类',
  'editor.annotsList.objects': '实例',
  'editor.annotsList.hideAll': '隐藏全部',
  'editor.annotsList.showAll': '显示全部',
  'editor.annotsList.hideCate': '隐藏类别',
  'editor.annotsList.showCate': '显示类别',
  'editor.annotsList.hide': '隐藏',
  'editor.annotsList.show': '显示',
  'editor.annotsList.delete': '删除',
  'editor.annotsList.convertToSmartMode': '转换至交互式智能分割',
  'editor.toolbar.undo': '撤销',
  'editor.toolbar.redo': '重做',
  'editor.toolbar.rectangle': '矩形',
  'editor.toolbar.polygon': '多边形',
  'editor.toolbar.skeleton': '骨骼（人体）',
  'editor.toolbar.aiAnno': '智能标注',
  'editor.toolbar.drag': '拖拽/选择工具',
  'editor.toolbar.mask': '遮罩分割工具',
  'editor.zoomTool.reset': '重置尺寸',
  'editor.zoomIn': '放大',
  'editor.zoomOut': '缩小',
  'editor.toolbar.undo.desc': '撤销上一步操作',
  'editor.toolbar.redo.desc': '恢复上一步撤销的操作',
  'editor.toolbar.rectangle.desc':
    '单击确定起始点，拖动鼠标以创建围绕目标的矩形标注。',
  'editor.toolbar.polygon.desc': '围绕目标单击添加顶点，创建闭合的多边形标注。',
  'editor.toolbar.skeleton.desc':
    '单击并拖动鼠标以创建人体骨骼模型，然后修改各个点的位置。',
  'editor.toolbar.mask.desc': 'Mask TODO',
  'editor.toolbar.aiAnno.desc':
    '在矩形/多边形/骨骼工具下开启智能标注，可进入对应的智能标注模式。',
  'editor.toolbar.drag.desc':
    '拖拽模式下，可选中已有标注，并对其修改，点击空白区域取消选中。',
  'editor.annotsEditor.title': '修改标注实例',
  'editor.annotsEditor.delete': '删除',
  'editor.annotsEditor.finish': '完成',
  'editor.annotsEditor.add': '添加类别',
  'editor.annotsEditor.addCategory': '添加一个类别',
  'editor.confirmLeave.content': '您当前的修改还未保存，确定要离开吗?',
  'editor.confirmLeave.cancel': '取消',
  'editor.confirmLeave.ok': '无需保存',
  'editor.shortcuts.tools': '基础工具',
  'editor.shortcuts.tools.rectangle': '矩形',
  'editor.shortcuts.tools.polygon': '多边形',
  'editor.shortcuts.tools.skeleton': '骨骼',
  'editor.shortcuts.tools.drag': '拖拽/选择工具',
  'editor.shortcuts.tools.mask': '遮罩分割工具',
  'editor.shortcuts.general': '通用控制',
  'editor.shortcuts.general.smart': '开启/关闭智能标注模式',
  'editor.shortcuts.general.undo': '撤销',
  'editor.shortcuts.general.redo': '重做',
  'editor.shortcuts.general.next': '下一张',
  'editor.shortcuts.general.prev': '上一张',
  'editor.shortcuts.general.save': '保存',
  'editor.shortcuts.general.accept': '审核通过',
  'editor.shortcuts.general.reject': '审核拒绝',
  'editor.shortcuts.viewControl': '视图控制',
  'editor.shortcuts.viewControl.zoomIn': '放大',
  'editor.shortcuts.viewControl.zoomOut': '缩小',
  'editor.shortcuts.viewControl.zoomReset': '重置尺寸以适应屏幕',
  'editor.shortcuts.viewControl.hideCurrObject': '隐藏/显示当前选中的实例',
  'editor.shortcuts.viewControl.hideCurrCategory':
    '隐藏/显示当前选中实例所属类别',
  'editor.shortcuts.viewControl.hideAll': '隐藏/显示所有实例',
  'editor.shortcuts.viewControl.panImage': '拖拽图片: 按住空格同时拖动鼠标',
  'editor.shortcuts.annotsControl': '标注控制',
  'editor.shortcuts.annotsControl.delete': '删除当前选中的实例',
  'editor.shortcuts.annotsControl.finish': '完成当前实例的创建/修改',
  'editor.shortcuts.annotsControl.cancel': '取消选中/放弃正在新建的实例',
  'editor.msg.lostCategory': '{count}条标注缺失类别!',
  'editor.annotsList.uncategorized': '未分类',
  'editor.annotsList.point.notInImage': '不在图片内',
  'editor.annotsList.point.notVisible': '在图中但不可见',
  'editor.annotsList.point.visible': '可见',
  'editor.anno.mask.emptyWarning': '请至少添加一个有效 Mask 标注',
  'editor.anno.mask.translateToRleError': '转换 Mask 格式错误',

  /** projects */
  'proj.title': '项目',
  'proj.table.name': '项目名称',
  'proj.table.owner': '项目所有者',
  'proj.table.datasets': '数据集',
  'proj.table.progress': '任务进度',
  'proj.table.PM': '项目经理',
  'proj.table.status': '状态',
  'proj.table.createAt': '创建时间',
  'proj.table.action': '操作',
  'proj.table.action.accept': '通过',
  'proj.table.action.reject': '拒绝',
  'proj.table.action.edit': '编辑',
  'proj.table.action.init': '初始化',
  'proj.table.action.info': '信息',
  'proj.table.action.detail': '详情',
  'proj.table.action.export': '导出',
  'proj.table.newProject': '新建项目',

  'proj.table.detail.index': '索引',
  'proj.table.detail.labelLeader': '标注组长',
  'proj.table.detail.labeler': '标注员',
  'proj.table.detail.reviewLeader': '审核组长',
  'proj.table.detail.reviewer': '审核员',
  'proj.table.detail.progress': '进度',
  'proj.table.detail.status': '状态',
  'proj.table.detail.action': '操作',

  'proj.table.detail.action.assignLeader': '分配组长',
  'proj.table.detail.action.assignWorker': '分配操作人',
  'proj.table.detail.action.detail': '详情',
  'proj.table.detail.action.restart': '重新开始',
  'proj.table.detail.action.accept': '通过',
  'proj.table.detail.action.reject': '拒绝',
  'proj.table.detail.action.view': '查看',
  'proj.table.detail.action.startLabel': '开始标注',
  'proj.table.detail.action.startReview': '开始审核',

  'proj.table.detail.batchAssignLeader': '批量分配组长',
  'proj.detail.owner': '项目所有者',
  'proj.detail.managers': '项目经理',

  'proj.assign.modal.assign': '分配',
  'proj.assign.modal.reassign': '重新分配',
  'proj.assign.modal.ll.label': '标注团队负责人',
  'proj.assign.modal.ll.placeholder': '选择一名成员作为团队负责人来分配标注员',
  'proj.assign.modal.ll.tooltip': '也可以将自己分配为团队负责人',
  'proj.assign.modal.ll.msg': '请选择一名成员作为此任务的团队负责人',
  'proj.assign.modal.rl.label': '审核团队负责人',
  'proj.assign.modal.rl.placeholder': '选择一名成员作为团队负责人来分配审核员',
  'proj.assign.modal.rl.tooltip': '也可以将自己分配为团队负责人',
  'proj.assign.modal.rl.msg': '请选择一名成员作为此任务的团队负责人',
  'proj.assign.modal.ler.label': '标注员',
  'proj.assign.modal.ler.placeholder': '选择{times}名成员作为标注员工作',
  'proj.assign.modal.ler.tootltip': '也可以将自己分配为标注员',
  'proj.assign.modal.ler.msg': '请选择{times}名成员作为此任务的标注员',
  'proj.assign.modal.ler.msgTimes': '必须是{times}名成员',
  'proj.assign.modal.rer.label': '审核员',
  'proj.assign.modal.rer.placeholder': '选择{times}名成员作为标注员工作',
  'proj.assign.modal.rer.tootltip': '也可以将自己分配为审核员',
  'proj.assign.modal.rer.msg': '请选择{times}名成员作为此任务的审核员',
  'proj.assign.modal.rer.msgTimes': '必须是{times}名成员',
  'proj.assign.modal.reassign.label': '重新分配给',
  'proj.assign.modal.reassign.placeholder': '选择一名成员进行重新分配',
  'proj.assign.modal.reassign.msg': '请选择一名成员进行重新分配',

  'proj.detail.modal.reassign': '重新分配',
  'proj.detail.modal.index': '索引',
  'proj.detail.modal.role': '角色',
  'proj.detail.modal.worker': '人员',
  'proj.detail.modal.progress': '进度',
  'proj.detail.modal.action': '操作',
  'proj.detail.modal.title': 'ID：{id} 的任务详情',

  'proj.taskProgress.done': '完成',
  'proj.taskProgress.inRework': '已驳回',
  'proj.taskProgress.toReview': '待审核',
  'proj.taskProgress.toLabel': '待标注',

  'proj.assignModalFinish.assignLeader': '分配团队负责人成功!',
  'proj.assignModalFinish.assignWorker': '分配团队工作人员成功!',
  'proj.assignModalFinish.reassignWorker': '重新分配团队工作人员成功!',
  'proj.assignModalFinish.restarTask': '重新开始任务成功!',
  'proj.assignModalFinish.commiTask': '提交任务成功!',
  'proj.assignModalFinish.changeTaskStatus': '修改任务状态成功!',

  'proj.projectModalFinish.new': '新建项目成功!',
  'proj.projectModalFinish.edit': '编辑项目成功!',
  'proj.projectModalFinish.init': '初始化项目成功!',
  'proj.projectModalFinish.change': '修改项目状态成功!',

  'proj.onLabelSave.warning': '没有添加任何标注，请检查',
  'proj.onLabelSave.loading': '正在保存标注...',
  'proj.onLabelSave.save': '保存成功！',
  'proj.onLabelSave.finish': '完成工作！',
  'proj.onLabelSave.error': '保存标注失败，请重试',
  'proj.onReviewResult.loading': '正在保存审核结果...',
  'proj.onReviewResult.save': '保存成功！',
  'proj.onReviewResult.finish': '完成工作！',
  'proj.onReviewResult.error': '保存审核结果失败，请重试',
  'proj.tabItems.toLabel': '待标注 ({num})',
  'proj.tabItems.toReview': '待审核 ({num})',
  'proj.tabItems.inRework': '已驳回 ({num})',
  'proj.tabItems.done': '已完成 ({num})',

  'proj.editModal.editProj': '编辑项目',
  'proj.editModal.newProj': '新建项目',
  'proj.editModal.stepForm.title': '基础信息',
  'proj.editModal.stepForm.desc': '仅限管理员',
  'proj.editModal.stepForm.name.label': '项目名称',
  'proj.editModal.stepForm.name.placeholder': '请输入项目名称',
  'proj.editModal.stepForm.name.rule': '请输入项目名称',
  'proj.editModal.stepForm.desc.label': '描述',
  'proj.editModal.stepForm.desc.placeholder': '选填，关于项目的描述',
  'proj.editModal.stepForm.dataset.label': '数据集',
  'proj.editModal.stepForm.dataset.placeholder': '请至少连接一个数据集至此项目',
  'proj.editModal.stepForm.dataset.rule': '请至少选择一个数据集',
  'proj.editModal.stepForm.preLabel.label': '预标注',
  'proj.editModal.stepForm.preLabel.placeholder': '请输入预标注名称',
  'proj.editModal.stepForm.category.label': '分类',
  'proj.editModal.stepForm.category.placeholder': '请以逗号分隔输入项目分类',
  'proj.editModal.stepForm.category.rule': '请输入项目分类',
  'proj.editModal.stepForm.PM.label': '项目经理',
  'proj.editModal.stepForm.PM.placeholder':
    '请选择至少一名成员作为项目经理来管理任务',
  'proj.editModal.stepForm.PM.extra': '也可以将自己分配为项目经理',
  'proj.editModal.stepForm.PM.rule': '请至少选择一名成员作为项目经理',
  'proj.editModal.stepForm.task.title': '流程设置',
  'proj.editModal.stepForm.task.desc': '仅项目经理可见',
  'proj.editModal.stepForm.task.msg':
    '仅项目经理可见（您也可以在前一步中将自己分配为项目经理）。',
  'proj.editModal.stepForm.radio.label': '任务分配方式',
  'proj.editModal.stepForm.radio.dataset': '数据集',
  'proj.editModal.stepForm.radio.size': '批次大小',
  'proj.editModal.stepForm.batchSize.label': '批次大小',
  'proj.editModal.stepForm.batchSize.placeholder': '请输入批次大小',
  'proj.editModal.stepForm.batchSize.tooltip':
    '批次大小设置为每个任务的图像数量',
  'proj.editModal.stepForm.batchSize.msg': '请输入批次大小',
  'proj.editModal.stepForm.rview.label': '审核者设置',
  'proj.editModal.stepForm.rview.no': '无审核者',
  'proj.editModal.stepForm.rview.one': '1 名审核者',
  'proj.editModal.setWorkflowNow': '立即设置工作流程',

  'proj.infoModal.title': '项目信息',
  'proj.infoModal.name': '项目名称',
  'proj.infoModal.desc': '描述',
  'proj.infoModal.label': '项目经理',

  'proj.exportModal.title': '导出到数据集',
  'proj.exportModal.labelName.name': '标注集名称',
  'proj.exportModal.labelName.rule': '请输入标注集名称',
  'proj.exportModal.labelName.tips':
    '点击“确定”后，可以用标注集名称查看所选数据集的标注结果。',
  'proj.exportModal.submitSuccess':
    '已成功导出标注集 "{name}" 到所选数据集，您可以在数据集模块中查看标注结果。',

  'proj.workspace.eTask.startLabel': '开始标注',
  'proj.workspace.eTask.edit': '编辑',
  'proj.workspace.eTask.startRework': '处理驳回',
  'proj.workspace.eTask.startReview': '开始审核',
  'proj.workspace.eProj.startLabeling': '开始标注',
  'proj.workspace.eProj.startRework': '处理驳回',
  'proj.workspace.eProj.startReview': '开始审核',
  'proj.workspace.eProj.role': '当前角色',

  'proj.statusMap.waiting': '等待中',
  'proj.statusMap.initializing': '初始化中',
  'proj.statusMap.working': '进行中',
  'proj.statusMap.reviewing': '审核中',
  'proj.statusMap.rejected': '已拒绝',
  'proj.statusMap.accepted': '已通过',
  'proj.statusMap.exported': '已导出',

  'proj.eTaskStatus.waiting': '等待中',
  'proj.eTaskStatus.working': '进行中',
  'proj.eTaskStatus.reviewing': '审核中',
  'proj.eTaskStatus.rejected': '已拒绝',
  'proj.eTaskStatus.accepted': '已通过',

  /** Lab */
  'lab.card.title': '标记工具',
  'lab.card.subTitle': '选择需要标记的图像',
  'lab.toolsBar.selectAll': '全选',
  'lab.toolsBar.selectSome': '已选择 {num} 张',
  'lab.toolsBar.selectInvert': '反选',
  'lab.toolsBar.filter': '过滤',
  'lab.toolsBar.saveAs': '将已选项目保存为',
  'lab.toolsBar.updateOrder': '更新顺序',

  'lab.displayOption.showAnnotations': '显示选定类型的标注',
  'lab.displayOption.showAllCategory': '显示所有分类的标注',
  'lab.displayOption.showImgDesc': '显示图像描述',
  'lab.displayOption.showBoxText': '在框中显示文本',
  'lab.displayOption.showSegFilling': '显示分割线条（F）',
  'lab.displayOption.showSegContour': '显示分割轮廓（C）',
  'lab.displayOption.showMattingColorFill': '显示抠图颜色填充',
  'lab.displayOption.showKeyPointsLine': '显示关键点线条',
  'lab.displayOption.showKeyPointsBox': '显示关键点框',
  'lab.onClickCopyLink.success': '复制链接成功!',

  /** 404 */
  'notFound.title': '抱歉，您访问的页面不存在。',
  'notFound.backHome': '返回首页',

  /** mobile alert **/
  'mobileAlert.title': '温馨提示',
  'mobileAlert.subTitle': '本站暂不支持移动端显示，请使用电脑打开',

  /** app */
  'layout.title': 'Deep Data Space',

  /** error code & status msg or error handler msg **/
  'requestConfig.errorData.msg': '请求错误，请重试（{code}）',
  'requestConfig.success.msg': '请求成功。',
  'requestConfig.unAuth.msg': '未授权的访问。请登录。',
  'requestConfig.permissionDenied.msg':
    '权限被拒绝。您的帐户没有执行此操作所需的权限。',
  'requestConfig.responseStatus.msg': '响应状态：{status}',
  'requestConfig.noResponse.msg': '无响应！请重试。',
  'requestConfig.requestError.msg': '请求错误，请重试。',
};
