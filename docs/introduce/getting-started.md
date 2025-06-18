# 快速开始

## 安装

首先，你需要**下载**并**解压**（或**安装**）本软件:

- [LabelPlusFX-2.3.7-Win64.zip](https://github.com/Lost-Swords/LabelPlusFX_New/releases/download/v2.3.7/LabelPlusFX-2.3.7-Win64.zip)
- [LabelPlusFX-setup-2.3.7-Win64.exe](https://github.com/Lost-Swords/LabelPlusFX_New/releases/download/v2.3.7/LabelPlusFX-setup-2.3.7-win64.exe)
- [LabelPlusFX-setup-2.3.7-Mac.zip](https://github.com/Lost-Swords/LabelPlusFX_New/releases/download/v2.3.7/LabelPlusFX-2.3.7-Mac.zip)

往期版本请阅览 [release](https://github.com/Lost-Swords/LabelPlusFX_New/releases)

## 创建翻译文件

打开软件，点击菜单栏的**文件-**>**新建翻译**，打开文件窗口

![打开新建翻译](https://image.yeding.top/img/EXVmObm.png)
打开漫画所在文件夹，点击**保存**

![保存汉化文件](https://image.yeding.top/img/67HUoK9.png)

添加所有需要汉化的图片，点击**应用**

![添加汉化图片](https://image.yeding.top/img/1Ayix1i.png)

## 标号与翻译

点击右上**工作模式切换按钮**，切换至标号模式

![切换标号模式](https://image.yeding.top/img/5zyGJql.jpeg)

在标号模式下，你可以**左键点击**图上的文字区域对其进行**标号**，对不需要的标号点击**右键**进行**删除**

![点击区域标号](https://image.yeding.top/img/Insk0zt.png)

可通过点击**左上角分组名**，切换**标号分组**

![](https://image.yeding.top/img/BypKSGI.jpeg "切换分组")

在右下角的**文本输入区**，输入对应标号标签的翻译内容

![](https://image.yeding.top/img/e2EybJx.jpeg "输入翻译内容")

可通过图片右下角的**下拉框和切换按钮**，切换至其他图片

![](https://image.yeding.top/img/DYtVTXT.jpeg)

## 输出翻译文件

当所有图片均已完成标号和翻译后，请点击菜单栏的**导出**->**导出为LP文件**或**导出**->**导出为MEO文件**，导出该漫画的翻译文件。

![](https://image.yeding.top/img/ftQf6Xh.png)

> [!NOTE]
> MEO文件和LP文件都可以使用。LP文件兼容原本labelplus的PS导入脚本，MEO文件支持更多LabelplusFX的扩展功能。

打开需要导出翻译的文件夹，点击**保存**。

![](https://image.yeding.top/img/u2SMIF3.png "保存文件")

> [!NOTE]
> 可在保存类型再次更改保存的翻译类型

## 将翻译文件导入PS

1. 将翻译文件和目标图片放在同一目录下，确认译文内图片标题与图片本身文件名一致

2. 在ps中运行原版脚本文件`LabelPlus_Ps_Script.jsx`或FX版脚本`Meo_Ps_Script.jsx` (直接拖拽jsx文件到ps窗口中, 或`文件-脚本-浏览`打开)
   
   > 一种快速调用脚本的方法： 1. 找到`Photoshop`安装目录 2. 将嵌字脚本文件连同`ps_script_res`文件夹复制到Photoshop安装目录\Presets\Scripts`目录中 3. 重启Photoshop 4. 文件 -> 脚本 中即可看到嵌字脚本![](https://labelplus.gitbook.io/~gitbook/image?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F26241263%2F48927551-a0705900-ef11-11e8-86c9-5b7cbd7a9b9c.png&width=300&dpr=4&quality=100&sign=b7b09d26&sv=2)

3. 在弹出的窗口中, 点击...选择翻译文件
   ![](https://image.yeding.top/img/nFxma7Q.png)

4. 单击**导入**按钮, 等待PS脚本批量处理图片完成。打开图片所在文件夹，可以看到output目录下生成了新的psd文件
   ![](https://image.yeding.top/img/dCQS6Yv.png)
   
   

> LP原版PS脚本:[LabelPlus_PS-Script_1.7.3.zip](https://github.com/Lost-Swords/LabelPlusFX_New/releases/download/v2.3.6/LabelPlus_PS-Script_1.7.3.zip)
> 
> FX版PS脚本:[Meo_Ps_Script.zip](https://github.com/Lost-Swords/LabelPlusFX_New/releases/download/v2.3.6/Meo_Ps_Script.zip)

## 在PS上完成嵌字

在PS上打开对应的psd文件，可以看到对应文字区域已经根据标签分组并添加了翻译文字。

![](https://image.yeding.top/img/BWXRSuL.png)

![](https://image.yeding.top/img/83Fglk0.png)

至此，你可以在PS上完成后续嵌字工作。

